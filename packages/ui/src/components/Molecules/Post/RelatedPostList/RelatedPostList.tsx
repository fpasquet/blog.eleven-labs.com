import React from 'react';

import { Box, Text } from '../../../Atoms';
import { PostPreview, PostPreviewProps } from '../../PostPreview';

export interface RelatedPostListProps {
  relatedPostListTitle: string;
  posts: ({ slug: string } & PostPreviewProps)[];
}

export const RelatedPostList: React.FC<RelatedPostListProps> = ({
  relatedPostListTitle,
  posts
}) => (
  <Box bg="grey-ultra-light" p={{ xs: 'm' }}>
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
