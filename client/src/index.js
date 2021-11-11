import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
   <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);



