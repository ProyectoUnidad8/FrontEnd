import { FormEvent } from "react";
//import { urlUser } from "../utils/urls";
import { clearLocalStorage } from "./clearLocalStorage";
import { addToken } from "../utils/token";
import { urlUser } from "../utils/urls";
import Swal from "sweetalert2";


let headers = {
	"Content-type": "application/json; charset=UTF-8",
};

export const LoginFunction = async (event:FormEvent) => {
	event.preventDefault();
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

		const formData = new FormData(event.target as HTMLFormElement);
		const datos: { [key: string]: any } = {};
		
		// validation
		const email = formData.get("email");
  		const password = formData.get("password");

		if (!email || !password) { alert("Por favor, rellena todos los campos");return;	}


		for (const [key, value] of formData.entries()) {
			datos[key] = value;
		}

		const response = await fetch(`${urlUser}/login/`,{ method: "POST",	headers: headers, body: JSON.stringify(datos) })
		const data = await response.json()		

		if (response.status===201) {				
			addToken(data['token'])
			localStorage.setItem('user_id', data['id'])
			localStorage.setItem('role', data['role'])			
			Toast.fire({
                icon: 'success',
                title: `Bienvenido ${data['email']}`
              });			
		} else{
			Swal.fire({
                title: "Error",
                text:"Verifique los datos ingresados",
                icon:"error",
                confirmButtonText:"Ok"
            })
		}

		
	} catch(error) {		
		clearLocalStorage()
	}
}