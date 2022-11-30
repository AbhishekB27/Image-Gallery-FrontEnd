const initialState = {
  images: [
    {
      imageUrl:'',
      imageName:'',
      category:'',
      created:'',
      user:{
        name:'',
        url:''
      },
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
      case "UPLOAD_IMAGES":
        return {
        images:[ ...state.images,...payload],
        };
        case "UPLOAD_FAILURE":
          return {
            images:[state.images,...payload]
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
