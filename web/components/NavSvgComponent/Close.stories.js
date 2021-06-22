import React from 'react';

import {Close} from './index.tsx';

export default {
  title: 'Components/NavSvgComponents/Close',
  component: {Close},
};

const Template = (args) => (
  <>
    <Close {...args} />
  </>
);

export const CloseSVG = Template.bind({});
CloseSVG.args = {
  color: 'black',
  hoverColor: 'grey',
  link: 'https://www.google.com',
  size: '36',
};
