import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CMSPage } from './CMSPage';
import { greet } from '@my/utils'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="p-4">
      <h1>{greet('web-a')}</h1>
      <CMSPage />
    </div>
  </React.StrictMode>
);
