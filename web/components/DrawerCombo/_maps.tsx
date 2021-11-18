import DrawerCombo, {DrawerComboProps} from '.';
import DrawerComboBlockData from '@data/blocks/DrawerComboBlockData';
import {mapLink} from '@util/mapping/index';
import ProseBlock from '@components/ProseBlock';
import ProseBlockData from '@data/blocks/ProseBlockData';

const _map = (block: DrawerComboBlockData) => {
  const props: DrawerComboProps = {
    title: block.title,
    copy: block.copy,
    cta: {
      url: mapLink(block.url),
      label: block.label,
    },
    drawers: block.drawers.map((drawer) => {
      return {
        icon: drawer.icon?.asset.url || null,
        title: drawer.title,
        details: drawer.details,
        content: drawer.content ? (
          <ProseBlock
            block={{_key: '000', _type: 'prose', content: drawer.content}}
          />
        ) : null,
      };
    }),
  };

  return <DrawerCombo key={block._key} {...props} />;
};

export default _map;
