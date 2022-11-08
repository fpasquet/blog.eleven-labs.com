import fs from 'node:fs';

import {
  markdownAuthorCleaning,
  markdownContentCleaning,
  markdownPostCleaning
} from './markdownCleaning';

/*describe('Test method markdownContentCleaning', () => {
  test('remove raw and endraw tags', () => {
    const content = '{% raw %}content{% endraw %}';
    const expected = `content`;
    expect(markdownContentCleaning(content)).toEqual(expected);
  });

  test('cleaning of article urls', () => {
    const content =
      '![alt image]({{ site.baseurl }}/assets/YYYY-MM-DD-post-slug/image-name.png)';
    const expected = `![alt image](/imgs/posts/YYYY-MM-DD-post-slug/image-name.png)`;
    expect(markdownContentCleaning(content)).toEqual(expected);
  });

  test('cleaning of other urls', () => {
    const content = '[alt image]({{ site.baseurl }}/lang/post-slug/)';
    const expected = `[alt image](/lang/post-slug/)`;
    expect(markdownContentCleaning(content)).toEqual(expected);
  });
});*/

describe('Test method markdownAuthorCleaning', () => {
  test('cleaning of author markdown content', async () => {
    const markdownContent = `---
  layout: author
  login: jdoe
  title: John Doe
  permalink: /authors/jdoe/
---
description`;
    const expected = `---
username: jdoe
name: John Doe
---
description
`;
    jest.spyOn(fs, 'readFileSync').mockReturnValueOnce(markdownContent);
    expect(
      await markdownAuthorCleaning('rootPath/2022-16-08-author-username.md')
    ).toEqual(expected);
  });
});

/*
describe('Test method markdownPostCleaning', () => {
  test('cleaning of post markdown content', async () => {
    const markdownContent = `---
layout: post
title: Post title
excerpt: Post excerpt
lang: fr
permalink: /fr/post-slug/
authors:
  - jdoe
categories:
  - javascript
---
content`;
    const expected = `---
categories:
  - javascript
authors:
  - jdoe
excerpt: Post excerpt
title: Post title
date: '2023-04-08'
slug: post-slug
lang: fr
isDraft: false
---
content
`;
    jest.spyOn(fs, 'readFileSync').mockReturnValueOnce(markdownContent);
    expect(
      await markdownPostCleaning('rootPath/fr/2022-16-08-post-slug.md')
    ).toEqual(expected);
  });
});
*/
