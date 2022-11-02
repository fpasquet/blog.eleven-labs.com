import React from 'react';
import ReactDOM from 'react-dom/client';

import { PostPreviewListContainer } from '../../containers/PostPreviewList';
import { HeaderContainer } from '../../containers/Header';

const postPreviewListContainer = document.getElementById('post-preview-list-container');
const headerContainer = document.getElementById('header-container');

if (postPreviewListContainer) {
  const postPreviewListRoot = ReactDOM.createRoot(postPreviewListContainer);
  postPreviewListRoot.render(<PostPreviewListContainer />);
}

if (headerContainer) {
  const headerRoot = ReactDOM.createRoot(headerContainer);
  headerRoot.render(<HeaderContainer />);
}
