const initialState = {
   collection:[
    {
      cName:'',
      cDescription:'',
      imageUrls:''
    }
   ]
}

const collectionReducer = (state= initialState,action)=>{
    const {type,payload} = action
    switch(type){
        case "LOAD_COLLECTIONS":
      return {
         collection:payload,
      }
      case "ADD_COLLECTIONS":
        // console.log(state.collection)
      return {
        collection:[...state.collection,payload]
    }
    case "UPDATE_COLLECTIONS":
        // console.log(state.collection)
      return {
        collection:payload
    }
      default:
        return state
      
    }
}

export default collectionReducer