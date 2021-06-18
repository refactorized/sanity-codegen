type SanityDocument = {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
};

interface PlaceholderBlock {
  blockType: 'placeholder';
  text: string;
}

interface ProseBlock {
  blockType: 'prose';
  content: any[];
}

// todo: investigate automation of this - see https://github.com/RyanCavanaugh/dts-dom
type PageBlock = ProseBlock | PlaceholderBlock;

interface PageDocument extends SanityDocument {
  blocks: PageBlock[];
}
