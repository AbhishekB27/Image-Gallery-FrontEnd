const initialState = {
    token: null,
    user:{
        avtar:'',
        userName:null,
        email:null,
    },
    authLoaded:false
}

const authReducer = (state = initialState,action)=>{
    const {type,payload} = action
    switch(type){
        case 'SET_AUTH_LOADED':
            return{
                ...state,authLoaded:true
            }
        case 'LOAD_USER':
            return{
                ...state,...payload,authLoaded:true
            }
        case 'LOGIN_SUCCESS':
            return{
                ...state,
                ...payload
            }
        case 'LOGIN_FAILURE':
            return{
                ...payload
            }
        case 'SIGNUP_SUCCESS':
            return{
                ...payload
            }   
        case 'SIGNUP_FAILURE':
            return{
                ...payload
            }
        case 'LOG_OUT':
            return{
                ...state,...payload
            }
            case 'UPDATE_SUCCESS':
            return{
                ...state,user:{...payload}
            }   
        case 'UPDATE_FAILURE':
            return{
                ...state
            }
        default:
            return state
    }
}
export default authReducer