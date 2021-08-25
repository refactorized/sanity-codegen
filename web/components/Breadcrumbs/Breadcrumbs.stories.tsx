import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';

import {Breadcrumbs} from '.';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
};

const Template: Story<ComponentProps<typeof Breadcrumbs>> = (args) => (
  <ThemeProvider theme={theme}>
    <Breadcrumbs {...args} />
  </ThemeProvider>
);

export const DefaultSetup = Template.bind({});
DefaultSetup.args = {
  pages: [
    {title: 'Our Treatment', slug: {current: 'our-treatment'}},
    {
      title: 'The Riggs Difference',
      slug: {current: 'our-treatment/the-riggs-difference'},
    },
  ],
};
