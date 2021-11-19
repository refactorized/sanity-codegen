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
  name: string;

  /**
   * Associated Department — `reference`
   *
   * e.g. Administration, Therapy, etc.
   */
  associatedDepartment: SanityReference<Department>;

  /**
   * Slug — `slug`
   *
   * Click “Generate” to auto-populate.
   */
  slug: { _type: "slug"; current: string };
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
   * e.g. "2021 Fall Conference" 100 character max recommended.
   */
  name?: string;

  /**
   * Is this an Ethos Course? — `boolean`
   *
   * If this is set to "true" the more detailed fields for schedule, speakers, etc, will be hidden from entry.
   */
  ethosCourseYN?: boolean;

  /**
   * Event Category — `reference`
   *
   * e.g. Ongoing Educational Events, External Events, etc.
   */
  eventCategory?: SanityReference<EventCategory>;

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
   * Pricing — `basicText`
   *
   * (optional) If you have pricing, please enter it here, with the cost in bold.
   */
  pricingDescription?: BasicText;

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
   * Alt Text — `string`
   *
   *
   */
  alt_text?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Short Description — `basicText`
   *
   * This appears below the event/course title.
   */
  shortDescription: BasicText;

  /**
   * Description — `prose`
   *
   * This appears below the event image.
   */
  description?: Prose;

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
   * Schedule — `prose`
   *
   * If you want to display a schedule, enter it here.
   */
  schedule?: Prose;

  /**
   * Contact — `prose`
   *
   * (optional) If you want to show contact information, enter that here.
   */
  contact?: Prose;

  /**
   * Learning Objectives — `prose`
   *
   * (optional) If you want to show the learning objectives for an event, enter that here.
   */
  learningObjectives?: Prose;

  /**
   * Continuing Education — `prose`
   *
   * (optional) If there is CE information you want to show, enter that here.
   */
  continuingEducation?: Prose;

  /**
   * Cancellation and Refund Policy — `prose`
   *
   * (optional) If you have a cancellation and/or refund policy, enter that here.
   */
  cancellationRefundPolicy?: Prose;
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
 * Event Page
 *
 *
 */
export interface EventPage extends SanityDocument {
  _type: "eventPage";

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

  /**
   * Category — `reference`
   *
   *
   */
  category?: SanityReference<Category>;

  /**
   * Meta Title — `string`
   *
   * This title populates meta-tags on the webpage
   */
  metatitle: string;

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
   * Hero — `interiorHero`
   *
   *
   */
  interiorHero?: InteriorHero;

  /**
   * Featured Event — `reference`
   *
   * Event displayed under the "Featured" section above the grid.
   */
  featuredEvent?: SanityReference<Event>;

  /**
   * Text and Image Block 1 — `textAndImageBlock`
   *
   *
   */
  textAndImageBlockOne?: TextAndImageBlock;

  /**
   * Text and Image Block 2 — `textAndImageBlock`
   *
   *
   */
  textAndImageBlockTwo?: TextAndImageBlock;

  /**
   * Pre-Footer — `preFooter`
   *
   *
   */
  preFooter?: PreFooter;
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
 * News
 *
 *
 */
export interface News extends SanityDocument {
  _type: "news";

  /**
   * Title — `string`
   *
   * Headline for the post, this will also appear as the page title and SEO title within search results. 100 character max recommended.
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
   * Short Description — `string`
   *
   * The short description is used in the SEO page description as well as at the top of the post.
   */
  shortDescription: string;

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
   * Alt Text — `string`
   *
   *
   */
  alt_text?: string;

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
   * Body — `prose`
   *
   * This is the main body of the post
   */
  body: Prose;

  /**
   * Article Carousel — `articleCarousel`
   *
   *
   */
  articleCarousel?: ArticleCarousel;
}

/**
 * News Page
 *
 *
 */
export interface NewsPage extends SanityDocument {
  _type: "newsPage";

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

