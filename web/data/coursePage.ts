import client, {bigFetch} from './sanityClient';
import {PageDocument} from '@data/types';
import groq from 'groq';

export const getCoursePaths = async (): Promise<string[]> => {
  const pathQuery = groq`*[_type == "course"  && !(_id in path('drafts.**'))]`;
  const results = await client.fetch(pathQuery);
  return results
    .filter((page) => page.slug && page.slug.current)
    .map((page) => `${page.slug.current}`);
};

export const getAllCourses = async (): Promise<PageDocument> => {
  const query = groq`*[_type == "course" && !(_id in path('drafts.**'))] | order(_updatedAt desc)`;
  const resources = await bigFetch(query);
  return resources as PageDocument;
};

export const getCoursePageData = async (
  preview?: boolean,
): Promise<PageDocument> => {
  const query = groq`*[_type == "coursePage"] | order(_updatedAt desc)[0]`;
  const pageData = await bigFetch(query, preview);
  return pageData as PageDocument;
};

// async await style
export const getCourseDetailPageData = async (
  slug: string,
  preview?: boolean,
): Promise<PageDocument> => {
  const query = groq`*[_type == "course" && slug.current == "${slug}"] | order(_updatedAt desc)[0]`;
  const pageData = await bigFetch(query, preview);
  return pageData as PageDocument;
};
