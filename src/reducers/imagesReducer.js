const initialState = {
  images: [],
};

const imagesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_IMAGE_LOADED":
      return {
        ...state,
        authLoaded: true,
      };
    case "LOAD_IMAGES":
      return {
        ...state,
        images: payload,
        imageLoaded: true,
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
