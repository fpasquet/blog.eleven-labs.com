import React from 'react';

import { Divider } from '../../Atoms';
import { PostPreview, PostPreviewProps } from '../../Molecules/PostPreview';

export interface PostPreviewListProps {
  posts: ({ slug: string } & PostPreviewProps)[];
}

export const PostPreviewList: React.FC<PostPreviewListProps> = ({ posts }) => (
  <>
    {posts.map((post, index) => (
      <React.Fragment key={index}>
        <PostPreview {...post} />
        {posts.length - 1 !== index && <Divider my="m" />}
      </React.Fragment>
    ))}
  </>
);
