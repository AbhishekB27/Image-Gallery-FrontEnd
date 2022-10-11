const initialState = {
    reviews:[
        {
            imgId:'',
            user:{
                avtar:'',
                userName:''
            },
            review:''
        }
    ]
}
const reviewReducer = (state = initialState,action)=>{
    const {type,payload} = action
    switch(type){
        case 'LOAD_REVIEWS':
            return {
                reviews:payload
            }
            case 'ADD_REVIEW':
            return {
                reviews:payload
            }
        default:
            return state
    }
}
export default reviewReducer