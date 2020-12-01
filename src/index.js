import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/stylesheets/index.scss"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose}from 'redux';
import {logger} from 'redux-logger';
import reduxPromise from 'redux-promise';

import booksReducer from './reducers/books_reducer';

const reducers = combineReducers({
  books: booksReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

ReactDOM.render(
  <Provider store = {createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
