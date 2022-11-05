import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import { RootContainer } from './containers/RootContainer';
import { HtmlTemplate } from './templates/HtmlTemplate';

export const render = (options: {
  url: string;
  lang: string;
}) => {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <HtmlTemplate>
        <StaticRouter location={options.url}>
        <RootContainer lang={options.lang} />
        </StaticRouter>
      </HtmlTemplate>
    </React.StrictMode>
  );
};
