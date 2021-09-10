import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react';
import {ThemeProvider} from 'styled-components';

import DrawerCombo from './index';
import theme from '@theme';

export default {
  title: 'Components/DrawerCombo',
  component: DrawerCombo,
};

const Template: Story<ComponentProps<typeof DrawerCombo>> = (args) => (
  <ThemeProvider theme={theme}>
    <DrawerCombo {...args} />
  </ThemeProvider>
);

export const Drawer = Template.bind({});
Drawer.args = {
  title: 'The Riggs Difference',
  copy: 'At Riggs, we treat the person, not the diagnosis. And that makes all the difference. Here, you’ll find an open setting that promotes patient autonomy, as you uncover the meanings behind your symptoms through a therapist-patient relationship that underscores the importance of all relationships.',
  cta: {
    label: 'Learn More',
  },
  drawers: [
    {
      icon: './hands.svg',
      title: 'Voluntary, Open Setting',
      details:
        'Our open setting is a physical manifestation of the way our treatment approach opens your eyes, helping you reawaken to living more fully. In this voluntary treatment environment, we work together to help you reconnect with your inner strengths, build healthy relationships, and find a renewed sense of purpose.',
    },
    {
      icon: './mind.svg',
      title: 'Finding Meaning in Behavior',
      details:
        'Our open setting is a physical manifestation of the way our treatment approach opens your eyes, helping you reawaken to living more fully. In this voluntary treatment environment, we work together to help you reconnect with your inner strengths, build healthy relationships, and find a renewed sense of purpose.',
    },
    {
      icon: './tree.svg',
      title: 'Importance of Relationships',
      details:
        'Our open setting is a physical manifestation of the way our treatment approach opens your eyes, helping you reawaken to living more fully. In this voluntary treatment environment, we work together to help you reconnect with your inner strengths, build healthy relationships, and find a renewed sense of purpose.',
    },
    {
      icon: './hands.svg',
      title: 'Taking Charge of Treatment',
      details:
        'Our open setting is a physical manifestation of the way our treatment approach opens your eyes, helping you reawaken to living more fully. In this voluntary treatment environment, we work together to help you reconnect with your inner strengths, build healthy relationships, and find a renewed sense of purpose.',
    },
  ],
};
