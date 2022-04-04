import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/normalize.css';
import { AppProvider } from './components/context';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
