import {
  SanityDocument,
  SanityKeyedReference,
  SanityReference,
} from '@schema/types';

interface PageBlockData {
  blockType: string; // TODO: blocktype->_type
  _type: string;
  _key: string;
}

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

// see: https://github.com/ricokahler/sanity-codegen/issues/175#issuecomment-900805132
// recursively resolve sanity references for a given type
type ResolvedSanityReferences<T> =
  // match `SanityKeyedReference` and unwrap via `infer U`
  T extends SanityKeyedReference<infer U>
    ? U
    : // match `SanityReference` and unwrap via `infer U`
    T extends SanityReference<infer U>
    ? U
    : // match arrays, unwrap with `T[number]`,
    // recursively run through `ResolvedSanityReferences`
    // then re-wrap in an another array
    T extends any[]
    ? Array<ResolvedSanityReferences<T[number]>>
    : // finally utilize mapped types to
      // recursively run children through `ResolvedSanityReferences`
      {[P in keyof T]: ResolvedSanityReferences<T[P]>};
