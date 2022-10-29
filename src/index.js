import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

//msw.js integrate browser içinden index js içine yerleştirmemizi islenilen
//koşullu içe aktarma kodları
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
