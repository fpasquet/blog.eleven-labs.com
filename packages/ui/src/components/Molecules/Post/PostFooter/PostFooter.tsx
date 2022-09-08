import './PostFooter.scss';

import React from 'react';

import { Box, Divider, Flex, Link, Text } from '../../../Atoms';

export interface PostFooterProps {
  title: string;
  authors: {
    username: string;
    name: string;
    avatarImageUrl?: string;
    description: string;
  }[];
}

export const PostFooter: React.FC<PostFooterProps> = ({ title, authors }) => (
  <Box className="post-footer" color="grey-dark" mt={{ xs: 'm' }}>
    <Divider mb={{ xs: 'm' }} />
    <Text size={{ xs: 'xxs' }} mb={{ xs: 'xxs' }} textTransform="uppercase">
      {title}
    </Text>

    <Flex direction={{ xs: 'column', md: 'row' }} gapY={{ md: 'xxl' }}>
      {authors.map((author) => (
        <Flex
          key={author.username}
          mb={{ xs: 's' }}
          className="post-footer__author"
        >
          {author.avatarImageUrl && (
            <img
              src={author.avatarImageUrl}
              alt={author.name}
              className="post-footer__avatar_img"
            />
          )}
          <Box ml={{ xs: 'xxs' }}>
            <Link size={{ xs: 's' }}>{author.name}</Link>
            <Text
              size={{ xs: 'xxs', md: 'xs' }}
              dangerouslySetInnerHTML={{ __html: author.description }}
            />
          </Box>
        </Flex>
      ))}
    </Flex>
  </Box>
);
