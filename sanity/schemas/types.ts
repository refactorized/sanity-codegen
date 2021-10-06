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
 * External Contributor
 *
 *
 */
export interface ExternalContributor extends SanityDocument {
  _type: "externalContributor";

  /**
   * First Name — `string`
   *
   *
   */
  firstName: string;

  /**
   * Last Name — `string`
   *
   *
   */
  lastName: string;

  /**
   * Credentials — `string`
   *
   *
   */
  credentials?: string;

  /**
   * Image — `image`
   *
   * (optional) if left empty will use default image
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Bio — `blockContent`
   *
   *
   */
  bio?: BlockContent;
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
   * Please enter the name of the department, e.g. "Admissions"
   */
  name: string;

  /**
   * Slug — `slug`
   *
   * Write a custom slug here, or click “Generate” to auto-populate.
   */
  slug: { _type: "slug"; current: string };
}

/**
 * Team
 *
 *
 */
export interface DepartmentTeam extends SanityDocument {
  _type: "departmentTeam";

  /**
   * Team Name — `string`
   *
   * e.g. Communications team, etc.
   */
  name?: string;

  /**
   * Associated Department — `reference`
   *
   * e.g. Administration, Therapy, etc.
   */
  associatedDepartment?: SanityReference<Department>;

  /**
   * Slug — `slug`
   *
   * Click “Generate” to auto-populate.
   */
  slug?: { _type: "slug"; current: string };
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
   * e.g. "2021 Fall Conference"
   */
  name?: string;

  /**
   * Is this an Ethos Course? — `boolean`
   *
   * If this is set to "true" the more detailed fields for schedule, speakers, etc, will be hidden from entry.
   */
  ethosCourseYN?: boolean;

  /**
   * Series — `reference`
   *
   * e.g. Virtual Rounds, Friday Night Guest Lecture, etc.
   */
  series?: SanityReference<EventSeries>;

  /**
   * Categories — `array`
   *
   * e.g. treatment, personality disorders, etc.
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Event Start — `datetime`
   *
   * Start date and time
   */
  eventStart: string;

  /**
   * Event End — `datetime`
   *
   * End date and time
   */
  eventEnd: string;

  /**
   * Event Host — `string`
   *
   * e.g. "Austen Riggs Center" or another hosting organization.
   */
  host: string;

  /**
   * Venue — `string`
   *
   * e.g. "Virtual" or "Edward R. Shapiro Community Center"
   */
  venue: string;

  /**
   * Venue Address — `string`
   *
   * (optional) e.g. "25 Main St, Stockbridge, MA 01262"
   */
  venueAddress?: string;

  /**
   * URL for Registration — `url`
   *
   * e.g. the URL for the Ethos course, or other registration URL.
   */
  registrationLink: string;

  /**
   * Pricing — `blockContent`
   *
   * (optional) If you have pricing, please enter it here, with the cost in bold.
   */
  pricingDescription?: BlockContent;

  /**
   * Image — `image`
   *
   * (optional) This appears below the page metadata and above the event description.
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Short Description — `blockContent`
   *
   * This appears below the event/course title.
   */
  shortDescription: BlockContent;

  /**
   * Description — `blockContent`
   *
   * This appears below the event image.
   */
  description?: BlockContent;

  /**
   * Participating Staff — `array`
   *
   * (optional) Please select any participating staff members so that their information (bio, photo, etc.) shows.
   */
  speakers?: Array<SanityKeyedReference<Staff>>;

  /**
   * External Participants — `array`
   *
   * (optional) Please enter any external participants so that their information (bio, photo, etc.) show.
   */
  speakersExternal?: Array<SanityKeyedReference<ExternalContributor>>;

  /**
   * Schedule — `blockContent`
   *
   * If you want to display a schedule, enter it here.
   */
  schedule?: BlockContent;

  /**
   * Contact — `blockContent`
   *
   * (optional) If you want to show contact information, enter that here.
   */
  contact?: BlockContent;

  /**
   * Learning Objectives — `blockContent`
   *
   * (optional) If you want to show the learning objectives for an event, enter that here.
   */
  learningObjectives?: BlockContent;

  /**
   * Continuing Education — `blockContent`
   *
   * (optional) If there is CE information you want to show, enter that here.
   */
  continuingEducation?: BlockContent;

  /**
   * Cancellation and Refund Policy — `blockContent`
   *
   * (optional) If you have a cancellation and/or refund policy, enter that here.
   */
  cancellationRefundPolicy?: BlockContent;
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
 * Event Series
 *
 *
 */
export interface EventSeries extends SanityDocument {
  _type: "eventSeries";

