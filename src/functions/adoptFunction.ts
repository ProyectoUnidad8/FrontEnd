import { FormEvent } from "react";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplbHNpbkBnbWFpbCIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaWF0IjoxNjc1NTk0MTAxLCJleHAiOjE2NzU1OTc3MDF9.xupiTcCDyK38r6m89uyr9UF9-KwmaA3HK2Uvx-iVCjU"
const urlAdoption = "http://localhost:9003/api/v1/pet-adoption"
const urlApplication = "http://localhost:9003/api/v1/application"
let headers = {
	"Content-type": "application/json; charset=UTF-8",
	"Authorization": 'Bearer ' + token
};

export const allPetsToAdopt = async (state:any) => {
	const response = await fetch(urlAdoption, { headers: headers })
	const data = await response.json()
	state(data.data)
}

export const sendApplication = async (event:FormEvent) => {
	event.preventDefault();
	try{

		const formData = new FormData(event.target as HTMLFormElement);
		const datos: { [key: string]: any } = {};
		
		// validation
		const name = formData.get("name");
  		const dni = formData.get("dni");
  		const phone = formData.get("phone");
  		const description = formData.get("description");

		if (!name || !dni || !phone || !description) {
			alert("Por favor, rellena todos los campos");
			return;
		}

		for (const [key, value] of formData.entries()) {
			datos[key] = value;
		}

		const id = Number(formData.get("petAdoptId")) // Obtienes el Id de petAdoptIdr que recibe el FormData
		datos["petAdoptId"]= id  // Una vez hecho el forEach conviertes el Id que en un principio era un string a un número
		
		await fetch(urlApplication,{ method: "POST",	headers: headers, body: JSON.stringify(datos) } )
		alert("¡Tu solicitud se envió correctamente, tienes un gran corazón!");
  		window.location.href = "/";

	} catch(error) {
		console.log(error)
	}
}