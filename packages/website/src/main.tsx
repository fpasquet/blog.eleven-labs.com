import '@eleven-labs/blog-ui/style.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { RootContainer } from './containers/RootContainer';

const container = document.getElementById('root');

if (container) {
  ReactDOM.hydrateRoot(
    container,
    <React.StrictMode>
      <BrowserRouter>
        <RootContainer />
      </BrowserRouter>
    </React.StrictMode>
  );
}
