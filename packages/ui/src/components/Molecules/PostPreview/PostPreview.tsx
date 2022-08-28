import './PostPreview.scss';

import classNames from 'classnames';
import React from 'react';

import { Box, BoxProps, Link, LinkProps, Text } from '../../Atoms';

export interface PostPreviewProps extends BoxProps {
  title: string;
  excerpt: React.ReactNode;
  date: string;
  readingTime: string;
  authors: {
    username: string;
    nameWithInitial: string;
  }[];
  articleLinkProps: Omit<LinkProps, 'children'>;
  hasMask?: boolean;
}

export const PostPreview: React.FC<PostPreviewProps> = ({
  title,
  excerpt,
  date,
  readingTime,
  authors,
  articleLinkProps,
  hasMask,
  ...boxProps
}) => (
  <Box
    as="article"
    className={classNames('post-preview', { 'post-preview--mask': hasMask })}
    {...boxProps}
  >
    <Text
      color="amaranth"
      size={{ xs: 'xs', md: 's' }}
      mb={{ xs: 'xxs-3', md: 'xxs' }}
    >
      {hasMask ? title : <Link {...articleLinkProps}>{title}</Link>}
    </Text>
    <Text size={{ xs: 'xxs', md: 'xs' }}>{excerpt}</Text>
    <Box
      className="post-preview__metadata"
      mt={{ xs: 'xs', md: 's' }}
      size={{ xs: 'xxs-3', md: 'xxs-2' }}
    >
      <Text as="span">{date}</Text>
      <Text as="span">{readingTime}</Text>
      {authors.map((author) => (
        <Text key={author.username} as="span">
          {author.nameWithInitial}
        </Text>
      ))}
    </Box>
  </Box>
);
