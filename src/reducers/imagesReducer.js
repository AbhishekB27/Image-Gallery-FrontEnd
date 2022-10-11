const initialState = {
  images: [
    {
      imageUrl:'',
      user:{
        userName:'',
        email:''
      }
    }
  ],
};

const imagesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_IMAGES":
      return {
        ...state,
        images: payload,
      }
      case "UPLOAD_SUCCESS":
        return {
          ...state,
          ...payload,
        };
        case "UPLOAD_FAILURE":
          return {
            ...state,
            ...payload,
          };
      case "UPDATE_SUCCESS":
        return {
          ...state,
          ...payload ,
        };
      // case "UPDATE_FAILURE":
      //   return {
      //     ...payload,
      //   };
      default:
        return state;
  }
};
export default imagesReducer;
