import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import students from "./students";
import campuses from "./campuses";

const reducer = combineReducers({ students: students, campuses: campuses });
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(reducer, middleware);

export default store;
export * from "./students";
export * from "./campuses";
