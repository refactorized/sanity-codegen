import React from 'react';

import {Search} from './index.tsx';

export default {
  title: 'Example/MiscComponents/Search',
  component: {Search},
};

const Template = (args) => (
  <>
    <Search {...args} />
  </>
);

export const SearchSVG = Template.bind({});
SearchSVG.args = {
  color: '#1B76B0',
  hoverColor: 'red',
  link: 'https://www.google.com',
  size: '36',
};
