import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: "author";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Bio — `array`
   *
   *
   */
  bio?: Array<SanityKeyed<SanityBlock>>;
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

/**
 * Department
 *
 *
 */
export interface Department extends SanityDocument {
  _type: "department";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Team — `text`
   *
   *
   */
  team?: string;
}

/**
 * Event
 *
 *
 */
export interface Event extends SanityDocument {
  _type: "event";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Series — `reference`
   *
   *
   */
  series?: SanityReference<EventSeries>;

  /**
   * Event Category — `reference`
   *
   *
   */
  eventCategory?: SanityReference<EventCategory>;

  /**
   * Event Start — `datetime`
   *
   *
   */
  eventStart?: string;

  /**
   * Event End — `datetime`
   *
   *
   */
  eventEnd?: string;

  /**
   * Host — `string`
   *
   *
   */
  host?: string;

  /**
   * Description — `array`
   *
   *
   */
  description?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Location — `string`
   *
   *
   */
  location?: string;

  /**
   * External Course — `boolean`
   *
   *
   */
  lmsHosted?: boolean;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Bio — `array`
   *
   *
   */
  bio?: Array<SanityKeyed<SanityBlock>>;
}

/**
 * Event Category
 *
 *
 */
export interface EventCategory extends SanityDocument {
  _type: "eventCategory";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Category — `reference`
   *
   *
   */
  category?: SanityReference<Category>;

  /**
   * Description — `text`
   *
   * This description populates meta-tags on the webpage
   */
  description?: string;

  /**
   * Open Graph Image — `image`
   *
   * Image for sharing previews on Facebook, Twitter etc.
   */
  openGraphImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Content Blocks — `array`
   *
   * the block components that make up the page body
   */
  blocks?: Array<
    | SanityKeyed<AdmissionsCallout>
    | SanityKeyed<Carousel>
    | SanityKeyed<FlexCollar>
    | SanityKeyed<IntroBlock>
    | SanityKeyed<LinkMenu>
    | SanityKeyed<Placeholder>
    | SanityKeyed<PreFooter>
    | SanityKeyed<Prose>
    | SanityKeyed<TextAndImageBlock>
    | SanityKeyed<HeroBlock>
  >;
}

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;
}

/**
 * Resource
 *
 *
 */
export interface Resource extends SanityDocument {
  _type: "resource";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Resource Type — `array`
   *
   *
   */
  type?: Array<SanityKeyedReference<ResourceType>>;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;
}

/**
 * Resource Type
 *
 *
 */
export interface ResourceType extends SanityDocument {
  _type: "resourceType";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

/**
 * Site Config
 *
 *
 */
export interface SiteConfig extends SanityDocument {
  _type: "siteConfig";

  /**
   * Address Line 1 — `string`
   *
   *
   */
  AddressLine1?: string;

  /**
   * Address Line 1 — `string`
   *
   *
   */
  AddressLine2?: string;

  /**
   * Default Phone Number — `string`
   *
   * this number may be altered by a service at runtime
   */
  phone?: string;

  /**
   * Fax Number — `string`
   *
   *
   */
  fax?: string;

  /**
   * General Information Email Address — `string`
   *
   *
   */
  email?: string;

  /**
   * Footer Configuration — `footerConfig`
   *
   *
   */
  footerConfig?: FooterConfig;
}

/**
 * Staff
 *
 *
 */
export interface Staff extends SanityDocument {
  _type: "staff";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Departments — `array`
   *
   *
   */
  departments?: Array<SanityKeyedReference<Department>>;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Bio — `array`
   *
   *
   */
  bio?: Array<SanityKeyed<SanityBlock>>;
}

export type AnnouncementBar = {
  _type: "announcementBar";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;
};

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type EventSeries = {
  _type: "eventSeries";
  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };
};

export type AdmissionsCallout = {
  _type: "admissionsCallout";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;
};

export type Carousel = {
  _type: "carousel";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;
};

