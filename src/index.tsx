import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import { PageLoading } from 'components/PageLoading';
import reportWebVitals from './reportWebVitals';
import Providers from './Providers';
import 'rc-notification/assets/index.css';

const listen = () => {
  if (document.readyState === 'complete') {
    ReactDOM.render(
      <Providers>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Providers>,
      document.getElementById('root')
    );
  } else {
    // assert is loading
    ReactDOM.render(
      <React.StrictMode>
        <PageLoading />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
};
document.onreadystatechange = listen;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
