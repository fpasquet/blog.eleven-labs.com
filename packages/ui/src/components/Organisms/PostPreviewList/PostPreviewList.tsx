import React from 'react';

import {
  Box,
  Button,
  ButtonProps,
  Divider,
  Flex,
  Heading,
  ProgressBar,
  Text
} from '../../Atoms';
import { PostPreview, PostPreviewProps } from '../../Molecules/PostPreview';

export interface PostPreviewListProps {
  title: string;
  posts: ({ slug: string } & PostPreviewProps)[];
  textNumberOfItems?: string;
  percentageOfItemDisplayed?: number;
  buttonProps?: ButtonProps;
}

export const PostPreviewList: React.FC<PostPreviewListProps> = ({
  title,
  posts,
  textNumberOfItems,
  percentageOfItemDisplayed,
  buttonProps
}) => {
  const hasPagination =
    textNumberOfItems && percentageOfItemDisplayed && buttonProps;
  return (
    <Box px="m" pb="xl">
      <Heading size="m" my="l" as="p">
        {title}
      </Heading>
      {posts.map((post, index) => (
        <React.Fragment key={index}>
          <PostPreview
            hasMask={Boolean(hasPagination && index === posts.length - 1)}
            {...post}
          />
          {posts.length - 1 !== index && <Divider my="m" />}
        </React.Fragment>
      ))}
      {hasPagination && (
        <>
          <Divider variant="secondary" my="m" />
          <Flex direction="column" justifyContent="center" alignItems="center">
            <Text size={{ xs: 'l', md: 'xxl' }}>{textNumberOfItems}</Text>
            <ProgressBar value={percentageOfItemDisplayed} mt="xxs" />
            <Button mt="s" {...buttonProps} />
          </Flex>
        </>
      )}
    </Box>
  );
};
