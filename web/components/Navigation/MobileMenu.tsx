import {useState, MouseEventHandler} from 'react';
import styled from 'styled-components';
import {typography} from 'styled-system';
import Link from 'next/link';
import {useRouter} from 'next/router';

import {BackButton} from './BackButton';
import {Search, Phone} from '../MiscComponents/index';
import {HamburgerMenu} from '../NavSvgComponent/index';
import {Logo} from '../Logo/index';
import {RightArrowNoLine} from '../Arrow/index';
import {color, space, query} from '../../themes/fn';

import {NavigationProps} from './index';

export interface NavigationBottomProps extends NavigationProps {
  show: boolean;
  handleChangeLevel: (number) => void;
  menuLevel: number;
  handleCurrentParent: (string) => void;
}

interface LinkObject {
  label: string;
  url: string;
  links?: LinkObject[];
}

/****
 * MOBILE
 * */
const StyledMobileMenuWrapper = styled.div`
  display: block;
  padding: ${space('md')};
  background-color: ${color('background')};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  z-index: 3;

  @media (${query.atLeast('desktop')}) {
    display: none;
  }
  ${typography}
`;

const StyledMobileFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1px;
`;

/** Logo */
const StyledLogoWrapper = styled.div`
  svg {
    width: 161px;
  }

  @media (${query.atLeast('tablet')}) {
    svg {
      width: 221px;
    }
  }
`;

/** Right Sect */
const StyledMobileRightSection = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSearchWrapper = styled.div`
  margin-right: ${space('md')};
`;

/*** MOBILE NAVIGATION BOTTOM */
const StyledMobileBottomWrapper = styled.div`
  position: relative;
`;

const StyledMobileBottomBody = styled.div`
  background-color: ${color('cream')};
  transition: transform 0.4s ease-in-out;
  position: fixed;
  width: 100%;
  top: 53px;
  left: 0;
  bottom: 0;
  transform: translateX(${({show}) => (show ? '0px' : '100%')});
  z-index: 2;
`;

const StyledMobileBottomBodyAdditional = styled(StyledMobileBottomBody)`
  top: 0;
`;

const StyledMobileBottomBodyLinkList = styled.ul`
  ${typography}
  list-style-type: none;
  padding: 0 ${space('md')};
  margin: 0;
