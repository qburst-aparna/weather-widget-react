import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import {  BrowserRouter as Router } from "react-router-dom";
import reducer from './reducers';
import App from './app';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

// create a redux store with our reducer above and middleware
let store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(rootSaga);
render(
   <Provider store={store}>
    <Router>
      <App />
     </Router>
   </Provider>,
document.getElementById('root'),
);