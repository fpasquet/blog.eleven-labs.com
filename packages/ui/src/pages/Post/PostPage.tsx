import React from 'react';

import { Box, PostFooter, PostHeader, RichText } from '../../components';
import { LayoutTemplate, LayoutTemplateProps } from '../../templates';

export interface PostPageProps extends Omit<LayoutTemplateProps, 'children'> {
  title: string;
  date: string;
  readingTime: string;
  content: string;
  authors: {
    username: string;
    name: string;
    nameWithInitial: string;
    avatarImageUrl?: string;
    description: string;
  }[];
  postFooterTitle: string;
}

export const PostPage: React.FC<PostPageProps> = ({
  title,
  date,
  readingTime,
  authors,
  content,
  postFooterTitle,
  headerProps,
  footerProps
}) => (
  <LayoutTemplate headerProps={headerProps} footerProps={footerProps}>
    <Box as="main" className="container-main">
      <PostHeader
        title={title}
        date={date}
        readingTime={readingTime}
        authors={authors}
      />
      <RichText mt={{ xs: 'l', md: 'xl' }} content={content} />
      <PostFooter title={postFooterTitle} authors={authors} />
    </Box>
  </LayoutTemplate>
);
