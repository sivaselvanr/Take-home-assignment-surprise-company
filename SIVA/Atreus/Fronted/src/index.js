import React from 'react';
import ReactDOM from 'react-dom';

//calling Aps.js into index.js
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  //perloading the componunts are used in this webpage
  //NOTE: must need INTERNET connection to preload componunts
  document.getElementById('root')
);