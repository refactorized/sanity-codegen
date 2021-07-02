import React from 'react';

import {Facebook} from './index.tsx';

export default {
  title: 'Components/SocialComponents/Facebook',
  component: {Facebook},
};

const Template = (args) => (
  <>
    <Facebook {...args} />
  </>
);

export const FacebookSVG = Template.bind({});
FacebookSVG.args = {
  color: 'blue',
  hoverColor: 'black',
  link: 'https://www.facebook.com',
  size: '36',
};