export type FlexCollar = {
  _type: "flexCollar";
  /**
   * Cards — `array`
   *
   *
   */
  cards?: Array<SanityKeyed<FlexCollarCard>>;
};

export type FlexCollarCard = {
  _type: "flexCollarCard";
  /**
   * Page — `pageInfo`
   *
   * Page from this website to build a card from
   */
  pageInfo?: PageInfo;
};

export type IntroBlock = {
  _type: "introBlock";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;

  /**
   * Body Text — `text`
   *
   *
   */
  body?: string;

  /**
   * Button Text — `string`
   *
   *
   */
  buttonText?: string;

  /**
   * Button Link — `slug`
   *
   *
   */
  buttonLink?: { _type: "buttonLink"; current: string };
};

export type LinkMenu = {
  _type: "linkMenu";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;
};

export type PageInfo = { _type: "pageInfo"; _ref: string };

export type PreFooter = {
  _type: "preFooter";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;
};

export type TextAndImageBlock = {
  _type: "textAndImageBlock";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;

  /**
   * Main Header — `string`
   *
   * Optional large main header, renders across the top of this component
   */
  header?: string;

  /**
   * Secondary Header — `string`
   *
   * Optional sub-header, renders above the body text
   */
  subHeader?: string;

  /**
   * Body Copy — `basicText`
   *
   *
   */
  body?: BasicText;

  /**
   * Image — `image`
   *
   *
   */
  desktopImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Mobile Image — `image`
   *
   * Optional alternate image to use for smaller(mobile) layouts
   */
  mobileImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * CTA Button Text — `string`
   *
   *
   */
  buttonText?: string;

  /**
   * CTA Button Link — `link`
   *
   *
   */
  buttonLink?: Link;
};

export type HeroBlock = {
  _type: "heroBlock";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;

  /**
   * Hero Background Image — `image`
   *
   *
   */
  bgImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Hero Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Hero Cards — `array`
   *
   * Adds clickable cards to the hero
   */
  hero_cards?: Array<SanityKeyed<HeroCard>>;
};

export type HeroCard = {
  _type: "heroCard";
  /**
   * Eyebrow — `string`
   *
   * Text on top of card
   */
  card_eyebrow?: string;

  /**
   * Copy — `text`
   *
   * Main copy on card
   */
  card_copy?: string;

  /**
   * Card URL — `link`
   *
   * Destination page or URL after clicking on card
   */
  card_link?: Link;
};

export type BasicText = Array<SanityKeyed<SanityBlock>>;

export type FooterConfig = {
  _type: "footerConfig";
  /**
   * First Column — `array`
   *
   * The first entry appears as a heading
   */
  col1?: Array<SanityKeyed<FooterLink>>;

  /**
   * Second Column — `array`
   *
   * The first entry appears as a heading
   */
  col2?: Array<SanityKeyed<FooterLink>>;

  /**
   * Third Column — `array`
   *
   * The first entry appears as a heading
   */
  col3?: Array<SanityKeyed<FooterLink>>;

  /**
   * Fourth Column — `array`
   *
   * The first entry appears as a heading
   */
  col4?: Array<SanityKeyed<FooterLink>>;

  /**
   * Extra Headings (Fifth) Column — `array`
   *
   * All entries appear as headings
   */
  col5?: Array<SanityKeyed<FooterLink>>;
};

export type FooterLink = {
  _type: "footerLink";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };
};

export type Link = {
  _type: "link";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;

  /**
   * Internal page slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Manual URL link — `url`
   *
   *
   */
  url?: string;
};

export type Placeholder = {
  _type: "placeholder";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;

  /**
   * text — `string`
   *
   *
   */
  text?: string;
};

export type Prose = {
  _type: "prose";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;

  /**
   * content — `array`
   *
   *
   */
  content?: Array<SanityKeyed<SanityBlock>>;
};

export type Documents =
  | Author
  | Category
  | Department
  | Event
  | EventCategory
  | Page
  | Post
  | Resource
  | ResourceType
  | SiteConfig
  | Staff;
