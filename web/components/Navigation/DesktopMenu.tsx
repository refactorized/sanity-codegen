import {useState, MouseEventHandler} from 'react';
import styled from 'styled-components';
import {typography} from 'styled-system';

import Link from 'next/link';
import {Search, Phone} from '../MiscComponents/index';
import {Logo} from '../Logo/index';
import {color, space, query} from '../../themes/fn';

import {NavigationProps} from './index';

interface LinkObject {
  label: string;
  url: string;
  links?: LinkObject[];
}

/****
 * DESKTOP
 * */
const StyledDesktopMenuWrapper = styled.div`
  ${typography}
  display: none;
  @media (${query.atLeast('desktop')}) {
    display: block;
    padding: 0 ${space('x10')};
  }
`;

const StyledTopSection = styled.div`
  padding: ${space('md')} 0 ${space('sm')};
  border-bottom: 1px solid #eeeeef;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTopRightSection = styled.ul`
  ${typography}
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  line-height: 1px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledTopRightSectionItem = styled.li`
  margin-right: ${space('md')};
  display: flex;
  align-items: center;
  &:last-child {
    margin-right: 0;
  }

  span {
    margin-right: ${space('sm')};
  }
`;

const StyledBottomSection = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const StyledSection = styled.ul`
  list-style-type: none;
`;

const StyledLink = styled.li`
  ${typography}
  margin-right: ${space('lg')};
  padding: ${space('md')} 0;
  text-transform: uppercase;
  border-bottom: 4px solid transparent;
  position: relative;

  .StyledSubLinkWrapper {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    padding: ${space('x5')} ${space('xl')};
    display: none;
    background: ${color('cream')};
    z-index: 2;
    min-width: 500px;
  }

  a {
    color: #282828;
    text-decoration: none;
  }

  &:hover {
    border-color: ${color('blue')};

    .StyledSubLinkWrapper {
      display: block;
    }
  }

  @media (${query.below('max')}) {
    margin-right: ${space('md')};
  }
`;

const StyledSubLink = styled.li`
  ${typography}
  ${({header}) => header && `font-weight: 700;`}
  margin-bottom: ${space('md')};
  text-transform: none;

  ul {
    list-style-type: none;
    padding-left: ${space('md')};
    margin-top: ${space('md')};

    li {
      font-weight: normal;
    }
  }
`;

const StyledSubLinkWrapper = styled.ul`
  list-style-type: none;
`;

export const DesktopMenu = ({
  links,
  featuredLink,
  phone,
  logInLink,
  registerLink,
}: NavigationProps): JSX.Element => {
  const renderTopLinks = (links: LinkObject[]) => {
    return links.map((link, index) => {
      return (
        <StyledLink key={index} fontSize={0}>
          <Link href={link.url}>
            <a>{link.label}</a>
          </Link>
          {link.links && (
            <StyledSubLinkWrapper className="StyledSubLinkWrapper">
              {renderSubLinks(link.links)}
            </StyledSubLinkWrapper>
          )}
        </StyledLink>
      );
    });
  };

  const renderSubLinks = (links: LinkObject[]) => {
    return links.map((link, index) => {
      return (
        <StyledSection key={index}>
          <StyledSubLink header={true} fontSize={1}>
            <Link href={link.url}>
              <a>{link.label}</a>
            </Link>
            {link.links && (
              <ul>
                <li>{renderSubLinks(link.links)}</li>
              </ul>
            )}
          </StyledSubLink>
        </StyledSection>
      );
    });
  };

  return (
    <StyledDesktopMenuWrapper fontFamily="body">
      <StyledTopSection>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <StyledTopRightSection fontSize={0}>
          <StyledTopRightSectionItem>
            <Search color="#1B76B0" hoverColor="#1B76B0" link="#" size="15" />
          </StyledTopRightSectionItem>
          {logInLink && (
            <StyledTopRightSectionItem>
              <Link href={logInLink.url}>
                <a>{logInLink.label}</a>
              </Link>
            </StyledTopRightSectionItem>
          )}
          {registerLink && (
            <StyledTopRightSectionItem>
              <Link href={registerLink.url}>
                <a>{registerLink.label}</a>
              </Link>
            </StyledTopRightSectionItem>
          )}
          {phone && (
            <StyledTopRightSectionItem>
              <Phone color="#D15D34" hoverColor="#D15D34" link="" size="15" />{' '}
              <Link
                href={`tel:+1${phone
                  .replace('.', '')
                  .replace('-', '')
                  .replace(' ', '')}`}
              >
                <a>{phone}</a>
              </Link>
            </StyledTopRightSectionItem>
          )}
          {featuredLink && (
            <StyledTopRightSectionItem>
              <Link href={featuredLink.url}>
                <a>{featuredLink.label}</a>
              </Link>
            </StyledTopRightSectionItem>
          )}
        </StyledTopRightSection>
      </StyledTopSection>
      <StyledBottomSection>{renderTopLinks(links)}</StyledBottomSection>
    </StyledDesktopMenuWrapper>
  );
};
