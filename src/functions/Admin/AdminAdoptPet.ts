import { FormEvent } from "react";
import { urlAdoption } from "../../utils/urls";
import { lastToken } from "../../utils/LocalStorage";
import Swal from "sweetalert2";

let headers = {
	"Content-type": "application/json; charset=UTF-8",
	"Authorization": `Bearer ${lastToken}`
};


export const getAllPetsToAdotp = async (state: any) => {
	const response = await fetch(urlAdoption, { headers: headers })
	const data = await response.json()
	state(data.data)
}

export const addPetToAdoption = async (event: FormEvent) => {
	event.preventDefault();
	try {

		const formData = new FormData(event.target as HTMLFormElement);
		const datos: { [key: string]: any } = {};


		if (!formData.get("name") || !formData.get("breed") || !formData.get("gender") || !formData.get("category") || !formData.get("description")) {
			alert("Por favor, rellena todos los campos");
			return;
		}

		for (const [key, value] of formData.entries()) {
			datos[key] = value;
		}
		const urlImg = formData.get("url_image")

		if (urlImg === "") {
			datos["url_image"] = "https://goo.su/crhQ"
		}

		datos["age"] = Number(formData.get("age"))
		
		await fetch(urlAdoption, { method: "POST", headers: headers, body: JSON.stringify(datos) })
		Swal.fire({
			title: '¡Añadido!',
			icon: "success",
			text: '¡Tenemos un nuevo amigo que busca un hogar!',
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


export const updatePetToAdoption  = async (event:FormEvent) => { 
	event.preventDefault();
	try{
		const formData = new FormData(event.target as HTMLFormElement);
		const datos: { [key: string]: any } = {};
		for (const [key, value] of formData.entries()) {
			datos[key] = value;
		}
		const urlImg = formData.get("url_image")
		
		if (urlImg === "") {
			datos["url_image"] = "https://goo.su/crhQ"
		}

		const id = Number(formData.get("id"))
		datos["id"] = Number(formData.get("id"))
		datos["age"] = Number(formData.get("age"))
	
		await fetch(`${urlAdoption}/${id}`, { method: "PUT", headers: headers, body: JSON.stringify(datos) })
		Swal.fire({
			title: '¡Datos editados!',
			icon: "success",
			showConfirmButton: true,
		}).then((result) => {
			if (result.isConfirmed) {
				window.location.reload()
			} else {
				window.location.reload()
			}
		});
	} catch(error) {
		console.log(error)
	}
}

export const deletePetAdopt = async (id: Number, name: String) => {
	try {
		console.log(id)
		Swal.fire({
			title: "¿Estás seguro?",
			text: `Eliminarás a ${name} de tu lista de solicitudes`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#d33",
			cancelButtonColor: "#3085d6",
			confirmButtonText: "Eliminar",
			cancelButtonText: "Cancelar",
		}).then(async (result) => {
			if (result.isConfirmed) {
				await fetch(`${urlAdoption}/${id}`, { method: "DELETE", headers: headers })
					.then((response) => {
						if (response.ok) {
							if (response.ok) {
								Swal.fire(
									"¡Eliminado!",
									`Eliminaste a ${name}`,
									"success"
								).then((result) => {
									if (result.isConfirmed) {
										window.location.reload()
									} else {
										window.location.reload()
									}
								});
							} else {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "¡Ocurrió un error!",
								});
							}
						}
					});
			}
		})
	} catch (error) {
		console.log(error)
	}
}