import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { RootContainer } from './containers/RootContainer';
import { DataProvider } from './contexts/data';

const container = document.getElementById('root');

if (container) {
  ReactDOM.hydrateRoot(container, (
    <DataProvider>
      <BrowserRouter>
        <RootContainer />
      </BrowserRouter>
    </DataProvider>
  ));
}
