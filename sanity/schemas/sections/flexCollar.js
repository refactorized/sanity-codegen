import {GiBowTie} from 'react-icons/gi';

export const flexCollarCard = {
  name: 'flexCollarCard',
  type: 'object',
  title: 'Flex Collar Card',
  preview: {
    select: {
      title: 'pageInfo.title',
      media: 'pageInfo.image',
    },
  },
  fields: [
    {
      name: 'pageInfo',
      title: 'Page',
      description: 'Page from this website to build a card from',
      type: 'pageInfo',
    },
    // todo: consider override properties especially for image
  ],
};

const flexCollar = {
  name: 'flexCollar',
  type: 'object',
  title: 'Flex Collar',
  icon: GiBowTie,
  fields: [
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{type: 'flexCollarCard'}],
      codegen: {required: true},
      validation: (Rule) => Rule.min(1).max(3).required(),
    },
  ],
  preview: {
    select: {
      first: 'cards.0.pageInfo.title',
      second: 'cards.1.pageInfo.title',
      third: 'cards.2.pageInfo.title',
    },
    prepare: ({first, second, third}) => {
      const titles = [first, second, third];
      const title = `Flex Collar: ${titles.filter((a) => !!a).join(' | ')}`;
      return {title};
    },
  },
};

export default flexCollar;
