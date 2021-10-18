import type {
  SanityKeyed,
  SanityDocument,
  SanityKeyedReference,
  SanityReference,
  SanitySlug,
  SanityImageAsset,
  BasicText,
  Category,
  Link as _Link,
  PtImage as _PtImage,
  Page,
} from '@schema/types';

export type BasicText = BasicText;

// these are always present on data that comes in from sanity
export interface PageSection {
  _type: string;
  _key: string;
}

export type PageDocument = ResolvedSanityReferences<Page>;

export interface FooterLink {
  title: string;
  slug: {current: string};
  _key: string;
}
export interface FooterConfig {
  col1: FooterLink[];
  col2: FooterLink[];
  col3: FooterLink[];
  col4: FooterLink[];
  col5: FooterLink[];
}
export type SiteConfig = ResolvedSanityReferences<{
  announcementBarShow: boolean;
  announcementBarMessage: string;
  announcementBarCtaText: string;
  announcementBarCtaLink: Link;
  AddressLine1: string;
  AddressLine2: string;
  email: string;
  phone: string;
  fax: string;
  footerConfig: FooterConfig;
  privatePolicy: string;
  austinRiggs: string;
}>;

export type ResolvedPageInfo = ResolvedSanityReferences<{
  _type: 'resolvedPageInfo'; // using pageInfo here creates a cyclic mapping
  title?: string;
  slug?: {_type: 'slug'; current: string};
  category?: Category;
  description?: string;
  openGraphImage?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}>;

export type ResolvedPageLink = {
  _type: 'slug';
  current: string;
};

// see: https://github.com/ricokahler/sanity-codegen/issues/175#issuecomment-900805132
// recursively resolve sanity references for a given type
export type ResolvedSanityReferences<T> =
  // match `SanityKeyedReference` and unwrap via `infer U`
  T extends SanityKeyedReference<infer U>
    ? U
    : // match `SanityReference` and unwrap via `infer U`
    T extends SanityReference<infer U>
    ? U
    : // resolve pageInfo references (see note below)
    T extends {_type: 'pageInfo'}
    ? ResolvedPageInfo
    : // resolve pageLink references (see note below)
    T extends {_type: 'pageLink'}
    ? ResolvedPageLink
    : // match arrays, unwrap with `T[number]`,
    // recursively run through `ResolvedSanityReferences`
    // then re-wrap in an another array
    T extends any[]
    ? Array<ResolvedSanityReferences<T[number]>>
    : // finally utilize mapped types to
      // recursively run children through `ResolvedSanityReferences`
      {[P in keyof T]: ResolvedSanityReferences<T[P]>};

// Note: above, we are explicitly spelling out types like {_type: 'pageLink'}
// because the types generated by sanity-codegen do not use the correct value
// for _type, which is what our resolvers key on.

export type Link = ResolvedSanityReferences<_Link>;
export type PtImage = ResolvedSanityReferences<_PtImage>;
