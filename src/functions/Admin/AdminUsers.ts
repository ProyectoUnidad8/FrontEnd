import { FormEvent } from "react";
import { urlUser } from "../../utils/urls";
import { lastToken } from "../../utils/LocalStorage";
import Swal from "sweetalert2";

let headers = {
	"Content-type": "application/json; charset=UTF-8",
	"Authorization": `Bearer ${lastToken}`
};

export const addUsersFunction = async (event: FormEvent) => {
	event.preventDefault();
	try {

		const formData = new FormData(event.target as HTMLFormElement);
		const datos: { [key: string]: any } = {};


		if (!formData.get("email") || !formData.get("password") || !formData.get("role") ) {
			alert("Por favor, rellena todos los campos");
			return;
		}

		for (const [key, value] of formData.entries()) {
			datos[key] = value;
		}
		await fetch(`${urlUser}/signup`, { method: "POST", headers: headers, body: JSON.stringify(datos) })
		Swal.fire({
			title: '¡Usuario creado!',
			icon: "success",
			showConfirmButton: true,
		}).then((result) => {
			if (result.isConfirmed) {
				window.location.reload()
			} else {
				window.location.reload()
			}
		});

	} catch (error) {
		console.log(error)
	}
}
