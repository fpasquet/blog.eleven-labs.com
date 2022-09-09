import React from 'react';
import ReactDOM from 'react-dom/client';

import { PostPreviewListContainer } from '../../containers/PostPreviewList';

const container = document.getElementById('post-preview-list-container');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<PostPreviewListContainer />);
}
