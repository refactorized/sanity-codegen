import React from 'react';

import {HamburgerMenu} from './index.tsx';

export default {
  title: 'Components/NavSvgComponents/HamburgerMenu',
  component: {HamburgerMenu},
};

const Template = (args) => (
  <>
    <HamburgerMenu {...args} />
  </>
);

export const HamburgerMenuSVG = Template.bind({});
HamburgerMenuSVG.args = {
  color: 'black',
  hoverColor: 'grey',
  link: 'https://www.google.com',
  size: '36',
};
