# migrations

Sanity migrations using the API.

## Utilities

### nameSingleton.js

Use this script to replace the id of a singleton document with a known id. The script
will (interactively) ask for a schema type name, and will only replace the id if
a single document record is found. If that record is a draft, it will remain a draft,
but this script will not work for a document that is published _and_ contains unpublished
changes (a draft). Either delete or pubish those changes before running this util.

## Defunct scripts

scripts in the `defunct` directory are scripts that ran once and should not be
run again. They are here for examples.

### `footerLinks.js` _(do not run)_

A simple document patch to illustrate how to set objects, and becau
thought re-learning how to do this with code was prefereable to entering a
handful of links and slugs into the cms.

### `siteConfigId` _(do not run)_

Update the primary site data entry such that it has a known id. There should
only be one entry for this data, but sanity might make others of the same type
as part of its revision system, so we should know its exact id.
