import { AuthorData } from './AuthorData';

export type Author = Pick<AuthorData, 'username' | 'name'> & {
  nameWithInitial: string;
  avatarImageUrl?: string;
  description: string;
};
