import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {configureStore} from '@reduxjs/toolkit';
// import {createStore} from 'redux'
import rootReducer from './reducers';

const store = configureStore({reducer: rootReducer})
console.log(store);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store = {store} />
  </React.StrictMode>
);

