const client = require('../sanityClient');
const query = '*[_type == "siteConfig"]';

const CFG_ID = 'ID_SITE_CONFIG';

// IMPORTANT: THIS ASSUMES TARGET IS FIRST ENTRY (which it _was_)
// we did this already so this won't be executed below
async function rename() {
  const results = await client.fetch(query);
  const dupe = results[0];
  delete dupe.id; // correct previous mistake of using id instead of _id, (don't worry about it.)
  dupe._id = CFG_ID; // so we can find it.

  const tx = client.transaction();
  tx.create(dupe);
  tx.commit();
}

// Delete anything that isn't our special id, this isn't strictly necessary
// we also won't be executing this.
async function delete_imposters() {
  const results = await client.fetch(query);
  const tx = client.transaction();

  [...results].forEach((cfg) => {
    if (cfg._id !== CFG_ID) {
      console.error(`deleting: ${cfg._id}`);
      tx.delete(cfg._id);
    }
  });
  tx.commit();
}

console.log(`you shouldn't run this script, but have a look inside`);
