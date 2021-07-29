import S from '@sanity/desk-tool/structure-builder';

const isSingletonDocType = (item) => {
  const schemaTypeName = item.getSchemaType().name;
  return schemaTypeName !== 'siteConfig';
};

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document().schemaType('siteConfig').documentId('ID_SITE_CONFIG'),
        ),
      ...S.documentTypeListItems().filter(isSingletonDocType),
    ]);
