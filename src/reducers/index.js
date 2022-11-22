import { combineReducers } from "redux";
import auth from "./authReducer";
import loader from "./loaderReducer"
import images from './imagesReducer'   
import reviews from './reviewReducer'  
import collections from './collectionReducer'    
export default combineReducers({
    loader,
    auth,
    images,
    collections,
    reviews,
})
