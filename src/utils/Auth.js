import axios from "axios"
import { Navigate } from "react-router-dom"
import Swal from "sweetalert2"

const urlLogin = "https://proyectou8-production.up.railway.app/api/v1/user/login"



export const Login = async (data) =>{            
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
        willClose:()=>{            
            window.location.href="/"
        }
      })

    try{        
        const {email, password} = data.formData;        
        const res = await axios.post(urlLogin,{
            email: email,
            password: password
        })
        if(res.status === 201){            
            console.log(res.data)
            localStorage.setItem('token',res.data.token);
            Toast.fire({
                icon: 'success',
                title: `Bienvenido ${res.data.email}`
              });            
            return true
        }else{            
            console.log(res.data)
            Swal.fire({
                title: "Error",
                text:"Verifique los datos ingresados",
                icon:"error",
                confirmButtonText:"Ok"
            })
            return false
        }
    }catch(err){
        return false
    }
 
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
        console.log('Se ha borrado el token')
        localStorage.removeItem('token')
    }
    console.log('siuuu')
    return (
        <Navigate to="/" replace={true}></Navigate>
    )
}