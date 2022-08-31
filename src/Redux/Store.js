import rootReducer from "./Reducer";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

export default function generateStore(){
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    )
    return store;
}