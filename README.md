## ⚠️ This is a special HZ fork that handles reference types differently

(see original repo for actual updates and code-gen hotness.  This readme is stripped down from the original)

## Installation

```
npm i --save-dev sanity-codegen prettier
```

or

```
yarn add --dev sanity-codegen prettier
```

> Note: Prettier is a peer dependency

## CLI Usage

Create a `sanity-codegen.config.ts` or `sanity-codegen.config.js` at the root of your project.

```ts
import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
  schemaPath: './path/to/your/schema',
  outputPath: './schema.ts',

  // NOTE: The CLI ships with a pre-configured babel config that shims out
  // the Sanity parts system. This babel config does not read from any
  // `.babelrc` or `babel.config.js`. You can only configure extra babel
  // options here.
  // babelOptions: require('./.babelrc.json'), // (optional)
};

export default config;
```

[See here for the rest of the available options.](https://github.com/ricokahler/sanity-codegen/blob/d4eb4a8ac5f6d27f709697ccdbd2a296d1e51dc2/src/generate-types.ts#L97-L121)

Additionally, you can import the [default babel config](https://github.com/ricokahler/sanity-codegen/blob/36e74c3b73bde57e0fbeb913857f98c190407d26/src/cli.ts#L8-L46) from `const { defaultBabelOptions } = require('sanity-codegen/cli')` if you need to merge your current config.

Then run the CLI with [`npx`](https://github.com/npm/npx) at the root of your sanity project.

```
npx sanity-codegen
```

> Running with `npx` runs the CLI in the context of your project's node_modules.

### Schema Codegen Options

If you want your type to be marked as required instead of optional, add `codegen: { required: true }` to your schema fields:

```ts
export default {
  name: 'myDocument',
  type: 'document',
  fields: [
    {
      name: 'aRequiredField',
      type: 'string',
      // 👇👇👇
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
      // 👆👆👆
    },
  ],
};
```

This will tell the codegen to remove the optional `?` modifier on the field.

> **NOTE:** Drafts that are run through the document may have incorrect types. Be aware of this when using preview mode.

## Usage with first-party client (`@sanity/client`)

For more stable usage, you can use the generated types with the first party javascript client [`@sanity/client`](https://www.sanity.io/docs/js-client) (or the tiny alternative [`picosanity`](https://github.com/rexxars/picosanity)).

Query for documents like normal but use the generated types to create the correct type for your query.

```ts
import sanityClient from '@sanity/client';
import groq from 'groq';
import type * as Schema from '../your-resulting-codegen';

const client = sanityClient({
  projectId: 'your-project-id',
  dataset: 'bikeshop',
  token: 'sanity-auth-token', // or leave blank to be anonymous user
  useCdn: true, // `false` if you want to ensure fresh data
});

// Step 1: write a query
const query = groq`
  *[_type == 'blogPost'] {
    // pick the title
    title,
    // then a full expansion of the author
    author -> { ... },
  }
`;

// Step 2: create a type for your query's result composed from the codegen types.
//
// Refer to Typescript's utility types for useful type helpers:
// https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
//
// And also intersections:
// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
type QueryResult = Array<
  Omit<Pick<Schema.BlogPost, 'title'>, 'author'> & {
    author: Schema.Author;
  }
>;

async function main() {
  // Step 3: add the `QueryResult` as the type parameter as well as the query
  const results = await client.fetch<QueryResult>(query);

  const first = results[0];

  console.log(first.title); // "Title"
  console.log(first.author); // { name: 'Example', bio: '...' }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
```

### Next.js

If you're using Next.js you can write your projections/transforms in `getStaticProps` and use the return type to infer incoming props. The types will flow down nicely 😎.

```tsx
import sanity from './sanity-client';

export const getStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const [blogPost] = sanity.getAll('blogPost', `seo.slug.current == "${slug}"`);
  const { title, content } = blogPost;

  return { props: { title, content } };
};

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type Props = UnwrapPromise<ReturnType<typeof getStaticProps>>['props'];

function BlogPost({ title, content }: Props) {
  return (
    <>
      <h1>{title}</h1>
      <p>{content}</p>
    </>
  );
}

export default BlogPost;
```

## API Usage

Better docs coming soon. For now the gist is:

```ts
import generateTypes from 'sanity-codegen/generate-types';

generateTypes({
  // see here:
  // https://github.com/ricokahler/sanity-codegen/blob/13250d60892bfc95b73d88b28e88b574a31935a7/src/generate-types.ts#L85-L109
}).then((generatedTypes) => {
  // `generatedTypes` is a string with the typescript code
});
```

However you may run into challenges with executing the code if your schema imports from the sanity parts system. [The CLI tries to help you with this.](https://github.com/ricokahler/sanity-codegen/blob/d4eb4a8ac5f6d27f709697ccdbd2a296d1e51dc2/src/cli.ts#L8-L40)

## Related Projects

- [`sanity-typed-queries`](https://github.com/danielroe/sanity-typed-queries) — Returns a query builder object that returns typed queries. Works without codegen.
- [`groq-types`](https://github.com/JoviDeCroock/groq-types) — Another GROQ codegen lib 😎
