//Store
import thunk from "redux-thunk";
import {rootReducer} from "./rootReducer";
import {applyMiddleware, compose, createStore} from "redux";

export let store;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
	store = createStore(rootReducer,compose(
			applyMiddleware(thunk),
			window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
	))
} else {
	store = createStore(rootReducer,compose(
			applyMiddleware(thunk)
	))
}




