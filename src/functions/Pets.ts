import axios from "axios"
import { urlPet } from "../utils/urls"

export const getUserPets = async (userId:Number) =>{
    console.log(userId)
    const config = {
        headers:{
            "Content-type": "application/json; charset=UTF-8",
	        "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }
    if(localStorage.getItem('token')){
        try{
            console.log(`${urlPet}/user-pet/${userId}`)
            const res = await axios.get(`${urlPet}/user-pet/${userId}`, config)
            if (res.status ===200){
                return res.data.message
            }
        }catch(err){
            console.log(err)
            console.log("ha ocurrido un error en el server Pet")
            return []
        }
    }
}