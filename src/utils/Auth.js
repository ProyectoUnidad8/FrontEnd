import axios from "axios"
import { Navigate } from "react-router-dom"

export const Login = async () =>{
 
}


export const checkAuthenticated = async () =>{
    if(localStorage.getItem('token')){
        const config={
            headers:{
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
        try{            
            const res = await axios.get('http:localhost:8000/api/auth/me',config)            
            if (res.status === 200){
                return true
            }else{
                return false
            } 
        }catch(err){
            return false
        }
    }else{                
        return true
    }
}

export const logOut = () =>{
    if(localStorage.getItem('token')){
        localStorage.removeItem('token')
    }
    return (
        <Navigate to="/" replace={true}></Navigate>
    )
}