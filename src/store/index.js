import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import user from "./students";

const reducer = combineReducers({ students });
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, middleware);

export default store;
export * from "./students";
