import { combineReducers } from "redux";
import auth from "./authReducer";
import loader from "./loaderReducer"
// import userData  from './userDataReducer'
import images from './imagesReducer'         
export default combineReducers({
    loader,
    auth,
    // userData,
    images
})
