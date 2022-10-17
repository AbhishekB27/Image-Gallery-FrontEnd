import { toast } from "react-toastify"

export const showStatus = (state,msg)=>{
    if(state){
        toast.success(msg,{
            position:"bottom-center"
        })
        return state
    }
    else{
        toast.error(msg,{
            position:"bottom-center"
        })
        return state
    }
}