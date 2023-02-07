import { urlUser } from "../utils/urls"
import axios from "axios"
export const getAllClients = async() =>{
    const config = {
        headers:{
            "Content-type": "application/json; charset=UTF-8",
	        "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }

    if(localStorage.getItem('token')){
        try{            
            const res = await axios.get(`${urlUser}`, config)
            if (res.status ===200){
                return res.data.data
            }
        }catch(err){
            console.log(err)            
            return []
        }
    }else{                
        return []
    }

}