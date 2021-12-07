import styled from 'styled-components';
import {color, fontFamily, fontSize} from '@theme/fn';
import Link from 'next/link';
import Block from '@components/Layout/Block';

export interface BreadcrumbsProps {
  pages: {
    title: string;
    slug: {
      current: string;
    };
  }[];
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
