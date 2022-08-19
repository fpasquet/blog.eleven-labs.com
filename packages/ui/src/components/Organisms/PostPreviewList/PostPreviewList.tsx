import React from 'react';

import { Box, Button, Divider, Flex, ProgressBar, Text } from '../../Atoms';
import { PostPreview, PostPreviewProps } from '../../Molecules/PostPreview';

export interface PostPreviewListProps {
  posts: ({ slug: string } & PostPreviewProps)[];
  textNumberOfItems?: string;
  percentageOfItemDisplayed?: number;
  loadMoreButtonLabel?: string;
}

export const PostPreviewList: React.FC<PostPreviewListProps> = ({
  posts,
  textNumberOfItems,
  percentageOfItemDisplayed,
  loadMoreButtonLabel
}) => {
  const hasPagination =
    textNumberOfItems && percentageOfItemDisplayed && loadMoreButtonLabel;
  return (
    <>
      {posts.map((post, index) => (
        <React.Fragment key={post.slug}>
          <PostPreview
            hasMask={Boolean(hasPagination && index === posts.length - 1)}
            {...post}
          />
          {posts.length - 1 !== index && <Divider my="m" />}
        </React.Fragment>
      ))}
      {hasPagination && (
        <>
          <Box px={{ md: 'xl' }}>
            <Divider variant="secondary" my="m" />
          </Box>
          <Flex direction="column" justifyContent="center" alignItems="center">
            <Text size={{ xs: 'l', md: 'xxl' }}>{textNumberOfItems}</Text>
            <ProgressBar value={percentageOfItemDisplayed} mt="xxs" />
            <Button my="s">{loadMoreButtonLabel}</Button>
          </Flex>
        </>
      )}
    </>
  );
};
