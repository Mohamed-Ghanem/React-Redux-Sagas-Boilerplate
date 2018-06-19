import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import rootSaga from './sagas/index'
import createSagaMiddleware from 'redux-saga'

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger, sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
