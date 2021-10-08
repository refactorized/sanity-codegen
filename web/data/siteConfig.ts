import {fetchOne, replaceReferences} from './sanityClient';
import {handler} from '../util/logging';
import groq from 'groq';
import {SiteConfig} from '@data/types';

const getSiteConfig = async (): Promise<SiteConfig> => {
  // matching in exact id also avoids drafts
  const query = groq`*[_type == "siteConfig" && _id=="ID_SITE_CONFIG"]`;

  try {
    const siteData = await fetchOne(query);
    await replaceReferences(siteData);
    return siteData as SiteConfig;
  } catch (err) {
    handler(err);
    return null;
  }
};

export default getSiteConfig;
