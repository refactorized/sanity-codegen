import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react';
import {ThemeProvider} from 'styled-components';

import {Pagination} from './index';
import theme from '@theme';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

const Template: Story<ComponentProps<typeof Pagination>> = (args) => (
  <ThemeProvider theme={theme}>
    <Pagination {...args} />
  </ThemeProvider>
);

export const PaginationComponent = Template.bind({});
PaginationComponent.args = {
  totalPages: 10,
  currentPage: 2,
  pageBufferCount: 2,
  pageSelected: (text) => {
    console.log(text);
  },
};
