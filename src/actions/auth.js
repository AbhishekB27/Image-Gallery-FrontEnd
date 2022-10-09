import axiosI from "../axiosInstance";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const loginUser = ({email,password})=>async(dispatch)=>{
    try {
        dispatch({
            type:'SET_LOADING',
            payload:{state:true}
        })
        const res = await axiosI.post('/auth/login',{
            email,password
        })

        console.log(res)
                const {status,data,message} = res.data

        if(status === 'Success') {
            toast.success(message,{position:"top-center"})
            localStorage.setItem('token',data.token)
            dispatch({
                type:'LOGIN_SUCCESS',
                payload:{...data}
            })
        }
        else{
            toast.error(message,{position:"top-center"})
            dispatch({
                type:'LOGIN_FAILURE',
                payload:{token:null}
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message,{position:"top-center"})
    }
    finally{
        dispatch({
            type:'SET_LOADING',
            payload:{state:false}
        })
    }
}


const verifyToken = (token)=> async dispatch =>{
    try {
        dispatch({
            type:'SET_LOADING',
            payload:{state:true}
        })
        // console.log("Hello i m verified")
    const res = await axiosI.get(`/auth/verify/${token}`)
    const {status,data,message} = res.data
    if(status === 'Success'){
        dispatch({
            type:'LOAD_USER',
            payload: {...data}
        })
        console.log(res.data)
    }
    else{
        
        toast.info(message,{position:"top-center"})
        localStorage.clear('token')
        console.log(message)
    }
   } catch (error) {
    toast.error(error.message,{position:"top-center"})
    console.log(error.message)
   }
   finally{
    dispatch({
        type:'SET_LOADING',
        payload:{state:false}
    })
}
}

export default verifyToken

export const logOut = ()=> async (dispatch)=>{
    try {
        dispatch({
            type:'SET_LOADING',
            payload:{isLoading:true}
        })
        localStorage.removeItem('token')
        toast.success('Logged Out Successfully',{position:"top-center"})
        dispatch({
            type:'LOG_OUT',
            payload:{token:null,user:{userName:null,email:null}}
        })
    } catch (error) {
        
    }
}
export const signUpUser = ({avtar,userName,firstName,lastName,email,password,confirmPassword})=>async(dispatch)=>{
    try {
        dispatch({
            type:'SET_LOADING',
            payload:{state:true}
        })
        const res = await axiosI.post('/auth/signUp', {
            avtar,userName,firstName,lastName,email,password,confirmPassword
        }) 
        const {status,data,message} = res.data
        console.log(res.data)
        if(status === 'Success'){
            toast.success(message,{position:"top-center"})
            dispatch({
                type:'SIGNUP_SUCCESS',
                payload:{
                    signUp:true
                }
            })
        }
        else{
            toast.error(message,{position:"top-center"})
            dispatch({
                type:'SIGNUP_FAILURE',
                payload:{signUp:false}
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message,{position:"top-center"})
    }
    finally{
        dispatch({
            type:'SET_LOADING',
            payload:{state:false}
        })
    }
}

export const updateUser = (updatedData)=> async(dispatch)=>{
    console.log(updatedData)
    try {
        dispatch({
            type:'SET_LOADING',
            payload:{state:true}
        })
        const res = await axiosI.put('/auth/update', {
            ...updatedData
        })
        const {status,data,message} = res.data
        if(status === 'Success'){
            toast.success(message,{position:"top-center"})
            dispatch({
                type:'UPDATE_SUCCESS',
                payload:{
                    ...data
                }
            })
        }
        else{
            toast.error(message,{position:"top-center"})
            dispatch({
                type:'UPDATE_FAILURE',
                payload:{...updatedData}
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message,{position:"top-center"})
    }
    finally{
        dispatch({
            type:'SET_LOADING',
            payload:{state:false}
        })
    }
}