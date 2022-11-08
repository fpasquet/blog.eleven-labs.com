import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { createDispatcher, HoofdProvider } from 'hoofd';

import { RootContainer } from './containers/RootContainer';
import { Author, Post } from './types';
import { DataProvider } from './contexts/data';
import { HtmlTemplate } from './templates/HtmlTemplate';

export const render = (options: {
  url: string;
  lang: string;
  posts: Post[];
  authors: Author[];
}): string => {
  const dispatcher = createDispatcher();

  const markup = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HoofdProvider value={dispatcher}>
        <DataProvider
          posts={options.posts}
          authors={options.authors}
        >
          <StaticRouter location={options.url}>
            <RootContainer lang={options.lang} />
          </StaticRouter>
        </DataProvider>
      </HoofdProvider>
    </React.StrictMode>
  );

  const staticPayload = dispatcher.toStatic();

  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <HtmlTemplate
        staticPayload={staticPayload}
        posts={options.posts}
        authors={options.authors}
        markup={markup}
      />
    </React.StrictMode>
  )
}
