import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from "./reducers"

export default () => {
    return createStore(
        reducer,
        applyMiddleware(thunkMiddleware) // 允许store能dispatch函数
    );
}