  /**
   * Category — `reference`
   *
   *
   */
  category?: SanityReference<Category>;

  /**
   * Meta Title — `string`
   *
   * This title populates meta-tags on the webpage
   */
  metatitle: string;

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
   * Hero — `interiorHero`
   *
   *
   */
  interiorHero?: InteriorHero;

  /**
   * Pre-Footer — `preFooter`
   *
   *
   */
  preFooter?: PreFooter;
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
  title: string;

  /**
   * slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

  /**
   * Category — `reference`
   *
   *
   */
  category?: SanityReference<Category>;

  /**
   * Meta Title — `string`
   *
   * This title populates meta-tags on the webpage
   */
  metatitle: string;

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
    | SanityKeyed<ImageCarousel>
    | SanityKeyed<ArticleCarousel>
    | SanityKeyed<OutcomesCarousel>
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
    | SanityKeyed<ComboCard>
    | SanityKeyed<InteriorHero>
    | SanityKeyed<BioCallout>
    | SanityKeyed<TextTestimonialCard>
    | SanityKeyed<GenericEmbed>
  >;
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
   * The title of the resource, also used as the page title. 100 character max recommended.
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
   * Alt Text — `string`
   *
   *
   */
  alt_text?: string;

  /**
   * Categories — `array`
   *
   * e.g. treatment, personality disorders, etc.  Please enter one or more.
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Resource Type — `reference`
   *
   * e.g. Books, Clinical Perspectives, Conference Presentations, etc.
   */
  resourceType: SanityReference<ResourceType>;

  /**
   * Published at — `date`
   *
   * Enter when the resource was published, if applicable.
   */
  publishedAt?: string;

  /**
   * Body — `prose`
   *
   *
   */
  body: Prose;

  /**
   * Article Carousel — `articleCarousel`
   *
   *
   */
  articleCarousel?: ArticleCarousel;
}

/**
 * Resource Page
 *
 *
 */
export interface ResourcePage extends SanityDocument {
  _type: "resourcePage";

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

  /**
   * Category — `reference`
   *
   *
   */
  category?: SanityReference<Category>;

  /**
   * Meta Title — `string`
   *
   * This title populates meta-tags on the webpage
   */
  metatitle: string;

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
   * Hero — `interiorHero`
   *
   *
   */
  interiorHero?: InteriorHero;

  /**
   * Featured Resource — `reference`
   *
   * Resource displayed under the "Featured" section above the grid.
   */
  featuredResource?: SanityReference<Resource>;

  /**
   * Text and Image Block — `textAndImageBlock`
   *
   *
   */
  textAndImageBlock?: TextAndImageBlock;

  /**
   * Article Carousel — `articleCarousel`
   *
   *
   */
  articleCarousel?: ArticleCarousel;

  /**
   * Pre-Footer — `preFooter`
   *
   *
   */
  preFooter?: PreFooter;
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
   * Show Announcement Bar — `boolean`
   *
   * Displays announcement bar site-wide.
   */
  announcementBarShow?: boolean;

  /**
   * Announcement Bar Message — `string`
   *
   * Text to display on announcement bar.
   */
  announcementBarMessage?: string;

  /**
   * CTA Text — `string`
   *
   * Text for announcement bar CTA
   */
  announcementBarCtaText?: string;

  /**
   * CTA Link — `link`
   *
   * Destination link for announcement bar CTA message.
   */
  announcementBarCtaLink?: Link;

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
   * Log in Label — `string`
   *
   *
   */
  logInLinkLabel?: string;

  /**
   * Log in Url — `link`
   *
   *
   */
  logInLinkUrl?: Link;

  /**
   * Register Link — `string`
   *
   *
   */
  registerLink?: string;

  /**
   * Register Url — `link`
   *
   *
   */
  registerUrl?: Link;

  /**
   * Phone Number — `string`
   *
   *
   */
  phoneNumber?: string;

