import { FormEvent } from "react";
import { urlAdoption, urlApplication } from "../utils/urls";
import { lastToken } from "../utils/LocalStorage";
import Swal from "sweetalert2";

let headers = {
	"Content-type": "application/json; charset=UTF-8",
	"Authorization": `Bearer ${lastToken}`
};

export const allPetsToAdopt = async (state: any) => {
	const response = await fetch(urlAdoption, { headers: headers })
	const data = await response.json()
	state(data.data)
}


export const sendApplication = async (event: FormEvent) => {
	event.preventDefault();
	try {

		const formData = new FormData(event.target as HTMLFormElement);
		const datos: { [key: string]: any } = {};


		if (!formData.get("name") || !formData.get("dni") || !formData.get("phone") || !formData.get("description")) {
			alert("Por favor, rellena todos los campos");
			return;
		}

		for (const [key, value] of formData.entries()) {
			datos[key] = value;
		}

		const id = Number(formData.get("petAdoptId"))
		datos["petAdoptId"] = id

		await fetch(urlApplication, { method: "POST", headers: headers, body: JSON.stringify(datos) })
		Swal.fire({
			icon: 'success',
			title: 'Solicitud enviada',
			text: 'Te enviaremos un mensaje para coordinar',
			showConfirmButton: false,
			timer: 1500,
			willClose: () => {
				window.location.href = "/";
			}
		})
	} catch (error) {
		console.log(error)
	}
}