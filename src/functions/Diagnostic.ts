import axios from "axios"
import { urlPetDiagnostic } from "../utils/urls"
 

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
            return []
        }
    }else{
        return []
    }
    
}
