import { combineReducers } from "redux";
import auth from "./authReducer";
import loader from "./loaderReducer"
export default combineReducers({
    loader,
    auth,
})
