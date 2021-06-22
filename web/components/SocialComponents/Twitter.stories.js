import React from 'react';

import {Twitter} from './index.tsx';

export default {
  title: 'Components/SocialComponents/Twitter',
  component: {Twitter},
};

const Template = (args) => (
  <>
    <Twitter {...args} />
  </>
);

export const TwitterSVG = Template.bind({});
TwitterSVG.args = {
  color: '#204568',
  hoverColor: 'black',
  link: 'https://www.twitter.com',
  size: '36',
};
