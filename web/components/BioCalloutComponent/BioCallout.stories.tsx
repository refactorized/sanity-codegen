import React, {ComponentProps} from 'react';

import {Story} from '@storybook/react';
import siteConfig from './testData';

import {BioCallout} from '.';
import {ThemeProvider} from 'styled-components';
import theme from '../../themes';

export default {
  title: 'Components/BioCallout',
  component: BioCallout,
};

const Template: Story<ComponentProps<typeof BioCallout>> = (args) => (
  <ThemeProvider theme={theme}>
    <BioCallout {...args} />
  </ThemeProvider>
);

export const DefaultSetup = Template.bind({});
DefaultSetup.args = {
  cards: siteConfig.cards,
  headline: siteConfig.headline,
};
