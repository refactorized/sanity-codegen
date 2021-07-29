type SanityDocument = {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
};

interface BlockBase {
  _key: string;
}

interface PlaceholderBlock extends BlockBase {
  blockType: 'placeholder';
  text: string;
}

interface ProseBlock extends BlockBase {
  blockType: 'prose';
  content: any[];
}

// todo: investigate automation of this - see https://github.com/RyanCavanaugh/dts-dom
type PageBlock = ProseBlock | PlaceholderBlock;

interface PageDocument extends SanityDocument {
  blocks: PageBlock[];
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
