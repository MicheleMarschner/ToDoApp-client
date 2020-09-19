import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

if (process.env.REACT_APP_NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React, {
    trackAllPureComponents: true,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