  /**
   * Name — `string`
   *
   * e.g. "Virtual Rounds". Please enter in title case because this is user-facing
   */
  name: string;
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
    | SanityKeyed<CalloutBand>
    | SanityKeyed<DrawerCombo>
    | SanityKeyed<InteriorHero>
  >;
}

/**
 * News
 *
 *
 */
export interface News extends SanityDocument {
  _type: "news";

  /**
   * Title — `string`
   *
   * Headline for the post, this will also appear as the page title and SEO title within search results.
   */
  title: string;

  /**
   * Slug — `slug`
   *
   * Click "generate" to create based on the title of the post
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Author — `reference`
   *
   * Please add an author to the post
   */
  author: SanityReference<Staff>;

  /**
   * Short Description — `blockContent`
   *
   * The short description is used in the SEO page description as well as at the top of the post.
   */
  shortDescription: BlockContent;

  /**
   * Main image — `image`
   *
   * (optional) This appears between the resource metadata and body text
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
   * e.g. treatment, personality disorders, etc.
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Post Type — `reference`
   *
   * e.g. News, Announcements, Riggs Blog, etc.
   */
  postType?: SanityReference<Category>;

  /**
   * Published at — `datetime`
   *
   * This date is used in sorting, and should reflect the date the post was originally published
   */
  publishedAt: string;

  /**
   * Body — `blockContent`
   *
   * This is the main body of the post
   */
  body: BlockContent;
}

/**
 * Post Type
 *
 *
 */
export interface PostType extends SanityDocument {
  _type: "postType";

  /**
   * Title — `string`
   *
   * This helps to organize the posts and is used to ensure they appear in the right places.
   */
  title?: string;
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
   * The title of the resource, also used as the page title
   */
  title: string;

  /**
   * Slug — `slug`
   *
   * This ensures a unique URL
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Short Description — `string`
   *
   * This appears above the page and will be used in the SEO page description
   */
  shortDescription: string;

  /**
   * Associated Staffmember(s) — `array`
   *
   * Either a staff member or an external contributor is required.
   */
  associatedStaff?: Array<SanityKeyedReference<Staff>>;

  /**
   * External Contributor(s) — `array`
   *
   * Either a staff member or an external contributor is required.
   */
  externalContributors?: Array<SanityKeyedReference<ExternalContributor>>;

  /**
   * Main image — `image`
   *
   * This appears between the resource metadata and body text
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
   * e.g. treatment, personality disorders, etc.  Please enter one or more.
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Resource Type — `array`
   *
   * e.g. Books, Clinical Perspectives, Conference Presentations, etc.
   */
  type: Array<SanityKeyedReference<ResourceType>>;

  /**
   * Published at — `date`
   *
   * Enter when the resource was published, if applicable.
   */
  publishedAt?: string;

  /**
   * Body — `blockContent`
   *
   *
   */
  body: BlockContent;
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
   * e.g. Books, Conference Presentations, etc.  Please enter in title case.
   */
  title: string;
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
   * First Name — `string`
   *
   *
   */
  firstName: string;

  /**
   * Last Name — `string`
   *
   *
   */
  lastName: string;

  /**
   * Academic Credentials — `string`
   *
   *
   */
  credentials?: string;

  /**
   * Title — `string`
   *
   * e.g. CEO, Medical Director
   */
  title: string;

  /**
   * Departments — `array`
   *
   * Please select one or more departments
   */
  departments: Array<SanityKeyedReference<Department>>;

  /**
   * Team(s) — `array`
   *
   * Please select one or more team
   */
  team?: Array<SanityKeyedReference<DepartmentTeam>>;

  /**
   * Slug — `slug`
   *
   * Write a custom slug here, or click “Generate” to auto-populate.
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image — `image`
   *
   * If available, this should be a photo of the staff member.  If none is available, a default image will be used
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Telephone — `string`
   *
   * (optional) in the form of (xxx) xxx-xxxx
   */
  telephone?: string;

  /**
   * Email — `string`
   *
   * (optional)
   */
  email?: string;

