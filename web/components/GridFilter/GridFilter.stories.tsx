import {ThemeProvider} from 'styled-components';
import GridFilter, {GridFilterProps} from '.';
import theme from '@theme';

export default {
  title: 'Components/Grid Filter',
  component: GridFilter,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <GridFilter {...args} />
  </ThemeProvider>
);

export const DefaultSetup = Template.bind({});
DefaultSetup.args = {
  categories: [
    {
      label: 'Choose a Department',
      items: [
        {id: 1, title: 'All Departments'},
        {id: 2, title: 'Administrative'},
        {id: 3, title: 'Clinical'},
        {id: 4, title: 'Events'},
      ],
      selected: 2,
    },
    {
      label: 'Choose a Sub-Department',
      items: [
        {id: 1, title: 'All Departments'},
        {id: 2, title: 'Executive'},
        {id: 3, title: 'Facilities'},
      ],
    },
  ],
  // Here in the demo, we are logging the selected value to the console.
  // In practice, you would attach this callback to page state or another component to process.
  onSelected: (list) => console.log(list),
} as GridFilterProps;
