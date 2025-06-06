import React from 'react';
import ReactDOM from 'react-dom/client';
import { greet } from '@my/utils';

const App = () => <h1>{greet('web-a')}</h1>;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
