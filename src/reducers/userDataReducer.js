const initialState = {
    images: [],
    user: {
      userName: null,
      email: null,
    },
    review: [],
  };
  
  const usersDataReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "SET_IMAGE_LOADED":
        return {
          ...state,
        };
      case "LOAD_IMAGES":
        return {
          ...state,
          ...payload,
        };
        case "USER_IMAGES":
          return {
            ...state,
            ...payload,
          };
        case "USER_FAILURE":
        return {
          ...state,
          ...payload,
        };
      
    }
  };
  export default usersDataReducer;
  