import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CMSPage } from './CMSPage';
import { AddItemPage } from './AddItemPage';
import { greet } from '@my/utils';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<CMSPage />} />
          <Route path="/add-item" element={<AddItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
