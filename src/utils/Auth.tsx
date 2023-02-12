import axios from "axios"
import { Navigate } from "react-router-dom"
import Swal from "sweetalert2"
import { urlUser } from "./urls"
import { removeTokens } from "./LocalStorage"

export const Login = async (data: any) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        willClose: () => {
            window.location.href = "/"
        }
    })

    try {
        const { email, password } = data.formData;
        const res = await axios.post(`${urlUser}/login`, {
            email: email,
            password: password
        })
        if (res.status === 201) {
            localStorage.setItem('token', res.data.token);
            Toast.fire({
                icon: 'success',
                title: `Bienvenido ${res.data.email}`
            });
            return true
        } else {
            Swal.fire({
                title: "Error",
                text: "Verifique los datos ingresados",
                icon: "error",
                confirmButtonText: "Ok"
            })
            return false
        }
    } catch (err) {
        return false
    }

}


export const checkAuthenticated = async () => {
    if (localStorage.getItem('token')) {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
        try {
            const res = await axios.get('http:localhost:8000/api/auth/me', config)
            if (res.status === 200) {
                return true
            } else {
                return false
            }
        } catch (err) {
            return false
        }
    } else {
        return true
    }
}

export const logOut = () => {
    if (localStorage.getItem('token')) {
        removeTokens()
    }
    return (
        <Navigate to="/" replace={true}></Navigate>
    )
}