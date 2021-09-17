import React, {ComponentProps} from 'react';
import {Story} from '@storybook/react';
import {ThemeProvider} from 'styled-components';

import {TeamCard, StoryWrapper} from './TeamCard';
import theme from '@theme';

export default {
  title: 'Components/Cards',
  component: TeamCard,
};

const Template: Story<ComponentProps<typeof TeamCard>> = (args) => (
  <ThemeProvider theme={theme}>
    <StoryWrapper>
      <TeamCard {...args} />
    </StoryWrapper>
  </ThemeProvider>
);

export const TeamCardDefault = Template.bind({});
TeamCardDefault.args = {
  image: '/test-team.png',
  name: 'Steven Ackerman, PhD',
  title: 'Accreditation Manager | Team Leader | Staff Psychologist',
  phone: '123.456.7890',
  email: 'sackerman@austenriggs.org',
  url: '#',
  category: ['Administrative'],
  subcategory: ['Communications', 'Development'],
};
