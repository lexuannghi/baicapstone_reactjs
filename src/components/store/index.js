import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
