import './PostPreview.scss';

import classNames from 'classnames';
import React from 'react';

import { Box, BoxProps, Heading, Link, LinkProps, Text } from '../../Atoms';

export interface PostPreviewProps extends BoxProps {
  title: string;
  excerpt: React.ReactNode;
  date: string;
  readingTime: string;
  authors: string[];
  articleLinkProps: LinkProps;
  authorLinkProps: (authorName: string) => LinkProps;
  hasMask?: boolean;
}

export const PostPreview: React.FC<PostPreviewProps> = ({
  title,
  excerpt,
  date,
  readingTime,
  authors,
  articleLinkProps,
  authorLinkProps,
  hasMask,
  ...boxProps
}) => (
  <Box
    as="article"
    className={classNames('post-preview', { 'post-preview--mask': hasMask })}
    {...boxProps}
  >
    <Heading
      color="amaranth"
      size={{ xs: 'xxs-2', md: 'xxs' }}
      mb={{ xs: 'xxs-2', md: 'xxs' }}
    >
      {hasMask ? title : <Link {...articleLinkProps}>{title}</Link>}
    </Heading>
    <Text size={{ xs: 'l', md: 'xl' }}>{excerpt}</Text>
    <Box className="post-preview__metadata" mt={{ xs: 'xs', md: 's' }}>
      <Text as="span" size={{ xs: 's', md: 'm' }}>
        {date}
      </Text>
      <Text as="span" size={{ xs: 's', md: 'm' }}>
        {readingTime}
      </Text>
      <Text as="span" size={{ xs: 's', md: 'm' }}>
        {authors.map((author) => (
          <Link {...authorLinkProps(author)}>{author}</Link>
        ))}
      </Text>
    </Box>
  </Box>
);
