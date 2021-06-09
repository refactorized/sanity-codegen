import React from 'react';

import {LinkedIn} from './index.tsx';

export default {
  title: 'Example/SocialComponents/LinkedIn',
  component: {LinkedIn},
};

const Template = (args) => (
  <>
    <LinkedIn {...args} />
  </>
);

export const LinkedInSVG = Template.bind({});
LinkedInSVG.args = {
  color: '#204568',
  hoverColor: 'black',
  link: 'https://www.linkedIn.com',
  size: '36',
};
