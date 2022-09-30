import React from 'react';

import {
  BackLink,
  Box,
  LinkProps,
  PostFooter,
  PostHeader,
  PostHeaderProps,
  PostPreviewProps,
  RichText
} from '../../components';
import {
  NewsletterBlock,
  NewsletterBlockProps
} from '../../components/Molecules/NewsletterBlock';
import { RelatedPostList } from '../../components/Molecules/Post/RelatedPostList';
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
  newsletterBlockProps: NewsletterBlockProps;
  relatedPostListTitle: string;
  relatedPosts: ({ slug: string } & PostPreviewProps)[];
  authorLinkProps: PostHeaderProps['authorLinkProps'];
  postFooterTitle: string;
  backLinkLabel: string;
  backLinkProps: Omit<LinkProps, 'children'>;
}

export const PostPage: React.FC<PostPageProps> = ({
  title,
  date,
  readingTime,
  authors,
  authorLinkProps,
  content,
  postFooterTitle,
  newsletterBlockProps,
  relatedPostListTitle,
  relatedPosts,
  backLinkLabel,
  backLinkProps,
  headerProps,
  footerProps
}) => (
  <LayoutTemplate headerProps={headerProps} footerProps={footerProps}>
    <Box as="main" className="container-content">
      <BackLink label={backLinkLabel} {...backLinkProps} />
      <PostHeader
        title={title}
        date={date}
        readingTime={readingTime}
        authors={authors}
        authorLinkProps={authorLinkProps}
      />
      <RichText mt={{ xs: 'l', md: 'xl' }} content={content} />
      <PostFooter
        title={postFooterTitle}
        authors={authors}
        authorLinkProps={authorLinkProps}
      />
      <NewsletterBlock my={{ xs: 'l' }} {...newsletterBlockProps} />
      <RelatedPostList
        mb={{ xs: 'xl', md: 'xxl' }}
        relatedPostListTitle={relatedPostListTitle}
        posts={relatedPosts}
      />
    </Box>
  </LayoutTemplate>
);
