import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GenieContextProvider } from './context/genie-context';
import App from './App';

import 'fomantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <GenieContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GenieContextProvider>,
  document.getElementById('root')
);
