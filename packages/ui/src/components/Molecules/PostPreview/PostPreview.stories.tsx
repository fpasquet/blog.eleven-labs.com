import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import PreviewPostsFixture from '../../../fixtures/preview-posts.json';
import { PostPreview } from './PostPreview';

const PreviewPostFixture = PreviewPostsFixture[0];

export default {
  title: 'Components/Molecules/PostPreview',
  component: PostPreview,
  args: {
    title: PreviewPostFixture.title,
    excerpt: PreviewPostFixture.excerpt,
    date: PreviewPostFixture.date,
    readingTime: PreviewPostFixture.readingTime,
    authors: PreviewPostFixture.authors,
    articleLinkProps: {}
  },
  parameters: {
    viewport: {
      defaultViewport: 'extraSmallScreen'
    }
  }
} as ComponentMeta<typeof PostPreview>;

const Template: ComponentStory<typeof PostPreview> = (args) => (
  <PostPreview {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};

export const PostPreviewHasMask = Template.bind({});
PostPreviewHasMask.args = {
  hasMask: true
};

export const PostPreviewIsRelated = Template.bind({});
PostPreviewIsRelated.parameters = {
  backgrounds: {
    default: 'grey-ultra-light'
  }
};
PostPreviewIsRelated.args = {
  isRelated: true
};
