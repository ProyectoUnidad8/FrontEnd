import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


//js
import './utils/loader.js'
// import './assets/js/jquery.min.js'
import './assets/js/bootstrap.min.js';
import './assets/js/plugins.js'



//CSS
import './assets/css/bootstrap.css';
import './assets/css/plugins.css'
import './assets/fonts/font-awesome/css/font-awesome.min.css'
import './assets/fonts/flaticons/flaticon.css'
import './assets/fonts/glyphicons/bootstrap-glyphicons.css'
import './assets/css/style.css';
import './assets/css/plugins.css'
import './index.css';
import './assets/styles/maincolors.css';



import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
