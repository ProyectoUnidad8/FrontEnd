import React from 'react';
import ReactDOM from 'react-dom/client';

//CSS
import './assets/css/bootstrap.css';
import './assets/css/plugins.css'
import './assets/fonts/font-awesome/css/font-awesome.min.css'
import './assets/fonts/flaticons/flaticon.css'
import './assets/fonts/glyphicons/bootstrap-glyphicons.css'
import './assets/css/style.css';
import './assets/css/plugins.css'
import './assets/styles/maincolors.css';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);