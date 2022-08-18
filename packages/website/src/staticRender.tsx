import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { RootContainer } from './containers/RootContainer';
import urlsData from './data/urls.json';
import { HtmlTemplate } from './templates/HtmlTemplate';

export const data = {
  urlsData
};

export const staticRender = (options: { url: string; lang: string }) => {
  return ReactDOMServer.renderToStaticMarkup(
    <StaticRouter location={options.url}>
      <HtmlTemplate>
        <RootContainer lang={options.lang} />
      </HtmlTemplate>
    </StaticRouter>
  );
};
