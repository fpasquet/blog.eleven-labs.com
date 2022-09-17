import React from 'react';

export interface HtmlTemplateProps {
  inlineCss?: string;
  children: React.ReactNode;
}

export const HtmlTemplate: React.FC<HtmlTemplateProps> = ({
  inlineCss,
  children
}) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      {Object.entries({
        'worksans-regular': `/fonts/WorkSans-Regular.woff2`,
        'worksans-medium': `/fonts/WorkSans-Medium.woff2`,
        'worksans-bold': `/fonts/WorkSans-Bold.woff2`
      }).map(([key, url]) => (
        <link key={key} rel="preload" href={url} as="font" type="font/woff2" />
      ))}
      {inlineCss && <style dangerouslySetInnerHTML={{ __html: inlineCss }} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Blog Eleven Labs</title>
    </head>
    <body>{children}</body>
  </html>
);
