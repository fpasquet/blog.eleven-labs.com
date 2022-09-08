import { Author, AuthorData } from '../types';
import { decodeBase64 } from './base64Helper';
import { capitalize } from './stringHelper';

export const transformAuthorData = (author: AuthorData): Author => {
  let nameWithInitial = capitalize(author.name.toLowerCase());
  const [firstname, lastname] = author.name.trim().split(' ');
  if (firstname && lastname) {
    nameWithInitial = `${firstname.slice(0, 1).toUpperCase()}. ${capitalize(
      lastname.toLowerCase()
    )}`;
  }
  return {
    username: author.username,
    name: author.name,
    nameWithInitial,
    avatarImageUrl: '',
    description: decodeBase64(author.contentBase64)
  };
};
