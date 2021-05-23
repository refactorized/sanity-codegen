import generate from '@babel/generator';
import prettier from 'prettier';
import {
  schemaNormalizer,
  generateSchemaTypes,
} from '@sanity-codegen/schema-codegen';
import ts from 'typescript';
import { transformGroqToTypescript } from '../src/transform-groq-to-typescript';
import { stripIndent, stripIndents } from 'common-tags';

interface Params {
  query: string;
  schema: any[];
  expectedType: string;
}

export async function assertGroqTypeOutput({
  schema,
  query,
  expectedType,
}: Params) {
  const compilerOptions: ts.CompilerOptions = {
    strict: true,
    target: ts.ScriptTarget.ESNext,
    outDir: './dist',
    esModuleInterop: true,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    noEmit: true,
  };

  // seems like the types to babel are mismatched
  // @ts-expect-error
  const { code: groqCodegen } = generate(transformGroqToTypescript({ query }));
  const schemaCode = await generateSchemaTypes({
    schema: schemaNormalizer(schema),
  });
  const queryCode = stripIndent`
    declare namespace Sanity {
      namespace Queries {
        type QueryType = ${stripIndent(groqCodegen)};
      }
    }
  `;

  const testEntryCode = stripIndent`
    /** used to dismiss any unused errors */
    declare function sideEffect(x: any): void;

    type ExpectedType = ${stripIndent(expectedType)};
    declare const valueA: Sanity.Queries.QueryType;
    declare const valueB: ExpectedType;
    
    const fnA = <T extends Sanity.Queries.QueryType>(t: T) => sideEffect(t);
    const fnB = <T extends ExpectedType>(t: T) => sideEffect(t);

    // use the above function with bounded polymorphism to assert that the
    // ExpectedType conforms to the outputted QueryType and vice versa
    fnA(valueB);
    fnB(valueA);
  `;

  const host = ts.createCompilerHost(compilerOptions);
  const originalReadFile = host.readFile.bind(host);
  host.readFile = (fileName) => {
    if (fileName === 'query.d.ts') return queryCode;
    if (fileName === 'schema.d.ts') return schemaCode;
    if (fileName === 'test-entry.ts') return testEntryCode;
    return originalReadFile(fileName);
  };

  const program = ts.createProgram(
    ['query.d.ts', 'schema.d.ts', 'test-entry.ts'],
    compilerOptions,
    host,
  );

  const emitResult = program.emit();

  if (emitResult.emitSkipped) {
    throw new Error('emit skipped');
  }

  const diagnostics = [
    ...program.getGlobalDiagnostics(),
    ...program.getOptionsDiagnostics(),
    ...program.getSemanticDiagnostics(),
    ...program.getSyntacticDiagnostics(),
    ...program.getDeclarationDiagnostics(),
    ...program.getConfigFileParsingDiagnostics(),
  ];

  if (diagnostics.length) {
    throw new Error(stripIndents`
      GROQ assertion failed.

      ${diagnostics
        .map((diagnostic) =>
          stripIndents(
            ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'),
          ),
        )
        .join('\n\n')}
    `);
  }

  return stripIndent`
    ${prettier.format(`type Query = ${groqCodegen}`, {
      parser: 'typescript',
      singleQuote: true,
    })}
  `;
}
