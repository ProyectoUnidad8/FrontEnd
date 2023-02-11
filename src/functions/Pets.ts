import axios from "axios"
import { urlPet } from "../utils/urls"
import { clearLocalStorage } from "../utils/ClearLocalStorage"

export const getUserPets = async (userId: Number) => {
    const config = {
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }
    if (localStorage.getItem('token')) {
        try {
            console.log(`${urlPet}/user-pet/${userId}`)
            const res = await axios.get(`${urlPet}/user-pet/${userId}`, config)
            if (res.status === 200) {
                return res.data.message
            }
        } catch (err) {
            clearLocalStorage()
            return []
        }
    } else {
        clearLocalStorage()
    }
}

export const getAllPets = async () => {
    const config = {
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    }

    if (localStorage.getItem('token')) {
        try {
            const res = await axios.get(`${urlPet}`, config)
            if (res.status === 200) {
                return res.data.data
            }
        } catch (err) {
            clearLocalStorage()
            return []
        }
    } else {
        clearLocalStorage()
    }

}

export const deletePet = async (petId: Number) => {


    if (localStorage.getItem('token')) {
        const config = {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        }
        try {
            const res = await axios.delete(`${urlPet}/${petId}`, config)
            if (res.status === 200) {
                return res.data.data
            }
        } catch (err) {
            console.log(err)
            // clearLocalStorage()  
            return []
        }
    } else {

        // clearLocalStorage()           
        return []
    }
}