  /**
   * Bio — `blockContent`
   *
   * (optional) staff biography
   */
  bio?: BlockContent;
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

export type AdmissionsCallout = {
  _type: "admissionsCallout";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;

  /**
   * Admissions Callout Contact Header — `string`
   *
   *
   */
  contactHeader?: string;

  /**
   * Admissions Callout Contact Description — `string`
   *
   *
   */
  contactDescription?: string;

  /**
   * Admissions Callout Header — `string`
   *
   *
   */
  admissionHeader?: string;

  /**
   * Admissions Callout Description — `string`
   *
   *
   */
  admissionDescription?: string;

  /**
   * Admissions Callout Button Text — `string`
   *
   *
   */
  btnText?: string;

  /**
   * Admissions Callout Button Url — `link`
   *
   *
   */
  btnUrl?: Link;

  /**
   * Admissions Callout Boxless Button Text — `string`
   *
   *
   */
  boxlessbtnText?: string;

  /**
   * Admissions Callout Boxless Button Url — `link`
   *
   *
   */
  boxlessbtnUrl?: Link;

  /**
   * Admissions Callout Phone Number — `string`
   *
   *
   */
  phoneNumber?: string;
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

export type OutcomesCarousel = {
  _type: "outcomesCarousel";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Cards — `array`
   *
   * Cards to show in the carousel
   */
  cards?: Array<SanityKeyed<TestimonialCard> | SanityKeyed<StatCard>>;
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

export type LinkMenuLink = {
  _type: "linkMenuLink";
  /**
   * Link Title — `string`
   *
   *
   */
  title: string;

  /**
   * Link Url — `link`
   *
   *
   */
  url: Link;
};

export type LinkMenu = {
  _type: "linkMenu";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;

  /**
   * Image — `image`
   *
   *
   */
  imgUrl?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Link Menu Header — `string`
   *
   *
   */
  header?: string;

  /**
   * Link Menu Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Link Menu Button Text — `string`
   *
   *
   */
  btnText?: string;

  /**
   * Link Menu Button Url — `link`
   *
   *
   */
  btnUrl?: Link;

  /**
   * Link Menu Link List — `array`
   *
   *
   */
  links?: Array<SanityKeyed<LinkMenuLink>>;
};

export type PageInfo = { _type: "pageInfo"; _ref: string };

export type PageLink = { _type: "pageLink"; _ref: string };

export type PreFooter = {
  _type: "preFooter";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;

  /**
   * Pre-Footer Header — `string`
   *
   *
   */
  header?: string;

  /**
   * Pre-Footer Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Pre-Footer Button Text — `string`
   *
   *
   */
  btnText?: string;

  /**
   * Pre-Footer Button Url — `link`
   *
   *
   */
  btnUrl?: Link;

  /**
   * Pre-Footer Phone Number — `string`
   *
   *
   */
  phoneNumber?: string;
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

export type CalloutBand = {
  _type: "calloutBand";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;

  /**
   * Callout Header — `string`
   *
   *
   */
  header?: string;

  /**
   * Callout Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Callout Button Text — `string`
   *
   *
   */
  btnText?: string;

  /**
   * Callout Button Url — `link`
   *
   *
   */
  btnUrl?: Link;
};

export type DrawerCombo = {
  _type: "drawerCombo";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;

  /**
   * Drawer Combo Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Drawer Combo Copy — `string`
   *
   *
   */
  copy?: string;

  /**
   * Drawer Combo Url — `link`
   *
   *
   */
  url?: Link;

  /**
   * Drawer Combo Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Drawer Combo Drawer List — `array`
   *
   *
   */
  drawers?: Array<SanityKeyed<DrawerComboDrawer>>;
};

export type DrawerComboDrawer = {
  _type: "drawerComboDrawer";
  /**
   * Drawer Combo Icon — `image`
   *
   * Icon is Optional
   */
  icon?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Drawer Combo Title — `string`
   *
   *
   */
  title: string;

  /**
   * Drawer Combo details — `string`
   *
   *
   */
  details: string;
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
   * Internal Page — `pageLink`
   *
   *
   */
  slug?: PageLink;

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

export type InteriorHero = {
  _type: "interiorHero";
  /**
   * blockType — `string`
   *
   *
   */
  blockType?: string;

  /**
   * Interior Hero Header — `string`
   *
   *
   */
  header?: string;

  /**
   * Interior Hero Caption — `string`
   *
   *
   */
  caption?: string;

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
   * Interior Hero Video Source — `link`
   *
   *
   */
  videoSrc?: Link;
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

export type TestimonialCard = {
  _type: "testimonialCard";
  /**
   * Quote — `string`
   *
   * Thoughts and feedback from a Riggs patient.
   */
  testimonial_text?: string;

  /**
   * Patient Name — `string`
   *
   *
   */
  patient_name?: string;

  /**
   * Patient Photo — `image`
   *
   *
   */
  patient_photo_path?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type StatCard = {
  _type: "statCard";
  /**
   * Background Color — `string`
   *
   * in hex (#123456) or rgba (rgba(0,0,0,0.5) format
   */
  background_color?: string;

  /**
   * Statistic — `string`
   *
   * A numerical statistic, including unit of measure (eg %)
   */
  statistic_text?: string;

  /**
   * Descriptive Text — `string`
   *
   * Thoughts and feedback from a Riggs patient.
   */
  baseline_text?: string;

  /**
   * Icon — `image`
   *
   *
   */
  icon?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type Documents =
  | ExternalContributor
  | Category
  | Department
  | DepartmentTeam
  | Event
  | EventCategory
  | EventSeries
  | Page
  | News
  | PostType
  | Resource
  | ResourceType
  | SiteConfig
  | Staff;
