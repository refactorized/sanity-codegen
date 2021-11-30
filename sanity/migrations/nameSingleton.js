import {previewClient as client} from '../sanityClient.js';
import prompts from 'prompts';
import Case from 'case';

// const query = '*[_type == "siteConfig"]';

async function preFlight(schemaType) {
  const results = await client.fetch(`*[_type == "${schemaType}"]`);
  const ids = results.map((res) => res._id).filter((id) => id.length);
  if (ids.length == 0) {
    return [false, 'no documents found'];
  }
  if (ids.length == 1 && !`${ids[0]}`.startsWith('draft.')) {
    return [ids[0], ''];
  }
  return [false, 'multiple documents/drafts found.'];
}

async function rename(id, newId) {
  const results = await client.fetch(`*[_id=="${id}"]`);
  const dupe = results[0];
  dupe._id = newId;

  const tx = client.transaction();
  tx.create(dupe);
  tx.delete(id);
  await tx.commit();
}

async function inputSchemaType() {
  return (
    await prompts({
      type: 'text',
      name: 'schemaType',
      message: 'Enter the schema type name. ( e.g. fooTemplate )',
    })
  ).schemaType;
}

async function inputSingletonId(schemaType) {
  const initial = `ID_${Case.constant(schemaType)}`;
  return (
    await prompts({
      type: 'text',
      name: 'singletonId',
      message: 'Enter preferred singleton id',
      initial,
    })
  ).singletonId;
}

async function main() {
  const schemaType = await inputSchemaType();
  const [currentId, msg] = await preFlight(schemaType);
  if (!currentId) {
    console.error(`pre-flight failed: ${msg}`);
    process.exit(1);
  }

  // capture 'draft.' prefix if this document is a draft
  const prefix = currentId.startsWith('draft.') ? '.draft' : '';
  const singletonId = await inputSingletonId(schemaType);
  const newId = `${prefix}${singletonId}`;

  try {
    await rename(currentId, newId);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  console.log(`success: ${currentId} -> ${newId}`);
}

main();
