import {useState, MouseEventHandler} from 'react';
import styled from 'styled-components';
import {typography} from 'styled-system';

import {MobileMenu} from './MobileMenu';
import {DesktopMenu} from './DesktopMenu';
import {Search} from '../MiscComponents/index';
import {HamburgerMenu} from '../NavSvgComponent/index';
import {RightArrowNoLine} from '../Arrow/index';
import {color, space, query} from '../../themes/fn';

export interface NavigationProps {
  links: LinkObject[];
  featuredLink?: LinkObject;
  phone: string;
  logInLink: LinkObject;
  registerLink: LinkObject;
}

export interface NavigationBottomProps {
  links: LinkObject[];
  show: boolean;
}

interface LinkObject {
  label: string;
  url: string;
  links?: LinkObject[];
}

/*** STYLING ***/
const StyledWrapper = styled.div`
  position: relative;
  background-color: white;

  box-shadow: none;
  @media (${query.atLeast('desktop')}) {
    width: 100%;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const Navigation = ({
  links,
  featuredLink,
  phone,
  logInLink,
  registerLink,
}: NavigationProps): JSX.Element => {
  return (
    <StyledWrapper>
      {/** ANNOUNCEMENT BAR GOES HERE? */}
      {/*** MOBILE */}
      <MobileMenu
        links={links}
        featuredLink={featuredLink}
        phone={phone}
        logInLink={logInLink}
        registerLink={registerLink}
      />
      {/*** DESKTOP */}
      <DesktopMenu
        links={links}
        featuredLink={featuredLink}
        phone={phone}
        logInLink={logInLink}
        registerLink={registerLink}
      />
    </StyledWrapper>
  );
};
