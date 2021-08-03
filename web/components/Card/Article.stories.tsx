import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react';
import {ThemeProvider} from 'styled-components';

import {ArticleCard} from './index';
import theme from '../../themes/theme';

export default {
  title: 'Components/Cards',
  component: ArticleCard,
};

const Template: Story<ComponentProps<typeof ArticleCard>> = (args) => (
  <ThemeProvider theme={theme}>
    <ArticleCard {...args} />
  </ThemeProvider>
);

export const Article = Template.bind({});
Article.args = {
  image: '/link-menu-image.jpg',
  category: 'News & Blog',
  headline:
    'Slow Fuse of the Possible: Some Convergences of Poetry and Psychoanalysis',
  date: 'May 14, 2021',
  description:
    'Psychoanalysis has long been interested in poetic creativity. In this virtual talk, poet Kate Daniels will explore some deep connections between the two.',
};
