import usersData from "./reducers/users";
import {applyMiddleware, combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import thunk from "redux-thunk";

const reducers = combineReducers({
    usersData,
    form: formReducer
})
    // window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers,applyMiddleware(thunk));

export default store;