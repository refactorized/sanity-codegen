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
 * Announcement Bar
 *
 *
 */
export interface AnnouncementBar extends SanityDocument {
  _type: "announcementBar";

  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;
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
  >;
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
 * Admissions Callout Block
 *
 *
 */
export interface AdmissionsCallout extends SanityDocument {
  _type: "admissionsCallout";

  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;
}

/**
 * Carousel
 *
 *
 */
export interface Carousel extends SanityDocument {
  _type: "carousel";

  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;
}

/**
 * Flex Collar
 *
 *
 */
export interface FlexCollar extends SanityDocument {
  _type: "flexCollar";

  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;
}

/**
 * Intro Block
 *
 *
 */
export interface IntroBlock extends SanityDocument {
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
}

/**
 * Link Menu Block
 *
 *
 */
export interface LinkMenu extends SanityDocument {
  _type: "linkMenu";

  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;
}

/**
 * Pre-Footer
 *
 *
 */
export interface PreFooter extends SanityDocument {
  _type: "preFooter";

  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;
}

/**
 * Text & Image Block
 *
 *
 */
export interface TextAndImageBlock extends SanityDocument {
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
}

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
   * Link to another Page — `reference`
   *
   *
   */
  refLink?: SanityReference<Page>;

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
  | AnnouncementBar
  | Page
  | SiteConfig
  | AdmissionsCallout
  | Carousel
  | FlexCollar
  | IntroBlock
  | LinkMenu
  | PreFooter
  | TextAndImageBlock;
