import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { RootContainer } from './containers/RootContainer';

const container = document.getElementById('root');

if (container) {
  ReactDOM.hydrateRoot(container, (
    <>
      <BrowserRouter>
        <RootContainer />
      </BrowserRouter>
    </>
  ));
}
