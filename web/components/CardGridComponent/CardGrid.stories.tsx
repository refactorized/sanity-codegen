import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';
import siteConfig from './testData';

import {CardGrid} from '.';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes';

export default {
  title: 'Components/CardGrid',
  component: CardGrid,
};

const Template: Story<ComponentProps<typeof CardGrid>> = (args) => (
  <ThemeProvider theme={theme}>
    <CardGrid {...args} />
  </ThemeProvider>
);

export const DefaultSetup = Template.bind({});
DefaultSetup.args = {
  links: siteConfig.links,
  articleCardArr: siteConfig.articleCardArr,
  textAndImageObject: siteConfig.textAndImageObject,
};
