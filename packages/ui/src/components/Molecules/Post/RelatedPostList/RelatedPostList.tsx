import './RelatedPostList.scss';

import React from 'react';

import { Box, BoxProps, Text } from '../../../Atoms';
import { PostPreview, PostPreviewProps } from '../../PostPreview';

export interface RelatedPostListProps extends BoxProps {
  relatedPostListTitle: string;
  posts: ({ slug: string } & PostPreviewProps)[];
}

export const RelatedPostList: React.FC<RelatedPostListProps> = ({
  relatedPostListTitle,
  posts,
  ...boxProps
}) => (
  <Box {...boxProps} p={{ xs: 'm' }} className="related-post-list">
    <Text mb="m" size={{ xs: 'm', md: 'l' }} weight="medium">
      {relatedPostListTitle}
    </Text>
    {posts.map((post, index) => (
      <PostPreview
        key={post.slug}
        isRelated={true}
        {...post}
        mt={{ xs: 's' }}
      />
    ))}
  </Box>
);
