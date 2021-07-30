type SanityDocument = {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
};

interface PageBlockData {
  blockType: string;
  _key: string;
}

// interface PlaceholderBlockData extends PageBlockData {
//   blockType: 'placeholder';
//   text: string;
// }

// interface ProseBlockData extends PageBlockData {
//   blockType: 'prose';
//   content: any[];
// }

// // todo: investigate automation of this - see https://github.com/RyanCavanaugh/dts-dom
// type AnyPageBlockData = PlaceholderBlockData | ProseBlockData;

interface PageDocument extends SanityDocument {
  blocks: PageBlockData[];
}

interface FooterLink {
  title: string;
  slug: {current: string};
  _key: string;
}
interface FooterConfig {
  col1: FooterLink[];
  col2: FooterLink[];
  col3: FooterLink[];
  col4: FooterLink[];
  col5: FooterLink[];
}
interface SiteConfig {
  AddressLine1: string;
  AddressLine2: string;
  email: string;
  phone: string;
  fax: string;
  footerConfig: FooterConfig;
  privatePolicy: string;
  austinRiggs: string;
}

// const siteCfg: siteConfig = cfg;
// const Footer = ({siteCfg}: {siteCfg: siteConfig}) => {};
