const client = require('../migrationClient');

const addTypePropToArr = (arr) =>
  arr.map((val) => ({_type: 'footerLink', ...val}));

async function migrate() {
  const results = await client.fetch(`*[_id=='ID_SITE_CONFIG']`);
  const footerConfig = results[0].footerConfig;
  footerConfig.col1 = addTypePropToArr(footerConfig.col1);
  footerConfig.col2 = addTypePropToArr(footerConfig.col2);
  footerConfig.col3 = addTypePropToArr(footerConfig.col3);
  footerConfig.col4 = addTypePropToArr(footerConfig.col4);
  footerConfig.col5 = addTypePropToArr(footerConfig.col5);

  const footerConfigPatch = {
    set: {
      footerConfig,
    },
  };

  const tx = client.transaction();
  tx.patch('ID_SITE_CONFIG', footerConfigPatch);
  tx.commit();
}

migrate();
