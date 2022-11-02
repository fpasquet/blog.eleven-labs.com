import '@eleven-labs/blog-ui/style.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { RootContainer } from './containers/RootContainer';

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
        <BrowserRouter>
          <RootContainer />
        </BrowserRouter>
    </React.StrictMode>
  );
}
