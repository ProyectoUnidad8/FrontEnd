import axios from "axios"
import { urlPetDiagnostic } from "../utils/urls"
 

export const getPetDiagnostic = async (petId:Number) => { 
    const config = {
        headers:{
            "Content-type": "application/json; charset=UTF-8",
	        "Authorization": `Bearer  ${localStorage.getItem('token')}`
        }
    }

    if(localStorage.getItem('token')){
        try{
            const res = await axios.get(`${urlPetDiagnostic}/${petId}`,config)
            if (res.status === 200){
                console.log("Devolvio algo")
                return res.data
            }
        }catch(err){
            console.log("ha ocurrido un error")
            return []
        }
    }else{
        return []
    }
    
}