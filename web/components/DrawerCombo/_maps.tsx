import DrawerCombo, {DrawerComboProps} from '.';
import DrawerComboBlockData from '@data/blocks/DrawerComboBlockData';
import {mapLink} from '@util/mapping/index';

const _map = (block: DrawerComboBlockData) => {
  const props: DrawerComboProps = {
    title: block.title,
    copy: block.copy,
    cta: {
      url: mapLink(block.url),
      label: block.label,
    },
    drawers: block.drawers.map((drawer) => ({
      icon: drawer.icon?.asset.url || null,
      title: drawer.title,
      details: drawer.details,
    })),
  };

  return <DrawerCombo key={block._key} {...props} />;
};

export default _map;
