import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

const store = createStore(reducers,{},
    compose(
    applyMiddleware(reduxThunk,logger), 
    window.devToolsExtension ? window.devToolsExtension() : f => f)
);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
