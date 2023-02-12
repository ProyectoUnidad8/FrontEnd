import { FormEvent } from "react";
import { urlUser } from "../utils/urls";
import { lastToken, userId } from "../utils/LocalStorage";
import Swal from "sweetalert2";

let headers = {
	"Content-type": "application/json; charset=UTF-8",
	"Authorization": `Bearer ${lastToken}`
};

export const getUser = async (state: any) => {
	const response = await fetch(`${urlUser}/${userId}`, { headers: headers })
	const data = await response.json()
	state([data.data])
}

export const changePasswordFunction = async (event: FormEvent) => {
	event.preventDefault();
	try {
		const formData = new FormData(event.target as HTMLFormElement);
		const datos: { [key: string]: any } = {};
		for (const [key, value] of formData.entries()) {
			datos[key] = value;
		}
		const response = await fetch(`${urlUser}/login/`, { method: "POST", headers: headers, body: JSON.stringify(datos) })
		
		if (response.status === 201) {
			const newPassword = formData.get("newpassword")
			datos["password"] = newPassword
			await fetch(`${urlUser}/${userId}/`, { method: "PUT", headers: headers, body: JSON.stringify(datos) })
			Swal.fire({
				title: '¡Contraseña actualizada correctamente!',
				icon: "success",
				showConfirmButton: true,
			}).then((result) => {
				if (result.isConfirmed) {
					window.location.reload()
				} else {
					window.location.reload()
				}
			});
		}
		else {
			Swal.fire({
				title: "Error",
				text: "Los datos no coinciden",
				icon: "error",
				confirmButtonText: "Ok"
			})
		}
	} catch (error) {
		console.log(error)
	}
}