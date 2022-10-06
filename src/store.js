import { applyMiddleware,createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers/index'
import  thunk from 'redux-thunk';

const middleware = [thunk]
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)))
export default store