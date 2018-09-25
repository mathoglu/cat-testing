import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import catsReducer from './reducers/cats';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

console.log(catsReducer);

const store = createStore(combineReducers({
        cats: catsReducer
    }),
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();
