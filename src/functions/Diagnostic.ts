import axios from "axios"
import { urlPetDiagnostic } from "../utils/urls"
import { clearLocalStorage } from "../utils/ClearLocalStorage"
 

export const getPetDiagnostic = async (petId:Number) => { 
    const config = {
        headers:{
            "Content-type": "application/json; charset=UTF-8",
	        "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }

    if(localStorage.getItem('token')){
        try{
            const res = await axios.get(`${urlPetDiagnostic}/by_pet/${petId}`,config)
            if (res.status === 200){                                  
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


export const getAllDiagnostic = async() =>{
    const config = {
        headers:{
            "Content-type": "application/json; charset=UTF-8",
	        "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }

    if(localStorage.getItem('token')){
        try{            
            const res = await axios.get(`${urlPetDiagnostic}`, config)
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

export const deleteDiagnostic = async(diagnosticId:Number) =>{
    const config = {
        headers:{
            "Content-type": "application/json; charset=UTF-8",
	        "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }

    if(localStorage.getItem('token')){
        try{            
            const res = await axios.delete(`${urlPetDiagnostic}/${diagnosticId}`, config)
            if (res.status ===200){
                console.log('uh?')
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