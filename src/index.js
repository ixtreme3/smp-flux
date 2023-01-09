import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import counterReducer from "./counterStore";
import { Provider, createStore, combineReducers } from "./MyFlux/flux";

const rootReducer = combineReducers({
    counter: counterReducer
});

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>

    // <App />
);
