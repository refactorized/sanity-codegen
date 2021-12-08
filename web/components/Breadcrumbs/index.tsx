import styled from 'styled-components';
import {color, fontFamily, fontSize} from '@theme/fn';
import Link from 'next/link';
import Block from '@components/Layout/Block';
import {PageDocument} from '@data/types';
import {Path} from '@data/page';

export const getBreadcrumbs = (
  page: PageDocument,
  paths: Path[],
): Breadcrumb[] => {
  if (page && page.slug) {
    const fragments = page.slug?.current.trim().split('/');
    if (fragments.length <= 1) return []; // first level pages don't require breadcrumbs
    return fragments
      .filter((val) => val !== 'home') // filter out home links from breadcrumbs
      .map((value, index, arr) => {
        if (index < arr.length - 1) {
          // build title and link from slug fragments
          const currentPath = arr.reduce((prev, curr, currIndex) =>
            currIndex <= index ? prev + '/' + curr : prev,
          );
          const matchingPaths = paths
            ? paths.filter((path) => path.current === currentPath)
            : [];
          return {
            title:
              matchingPaths.length > 0
                ? matchingPaths[0].title
                : value
                    .split('-')
                    .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
                    .join(' '),
            slug: {
              current: currentPath,
            },
          };
        } else {
          // For the last item, use the page title and slug
          return {
            title: page.title,
            slug: {current: page.slug?.current},
          };
        }
      });
  }
  return [];
};

export interface Breadcrumb {
  title: string;
  slug: {
    current: string;
  };
}

export interface BreadcrumbsProps {
  pages: Breadcrumb[];
}

/*** STYLING ***/
// Margin right on span to simulate a space
const Wrapper = styled.div`
  ${fontSize('sm')};
  ${fontFamily('body')};

  display: flex;

  span {
    position: relative;
    display: flex;

    &:after {
      display: block;
      content: '/';
      margin: 0 0.25em;
    }

    &:last-child {
      margin-right: 0;

      &:after {
        display: none;
      }
    }
  }
  a {
    text-decoration: none;
    color: ${color('black')};
  }
`;

export const Breadcrumbs = ({pages}: BreadcrumbsProps): JSX.Element => {
  return (
    <>
      {pages.length > 0 && (
        <Block breadcrumbs squish={true}>
          <Wrapper>
            {pages.map((page, index) => {
              return (
                <span key={index}>
                  <Link href={page.slug.current}>
                    <a>{page.title}</a>
                  </Link>
                </span>
              );
            })}
          </Wrapper>
        </Block>
      )}
    </>
  );
};
