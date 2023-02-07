import { urlUser } from "../utils/urls"
import axios from "axios"
import { clearLocalStorage } from "./clearLocalStorage"



export const getAllClients = async() =>{
    
    if(localStorage.getItem('token')){
        const config = {
            headers:{
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }
        try{            
            const res = await axios.get(`${urlUser}`, config)
            if (res.status ===200){
                return res.data.data
            }
        }catch(err){
            clearLocalStorage()  
            return []
        }
    }else{     
        clearLocalStorage()           
        return []
    }

}

export const createClient = async() =>{    
    if(localStorage.getItem('token')){
        const config = {
            headers:{
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify
        }
        try{            
            const res = await axios.post(`${urlUser}`, config)
            if (res.status ===200){
                return res.data.data
            }
        }catch(err){
            clearLocalStorage()  
            return []
        }
    }else{     
        clearLocalStorage()           
        return []
    }
}


export const deleteClient = async(clientId:Number) =>{
    const config = {
        headers:{
            "Content-type": "application/json; charset=UTF-8",
	        "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }

    if(localStorage.getItem('token')){
        try{            
            const res = await axios.delete(`${urlUser}/${clientId}`, config)
            if (res.status ===200){                
                return res.data.data
            }
            
        }catch(err){
            console.log(err)
            // clearLocalStorage()  
            return []
        }
    }else{     
        
        // clearLocalStorage()           
        return []
    }
}