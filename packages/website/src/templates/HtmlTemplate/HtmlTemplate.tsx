import React from 'react';
import { Author, Post } from '../../types';
import { StaticPayload } from 'hoofd/dist/dispatcher';

export interface HtmlTemplateProps {
  posts: Post[];
  authors: Author[];
  staticPayload: StaticPayload;
  markup: string;
}

export const HtmlTemplate: React.FC<HtmlTemplateProps> = ({
  posts,
  authors,
  staticPayload,
  markup
}) => (
  <html lang={staticPayload.lang}>
  <head>
    <meta charSet="UTF-8" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    {Object.entries({
      'worksans-regular': `/fonts/WorkSans-Regular.woff2`,
      'worksans-medium': `/fonts/WorkSans-Medium.woff2`,
      'worksans-bold': `/fonts/WorkSans-Bold.woff2`
    }).map(([key, url]) => (
      <link key={key} rel="preload" href={url} as="font" type="font/woff2" crossOrigin="crossorigin" />
    ))}
    <link href="/style.css" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{staticPayload.title}</title>
  </head>
  <body>
    <div id="root" dangerouslySetInnerHTML={{
      __html: markup
    }} />
    <script dangerouslySetInnerHTML={{
      __html: `window._data = ${JSON.stringify({
        posts: posts,
        authors: authors
      })}`
    }} />
    <script type="module" src="/src/main.tsx"></script>
  </body>
  </html>
);
