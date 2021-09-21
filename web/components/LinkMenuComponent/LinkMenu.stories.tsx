import React, {ComponentProps} from 'react';
import siteConfig from './testData';
import {Story} from '@storybook/react';

import {LinkMenuComponent} from '.';
import {ThemeProvider} from 'styled-components';
import theme from '@theme';

export default {
  title: 'Components/LinkMenuComponent',
  component: LinkMenuComponent,
};

const Template: Story<ComponentProps<typeof LinkMenuComponent>> = (args) => (
  <ThemeProvider theme={theme}>
    <LinkMenuComponent {...args} />
  </ThemeProvider>
);

export const DefaultSetup = Template.bind({});
DefaultSetup.args = {
  imgUrl: '/link-menu-stub.jpg',
  header: siteConfig.headline,
  description: siteConfig.copy,
  btnText: siteConfig.cta.title,
  btnUrl: siteConfig.cta.slug.current,
  linkConfig: siteConfig.linkConfig,
};
