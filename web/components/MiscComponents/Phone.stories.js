import React from 'react';

import {Phone} from './index.tsx';

export default {
  title: 'Components/MiscComponents/Phone',
  component: {Phone},
};

const Template = (args) => (
  <>
    <Phone {...args} />
  </>
);

export const PhoneSVG = Template.bind({});
PhoneSVG.args = {
  color: '#D15D34',
  hoverColor: '',
  link: '',
  size: '36',
};
