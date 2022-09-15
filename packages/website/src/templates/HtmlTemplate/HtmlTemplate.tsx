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
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      {inlineCss && <style dangerouslySetInnerHTML={{ __html: inlineCss }} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Blog Eleven Labs</title>
    </head>
    <body>{children}</body>
  </html>
);