  /**
   * Give to Riggs Label — `string`
   *
   *
   */
  featuredLinkLabel?: string;

  /**
   * Give to Riggs Url — `link`
   *
   *
   */
  featuredLinkUrl?: Link;

  /**
   * Nav Configuration — `navConfig`
   *
   *
   */
  navConfig?: NavConfig;

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
   * Bio — `basicText`
   *
   * (optional) staff biography
   */
  bio?: BasicText;

  /**
   * Article Carousel — `articleCarousel`
   *
   *
   */
  articleCarousel?: ArticleCarousel;
}

/**
 * Team Page
 *
 *
 */
export interface TeamPage extends SanityDocument {
  _type: "teamPage";

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

  /**
   * Category — `reference`
   *
   *
   */
  category?: SanityReference<Category>;

  /**
   * Meta Title — `string`
   *
   * This title populates meta-tags on the webpage
   */
  metatitle: string;

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
   * Hero Title — `string`
   *
   *
   */
  teamHeroTitle?: string;

  /**
   * Hero Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Staff Cards — `array`
   *
   * Bios for staff members to be displayed on Team Page
   */
  cards?: Array<SanityKeyedReference<Staff>>;

  /**
   * Pre-Footer — `preFooter`
   *
   *
   */
  preFooter?: PreFooter;
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

export type ProseContent = Array<
  | SanityKeyed<PtImage>
  | SanityKeyed<PtFile>
  | SanityKeyed<PtEmbed>
  | SanityKeyed<PtFloatBreak>
  | SanityKeyed<SanityBlock>
>;

export type AdmissionsCallout = {
  _type: "admissionsCallout";
  /**
   * Admissions Callout Header — `string`
   *
   *
   */
  admissionHeader: string;

  /**
   * Admissions Callout Description — `text`
   *
   *
   */
  admissionDescription: string;

  /**
   * Admissions Callout Boxless Button Text — `string`
   *
   *
   */
  boxlessbtnText: string;

  /**
   * Admissions Callout Boxless Button Url — `link`
   *
   *
   */
  boxlessbtnUrl: Link;

  /**
   * Admissions Callout Contact Header — `string`
   *
   *
   */
  contactHeader: string;

  /**
   * Admissions Callout Contact Description — `string`
   *
   *
   */
  contactDescription: string;

  /**
   * Admissions Callout Button Text — `string`
   *
   *
   */
  btnText: string;

  /**
   * Admissions Callout Button Url — `link`
   *
   *
   */
  btnUrl: Link;

  /**
   * Admissions Callout Phone Number — `string`
   *
   *
   */
  phoneNumber?: string;
};

export type CalloutBand = {
  _type: "calloutBand";
  /**
   * Callout Header — `string`
   *
   *
   */
  header: string;

  /**
   * Callout Description — `text`
   *
   *
   */
  description: string;

  /**
   * Callout Button Text — `string`
   *
   *
   */
  btnText: string;

  /**
   * Callout Button Url — `link`
   *
   *
   */
  btnUrl: Link;
};

export type BioCallout = {
  _type: "bioCallout";
  /**
   * Bio Callout Headline — `string`
   *
   *
   */
  headline: string;

  /**
   * Bio Callout Cards — `array`
   *
   *
   */
  cards: Array<SanityKeyed<BioCalloutCards>>;
};

export type BioCalloutCards = {
  _type: "bioCalloutCards";
  /**
   * Image — `image`
   *
   * Image is Optional
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Optional Image Alt Text — `string`
   *
   *
   */
  alt_text?: string;

  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Credential — `string`
   *
   * Credential is Optional
   */
  credential?: string;

  /**
   * Bio — `text`
   *
   *
   */
  bio: string;
};

export type ImageCarousel = {
  _type: "imageCarousel";
  /**
   * Slides — `array`
   *
   * Slides to show in the carousel
   */
  slides?: Array<SanityKeyed<ImageSlide>>;
};

export type ArticleCarousel = {
  _type: "articleCarousel";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Selected Articles — `array`
   *
   * selected articles will load every time a the begining of the carousel
   */
  selected_articles?: Array<SanityKeyed<ArticleInfo>>;

  /**
   * Categories — `array`
   *
   * e.g. treatment, personality disorders, etc.
   */
  categories?: Array<SanityKeyedReference<Category>>;
};

export type ImageSlide = {
  _type: "imageSlide";
  /**
   * Cover Image — `image`
   *
   *
   */
  cover_image: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Alt Text — `string`
   *
   *
   */
  alt_text?: string;

  /**
   * Headline — `string`
   *
   *
   */
  headline: string;

  /**
   * Description — `string`
   *
   *
   */
  description: string;

  /**
   * CTA — `link`
   *
   *
   */
  cta: Link;

  /**
   * CTA Text — `string`
   *
   *
   */
  cta_text: string;
};

export type DrawerCombo = {
  _type: "drawerCombo";
  /**
   * Drawer Combo Title — `string`
   *
   *
   */
  title: string;

  /**
   * Drawer Combo Copy — `string`
   *
   *
   */
  copy: string;

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
  drawers: Array<SanityKeyed<DrawerComboDrawer>>;
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
   * (OLD) Drawer Combo details — `text`
   *
   * We are migrating data out of this section into "content".
   */
  details?: string;

  /**
   * Drawer Content — `proseContent`
   *
   *
   */
  content?: ProseContent;
};

export type FlexCollar = {
  _type: "flexCollar";
  /**
   * Cards — `array`
   *
   *
   */
  cards: Array<SanityKeyed<FlexCollarCard>>;
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

export type HeroBlock = {
  _type: "heroBlock";
  /**
   * Hero Background Image — `image`
   *
   *
   */
  bgImage: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Interior Hero Video Source — `file`
   *
   * Video is optional: upload video file in mp4 format
   */
  videoSrc?: { _type: "file"; asset: SanityReference<any> };

  /**
   * Optional Image Alt Text — `string`
   *
   *
   */
  alt_text?: string;

  /**
   * Hero Title — `string`
   *
   *
   */
  title: string;

  /**
   * Hero Cards — `array`
   *
   * Adds clickable cards to the hero
   */
  hero_cards: Array<SanityKeyed<HeroCard>>;
};

export type HeroCard = {
  _type: "heroCard";
  /**
   * Eyebrow — `string`
   *
   * Text on top of card
   */
  card_eyebrow: string;

  /**
   * Copy — `text`
   *
   * Main copy on card
   */
  card_copy: string;

  /**
   * Card URL — `link`
   *
   * Destination page or URL after clicking on card
   */
  card_link: Link;
};

export type IntroBlock = {
  _type: "introBlock";
  /**
   * Body Text — `text`
   *
   *
   */
  body: string;

  /**
   * Button Text — `string`
   *
   *
   */
  buttonText: string;

  /**
   * Button Link — `link`
   *
   *
   */
  buttonLink: Link;
};

export type LinkMenu = {
  _type: "linkMenu";
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
   * Alt Text — `string`
   *
   *
   */
  alt_text?: string;

  /**
   * Link Menu Header — `string`
   *
   *
   */
  header: string;

  /**
   * Link Menu Description — `text`
   *
   *
   */
  description: string;

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
  links: Array<SanityKeyed<LinkMenuLink>>;
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

export type OutcomesCarousel = {
  _type: "outcomesCarousel";
  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Cards — `array`
   *
   * Cards to show in the carousel
   */
  cards: Array<SanityKeyed<TestimonialCard> | SanityKeyed<StatCard>>;
};

export type PageInfo = { _type: "pageInfo"; _ref: string };

export type ArticleInfo = { _type: "articleInfo"; _ref: string };

export type PageLink = { _type: "pageLink"; _ref: string };

export type PreFooter = {
  _type: "preFooter";
  /**
   * Pre-Footer Header — `string`
   *
   *
   */
  header: string;

  /**
   * Pre-Footer Description — `string`
   *
   *
   */
  description: string;

  /**
   * Pre-Footer Button Text — `string`
   *
   *
   */
  btnText: string;

  /**
   * Pre-Footer Button Url — `link`
   *
   *
   */
  btnUrl: Link;

  /**
   * Pre-Footer Phone Number — `string`
   *
   *
   */
  phoneNumber?: string;
};

export type Prose = {
  _type: "prose";
  /**
   * content — `proseContent`
   *
   *
   */
  content?: ProseContent;
};

export type TextAndImageBlock = {
  _type: "textAndImageBlock";
  /**
   * Main Header — `string`
   *
   * Optional large main header, renders across the top of this component
   */
  header?: string;

  /**
   * Content Header — `string`
   *
   * Optional sub-header, renders above the body text
   */
  subHeader?: string;

  /**
   * Body Copy — `basicText`
   *
   *
   */
  body: BasicText;

  /**
   * Image — `image`
   *
   *
   */
  desktopImage: {
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
   * Optional Image Alt Text — `string`
   *
   *
   */
  alt_text?: string;

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

  /**
   * Toggle to set image placement — `boolean`
   *
   * Default (gray) to set image left; toggle (green) to set image right
   */
  reverse?: boolean;
};

export type ComboCard = {
  _type: "comboCard";
  /**
   * Combo Card Title — `string`
   *
   *
   */
  title: string;

  /**
   * Combo Card Body — `text`
   *
   *
   */
  body: string;

  /**
   * Combo Card Cta Text — `string`
   *
   *
   */
  ctaText: string;

  /**
   * Combo Card Cta Link — `link`
   *
   *
   */
  ctaLink: Link;

  /**
   * Combo Card List — `array`
   *
   *
   */
  cards: Array<SanityKeyed<ComboCardCards>>;
};

export type ComboCardCards = {
  _type: "comboCardCards";
  /**
   * Combo Card Icon — `image`
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
   * Optional Icon Alt Text — `string`
   *
   *
   */
  alt_text?: string;

  /**
   * Combo Card Headline — `string`
   *
   *
   */
  headline: string;

  /**
   * Combo Card Description — `string`
   *
   *
   */
  description: string;
};

export type GenericEmbed = {
  _type: "genericEmbed";
  /**
   * Embed HTML — `text`
   *
   * Paste code provided by third party here. Make sure you trust the source of this code.
   */
  markup?: string;
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

export type InteriorHero = {
  _type: "interiorHero";
  /**
   * Interior Hero Header — `string`
   *
   *
   */
  header: string;

  /**
   * Interior Hero Caption — `text`
   *
   *
   */
  caption: string;

  /**
   * Image — `image`
   *
   * Image is optional
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
   * Alt Text — `string`
   *
   *
   */
  alt_text?: string;

  /**
   * Interior Hero Video Source — `file`
   *
   * Video is optional: upload video file in mp4 format
   */
  videoSrc?: { _type: "file"; asset: SanityReference<any> };
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

export type PtFloatBreak = {
  _type: "ptFloatBreak";
  /**
   * stub — `string`
   *
   *
   */
  stub?: string;
};

export type PtImage = {
  _type: "ptImage";
  /**
   * Image asset — `image`
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
   * Image alignment — `string`
   *
   *
   */
  align?: "left" | "center" | "right";

  /**
   * Image width — `string`
   *
   *
   */
  width?: "full" | "large" | "medium" | "small";

  /**
   * Wrap content — `boolean`
   *
   * wrap following content around this image?
   */
  wrap?: boolean;
};

export type PtFile = {
  _type: "ptFile";
  /**
   * File — `file`
   *
   *
   */
  file: { _type: "file"; asset: SanityReference<any> };

  /**
   * Display name — `string`
   *
   * Optional. Display this as the link text, instead of the filename.
   */
  title?: string;
};

export type PtEmbed = {
  _type: "ptEmbed";
  /**
   * Embed HTML — `text`
   *
   * Paste code provided by third party here. Make sure you trust the source of this code.
   */
  markup?: string;
};

export type StatCard = {
  _type: "statCard";
  /**
   * Background Color — `string`
   *
   * in hex (#123456) or rgba (rgba(0,0,0,0.5) format
   */
  background_color: string;

  /**
   * Statistic — `string`
   *
   * A numerical statistic, including unit of measure (eg %)
   */
  statistic_text: string;

  /**
   * Descriptive Text — `string`
   *
   * Thoughts and feedback from a Riggs patient.
   */
  baseline_text: string;

  /**
   * Icon — `image`
   *
   *
   */
  icon: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type TestimonialCard = {
  _type: "testimonialCard";
  /**
   * Background Color — `string`
   *
   * in hex (#123456) or rgba (rgba(0,0,0,0.5) format
   */
  background_color?: string;

  /**
   * Quote — `string`
   *
   * Thoughts and feedback from a Riggs patient.
   */
  testimonial_text: string;

  /**
   * Patient Name — `string`
   *
   *
   */
  patient_name: string;

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

  /**
   * CTA — `link`
   *
   *
   */
  cta: Link;

  /**
   * CTA Text — `string`
   *
   *
   */
  cta_text: string;
};

export type TextTestimonialCard = {
  _type: "textTestimonialCard";
  /**
   * Background Color — `string`
   *
   * in hex (#123456) or rgba (rgba(0,0,0,0.5) format
   */
  background_color?: string;

  /**
   * Text Testimonial Card Header — `string`
   *
   *
   */
  header: string;

  /**
   * Text Testimonial Card Description — `text`
   *
   *
   */
  description: string;

  /**
   * Text Testimonial Card CTA Text — `string`
   *
   *
   */
  cta: string;

  /**
   * Text Testimonial Card CTA Url — `link`
   *
   *
   */
  ctaUrl: Link;

  /**
   * Text Testimonial Card Testimonial — `text`
   *
   *
   */
  testimonialText: string;

  /**
   * Text Testimonial Card Patient Name — `string`
   *
   *
   */
  patientName: string;

  /**
   * Text Testimonial Card Patient Photo — `image`
   *
   * Patient Photo is Optional
   */
  patientPhotoPath?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Text Testimonial Card Box Cta Link — `link`
   *
   *
   */
  boxCtaLink: Link;

  /**
   * Text Testimonial Card Box Cta text — `string`
   *
   *
   */
  boxCtaText: string;
};

export type NavConfig = {
  _type: "navConfig";
  /**
   * navLists — `array`
   *
   *
   */
  navLists?: Array<SanityKeyed<NavList>>;
};

export type NavItem = {
  _type: "navItem";
  /**
   * Label — `string`
   *
   *
   */
  label: string;

  /**
   * Url — `link`
   *
   *
   */
  url: Link;

  /**
   * Sub-nav items — `array`
   *
   *
   */
  links?: Array<SanityKeyed<NavItem>>;
};

export type NavList = {
  _type: "navList";
  /**
   * Label — `string`
   *
   *
   */
  label: string;

  /**
   * Url — `link`
   *
   *
   */
  url: Link;

  /**
   * Sub-nav items — `array`
   *
   *
   */
  links?: Array<SanityKeyed<NavItem>>;
};

export type Documents =
  | Category
  | Department
  | DepartmentTeam
  | Event
  | EventCategory
  | EventPage
  | EventSeries
  | ExternalContributor
  | News
  | NewsPage
  | Page
  | PostType
  | Resource
  | ResourcePage
  | ResourceType
  | SiteConfig
  | Staff
  | TeamPage;
