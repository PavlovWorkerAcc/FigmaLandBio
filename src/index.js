import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import './style/style.scss';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './firebase';


AOS.init();
window.addEventListener('load', AOS.refresh);




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter  basename = {process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
