import S from '@sanity/desk-tool/structure-builder';

const isSingletonDocType = (item) => {
  const schemaTypeName = item.getSchemaType().name;
  return schemaTypeName !== 'siteConfig';
};

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem().title('Site Settings').child(
        S.document().schemaType('siteConfig'),
        //.documentId('b5e0f3bf-cf0b-413d-b5fc-bb23185c27ad'),
      ),
      ...S.documentTypeListItems().filter(isSingletonDocType),
    ]);
