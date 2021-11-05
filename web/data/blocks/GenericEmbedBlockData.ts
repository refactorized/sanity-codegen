import type {GenericEmbed, SanityKeyed} from '@schema/types';

// def no need to expand references on this type
export type GenericEmbedBlockData = SanityKeyed<GenericEmbed>;

export default GenericEmbedBlockData;
