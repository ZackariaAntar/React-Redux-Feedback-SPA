import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

const reflections = (state = [], action) => {
    if(action.type === 'GET_REFLECTIONS'){
        return action.payload
    }

    return store
}

const store = createStore(combineReducers(
    {
        reflections
    }
))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
