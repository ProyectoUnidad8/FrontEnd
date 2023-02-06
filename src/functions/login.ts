import { FormEvent } from "react";
//import { urlUser } from "../utils/urls";
import { addToken } from "../utils/token";


let headers = {
	"Content-type": "application/json; charset=UTF-8",
};

export const LoginFunction = async (event:FormEvent) => {
	event.preventDefault();
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

		const response = await fetch("http://localhost:9003/api/v1/user/login/",{ method: "POST",	headers: headers, body: JSON.stringify(datos) } )
		const data = await response.json()
		

		if (response.status===201) {	
			addToken(data.token)
			alert("¡Bienvenido!");
			//window.location.href = "/";
		} else{
			alert("Credenciales incorrectas");
		}

		
	} catch(error) {
		console.log(error)
	}
}