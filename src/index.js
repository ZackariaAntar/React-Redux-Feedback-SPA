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
    return state;
}

const inputStore = (state = [], action)=>{
    if(action.type === 'ADD_REFLECTION'){
        return action.payload
    }
    return state
}

const store = createStore(
	combineReducers({
		reflections,
        inputStore
	}),
	applyMiddleware(logger)
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
