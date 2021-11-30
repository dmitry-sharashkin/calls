import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import callsReducer from "./calls-reducer";

const reducers = combineReducers({
    calls: callsReducer,
})

const store = createStore(reducers, /* preloadedState, */ compose(
    applyMiddleware(thunkMiddleware)
));
export default store;