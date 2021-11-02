import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react';
import {ThemeProvider} from 'styled-components';

import {ArticleCarousel} from './index';
import theme from '@theme';

export default {
  title: 'Components/ArticleCarousel',
  component: ArticleCarousel,
};

const Template: Story<ComponentProps<typeof ArticleCarousel>> = (args) => (
  <ThemeProvider theme={theme}>
    <ArticleCarousel {...args} />
  </ThemeProvider>
);

export const Articles = Template.bind({});
Articles.args = {
  title: 'Related Resources',
  cards: [
    {
      image: '/building.png',
      category: 'News & Blog',
      headline:
        'Slow Fuse of the Possible: Some Convergences of Poetry and Psychoanalysis',
      date: 'May 14, 2021',
      description:
        'Psychoanalysis has long been interested in poetic creativity. In this virtual talk, poet Kate Daniels will explore some deep connections between the two.',
    },
    {
      image: '/building.png',
      category: 'News & Blog',
      headline:
        'Slow Fuse of the Possible: Some Convergences of Poetry and Psychoanalysis',
      date: 'May 14, 2021',
      description:
        'Psychoanalysis has long been interested in poetic creativity. In this virtual talk, poet Kate Daniels will explore some deep connections between the two.',
    },
    {
      image: '/building.png',
      category: 'News & Blog',
      headline:
        'Slow Fuse of the Possible: Some Convergences of Poetry and Psychoanalysis',
      date: 'May 14, 2021',
      description:
        'Psychoanalysis has long been interested in poetic creativity. In this virtual talk, poet Kate Daniels will explore some deep connections between the two.',
    },
    {
      image: '/building.png',
      category: 'News & Blog',
      headline:
        'Slow Fuse of the Possible: Some Convergences of Poetry and Psychoanalysis',
      date: 'May 14, 2021',
      description:
        'Psychoanalysis has long been interested in poetic creativity. In this virtual talk, poet Kate Daniels will explore some deep connections between the two.',
    },
    {
      image: '/building.png',
      category: 'News & Blog',
      headline:
        'Slow Fuse of the Possible: Some Convergences of Poetry and Psychoanalysis',
      date: 'May 14, 2021',
      description:
        'Psychoanalysis has long been interested in poetic creativity. In this virtual talk, poet Kate Daniels will explore some deep connections between the two.',
    },
  ],
};
