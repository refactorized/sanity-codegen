import client, {bigFetch} from './sanityClient';
import {PageDocument} from '@data/types';
import groq from 'groq';

export const getNewsPaths = async (): Promise<string[]> => {
  const pathQuery = groq`*[_type == "news"  && !(_id in path('drafts.**'))]`;
  const results = await client.fetch(pathQuery);
  return results
    .filter((page) => page.slug?.current)
    .map((page) => `${page.slug.current}`);
};

export const getAllNews = async (): Promise<PageDocument> => {
  const query = groq`*[_type == "news" && !(_id in path('drafts.**'))] | order(_updatedAt desc)`;
  const resources = await bigFetch(query);
  return resources as PageDocument;
};

export const getNewsPageData = async (
  preview?: boolean,
): Promise<PageDocument> => {
  const query = groq`*[_type == "newsPage"] | order(_updatedAt desc)[0]`;
  const pageData = await bigFetch(query, preview);
  return pageData as PageDocument;
};

// async await style
export const getNewsDetailPageData = async (
  slug: string,
  preview?: boolean,
): Promise<PageDocument> => {
  const query = groq`*[_type == "news" && slug.current == "${slug}"] | order(_updatedAt desc)[0]`;
  const pageData = await bigFetch(query, preview);
  return pageData as PageDocument;
};
