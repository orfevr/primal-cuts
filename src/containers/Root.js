import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers/rootReducer'
import App from '../App'

const loggerMiddleware = store => next => action => {
    console.log('dispatching ', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

let store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

class Root extends Component {
    render() {
        return (
        <Provider store={store}>
            <App />
        </Provider>);
    }
}

export default Root;