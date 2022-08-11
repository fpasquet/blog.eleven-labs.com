import fs from 'fs';

import { parseMarkdownByFilePath } from './parseMarkdownByFilePath';

describe('Test method parseMarkdownByFilePath', () => {
  test('return data and html content', async () => {
    const markdownContent = `---
isDraft: false
authors:
  - jdoe
excerpt: Post excerpt
title: Post title
date: '2023-04-08'
slug: post-slug
lang: fr
---
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

> Block quote

* Unordered
* List

1. Ordered
2. List

A paragraph, introducing a thematic break:

---

\`\`\`js
some.code()
\`\`\`

a [link](https://example.com), an ![alt image](/image.png), some *emphasis*,
something **strong**, and finally a little \`code()\`.`;
    jest.spyOn(fs, 'readFileSync').mockReturnValueOnce(markdownContent);

    const htmlContent = `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<blockquote>
<p>Block quote</p>
</blockquote>
<ul>
<li>Unordered</li>
<li>List</li>
</ul>
<ol>
<li>Ordered</li>
<li>List</li>
</ol>
<p>A paragraph, introducing a thematic break:</p>
<hr />
<pre><code class="language-js">some.code()
</code></pre>
<p>a <a href="https://example.com">link</a>, an <img src="/image.png" alt="alt image" />, some <em>emphasis</em>,
something <strong>strong</strong>, and finally a little <code>code()</code>.</p>`;
    const expected = {
      data: {
        authors: ['jdoe'],
        date: '2023-04-08',
        excerpt: 'Post excerpt',
        isDraft: false,
        lang: 'fr',
        slug: 'post-slug',
        title: 'Post title'
      },
      htmlContent: htmlContent
    };
    expect(await parseMarkdownByFilePath('rootPath/filename.md')).toMatchObject(
      expected
    );
  });
});
