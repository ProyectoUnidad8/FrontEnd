import { FormEvent } from "react";
//import { urlUser } from "../utils/urls";
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
		console.log(data)

		if (response.status===201) {	

			addToken(data['token'])
			
			Toast.fire({
                icon: 'success',
                title: `Bienvenido ${data['usuario']['email']}`
              }); 
			//window.location.href = "/";
		} else{
			Swal.fire({
                title: "Error",
                text:"Verifique los datos ingresados",
                icon:"error",
                confirmButtonText:"Ok"
            })
		}

		
	} catch(error) {		
		console.log({
			"error":"Error de servidor",
			"msg":error
		})
	}
}