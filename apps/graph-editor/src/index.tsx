import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import GraphEditorView from './assets/view/graph-editor-view';

const mainElement = document.getElementById('main');
if(mainElement) {
  const root = createRoot(mainElement);
  root.render(
    <StrictMode>
      <GraphEditorView />
    </StrictMode>,
  )
}
else {
  console.error('Could not find main element');
}