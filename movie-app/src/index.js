import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
// import {createStore} from 'redux'
import rootReducer from './reducers';
import thunk from 'redux-thunk';

// const logger = function ({dispatch , getState}) {
//   return function(next) {
//     return function (action) {
//       console.log('ACTION_TYPE = ' , action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch , getState}) => (next) => (action) => {
  if(typeof(action) !== 'function'){
    console.log('ACTION_TYPE = ' , action.type);
  }
  return next(action);
}

// const thunk = ({dispatch , getState}) => (next) => (action) => {
//   if(typeof(action) === 'function'){
//     action(dispatch);
//     return;
//   }
//   return next(action);
// }

const store = configureStore({reducer: rootReducer} , applyMiddleware(logger , thunk));
console.log(store);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store = {store} />
  </React.StrictMode>
);

