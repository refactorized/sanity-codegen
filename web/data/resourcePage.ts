import client, {bigFetch} from './sanityClient';
import {PageDocument} from '@data/types';
import groq from 'groq';

export const getResourcePaths = async (): Promise<string[]> => {
  const pathQuery = groq`*[_type == "resource"  && !(_id in path('drafts.**'))]`;
  const results = await client.fetch(pathQuery);
  return results
    .filter((page) => page.slug?.current)
    .map((page) => `${page.slug.current}`);
};

export const getAllResources = async (): Promise<PageDocument> => {
  const query = groq`*[_type == "resource" && !(_id in path('drafts.**'))] | order(_updatedAt desc)`;
  const resources = await bigFetch(query);
  return resources as PageDocument;
};

export const getResourcePageData = async (
  preview?: boolean,
): Promise<PageDocument> => {
  const query = groq`*[_type == "resourcePage"] | order(_updatedAt desc)[0]{
    ...,
    featuredResource->
  }`;
  const pageData = await bigFetch(query, preview);
  return pageData as PageDocument;
};

export const getResourceDetailPageData = async (
  slug: string,
  preview?: boolean,
): Promise<PageDocument> => {
  const query = groq`*[_type == "resource" && slug.current == "${slug}"]{
    ...,
    type->,
    associatedStaff[]->
  } | order(_updatedAt desc)[0]`;
  const pageData = await bigFetch(query, preview);
  return pageData as PageDocument;
};
