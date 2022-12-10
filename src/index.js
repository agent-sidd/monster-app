import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App';
import './App.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const container = document.getElementById('root')
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)