import { ProfileRelation } from './profile-relation';

export type Community = ProfileRelation & {
  creatorSlug: string;
};
