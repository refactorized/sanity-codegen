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

type PageBlock = ProseBlock | PlaceholderBlock;

interface PageDocument extends SanityDocument {
  blocks: PageBlock[];
}