`;

const StyledMobileBottomBodyLink = styled.li`
  padding: ${space('md')} 0;
  border-bottom: 0.5px solid rgba(88, 88, 90, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #212121;
`;

const StyledMobileBottomBodyLinkA = styled.a`
  text-decoration: none;
`;

const StyledMobileBottomAdditionalLinks = styled.li`
  margin-top: ${space('lg')};
`;

const StyledMobileBottomAdditionalLinksRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({last}) => (last ? '0' : space('md'))};
`;

const StyledMobileBottomAdditionalLinksRowCell = styled.div`
  display: flex;
  align-items: center;
  ${({border}) => border && `border-right: 1px solid #58585A;`}
  margin-right: ${({border}) => (border ? space('lg') : `0`)};
  padding-right: ${({border}) => (border ? space('lg') : `0`)};

  span {
    margin-right: ${space('sm')};
  }
  .add-right-margin {
    margin-right: ${space('lg')};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledMobileBottomBottomBodyLinkArrowWrapper = styled.span``;

export const MobileMenu = ({
  links,
  featuredLink,
  phone,
  logInLink,
  registerLink,
}: NavigationProps): JSX.Element => {
  const [showNavBottomMobile, handleShowNavBottomMobile] = useState(false);
  const [menuLevel, handleMenuLevel] = useState(1);
  const [currentParent, handleCurrentParent] = useState('');

  const handleHamburgerClick = (e) => {
    e.preventDefault();
    resetLevelDefault();
    handleShowNavBottomMobile(!showNavBottomMobile);
  };

  const handleChangeLevel = (change: 1 | -1) => {
    handleMenuLevel(menuLevel + change);
  };

  const resetLevelDefault = () => {
    handleMenuLevel(1);
  };

  return (
    <StyledMobileMenuWrapper>
      {/*** MOBILE */}
      <StyledMobileFlex>
        {/*** TEMP - Needs to be replaced by SVG Logo */}
        {menuLevel === 1 ? (
          <StyledLogoWrapper>
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </StyledLogoWrapper>
        ) : (
          <BackButton
            menuLevel={menuLevel}
            handleChangeLevel={handleChangeLevel}
            parent={currentParent}
          />
        )}
        <StyledMobileRightSection>
          <StyledSearchWrapper>
            <Search color="black" hoverColor="black" link="#" size="21" />
          </StyledSearchWrapper>
          <div onClick={handleHamburgerClick}>
            <HamburgerMenu color="#1B76B0" hoverColor="#1B76B0" size="21" />
          </div>
        </StyledMobileRightSection>
      </StyledMobileFlex>
      <StyledMobileBottomWrapper>
        <NavigationMobileBottom
          links={links}
          show={showNavBottomMobile}
          handleChangeLevel={handleChangeLevel}
          menuLevel={menuLevel}
          handleCurrentParent={handleCurrentParent}
          featuredLink={featuredLink}
          phone={phone}
          logInLink={logInLink}
          registerLink={registerLink}
        />
      </StyledMobileBottomWrapper>
    </StyledMobileMenuWrapper>
  );
};

export const NavigationMobileBottom = ({
  links,
  show,
  handleChangeLevel,
  menuLevel,
  handleCurrentParent,
  featuredLink,
  phone,
  logInLink,
  registerLink,
}: NavigationBottomProps): JSX.Element => {
  const router = useRouter();
  const [subMenuItems, handleSubMenuItems] = useState({});

  // Render Menu List
  const renderItems = (links: LinkObject[]) => {
    if (links && links.length > 0) {
      return links.map((link, index) => {
        const hasSublinks = link.links && link.links.length > 0;

        return hasSublinks ? (
          /** Has  sublinks */
          <StyledMobileBottomBodyLink
            key={index}
            fontSize={2}
            onClick={() => handleItemClickWithSubitems(link.links, link.label)}
          >
            {link.label}
            {hasSublinks && (
              <StyledMobileBottomBottomBodyLinkArrowWrapper>
                <RightArrowNoLine size={12} />
              </StyledMobileBottomBottomBodyLinkArrowWrapper>
            )}
          </StyledMobileBottomBodyLink>
        ) : (
          /** Has no sublinks */
          <Link key={index} href={link.url} passHref={true}>
            <StyledMobileBottomBodyLinkA>
              <StyledMobileBottomBodyLink key={link.label} fontSize={2}>
                {link.label}
              </StyledMobileBottomBodyLink>
            </StyledMobileBottomBodyLinkA>
          </Link>
        );
      });
    } else {
      return null;
    }
  };

  // Render Submenu
  const renderSubmenuItems = (links: LinkObject[]) => {
    if (links && links.length > 0) {
      return renderItems(links);
    } else {
      return null;
    }
  };

  // Assigns menu item
  const handleItemClickWithSubitems = (links: LinkObject[], label: string) => {
    handleChangeLevel(1);

    let menuObj = subMenuItems;

    menuObj[menuLevel] = links;
    handleCurrentParent(label);
    handleSubMenuItems(menuObj);
  };

  return (
    <>
      <StyledMobileBottomBody show={show} fontFamily="body">
        {/** Primary Nav Links */}
        <StyledMobileBottomBodyLinkList fontFamily="body">
          {renderItems(links)}
          <StyledMobileBottomAdditionalLinks>
            <StyledMobileBottomAdditionalLinksRow fontSize={0}>
              {phone && (
                <StyledMobileBottomAdditionalLinksRowCell border={true}>
                  <Phone
                    color="#D15D34"
                    hoverColor="#D15D34"
                    link=""
                    size="12"
                  />{' '}
                  <Link
                    href={`tel:+1${phone
                      .replace('.', '')
                      .replace('-', '')
                      .replace(' ', '')}`}
                  >
                    <a>{phone}</a>
                  </Link>
                </StyledMobileBottomAdditionalLinksRowCell>
              )}
              {featuredLink && (
                <StyledMobileBottomAdditionalLinksRowCell>
                  <Link href={featuredLink.url}>
                    <a>{featuredLink.label}</a>
                  </Link>
                </StyledMobileBottomAdditionalLinksRowCell>
              )}
            </StyledMobileBottomAdditionalLinksRow>
            <StyledMobileBottomAdditionalLinksRow fontSize={0} last={true}>
              {logInLink && (
                <StyledMobileBottomAdditionalLinksRowCell mr={true}>
                  <span className="add-right-margin">
                    <Link href={logInLink.url}>
                      <a>{logInLink.label}</a>
                    </Link>
                  </span>
                </StyledMobileBottomAdditionalLinksRowCell>
              )}
              {registerLink && (
                <StyledMobileBottomAdditionalLinksRowCell>
                  <Link href={registerLink.url}>
                    <a>{registerLink.label}</a>
                  </Link>
                </StyledMobileBottomAdditionalLinksRowCell>
              )}
            </StyledMobileBottomAdditionalLinksRow>
          </StyledMobileBottomAdditionalLinks>
        </StyledMobileBottomBodyLinkList>
        <StyledMobileBottomBodyAdditional show={menuLevel >= 2}>
          <StyledMobileBottomBodyLinkList fontFamily="body">
            {renderSubmenuItems(subMenuItems[1])}
          </StyledMobileBottomBodyLinkList>
        </StyledMobileBottomBodyAdditional>
        <StyledMobileBottomBodyAdditional show={menuLevel >= 3}>
          <StyledMobileBottomBodyLinkList fontFamily="body">
            {renderSubmenuItems(subMenuItems[2])}
          </StyledMobileBottomBodyLinkList>
        </StyledMobileBottomBodyAdditional>
      </StyledMobileBottomBody>
    </>
  );
};
