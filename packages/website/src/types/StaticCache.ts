import { PostPreviewListProps } from '@eleven-labs/blog-ui';

export interface StaticCache {
  translations: {
    pages: {
      post_list: {
        load_more_button_label: string;
        number_of_posts_displayed_label: string;
      };
    };
  };
  posts: ({ path: string } & Pick<
    PostPreviewListProps['posts'][0],
    'slug' | 'title' | 'excerpt' | 'date' | 'readingTime' | 'authors'
  >)[];
}
