import { urlApplication, urlAdoption } from "../../utils/urls";
import { lastToken } from "../../utils/LocalStorage";
import Swal from "sweetalert2";

let headers = {
	"Content-type": "application/json; charset=UTF-8",
	"Authorization": `Bearer ${lastToken}`
};


export const getAllApplications = async (state: any,) => {
	const response = await fetch(urlApplication, { headers: headers })
	const data = await response.json()
	state(data.data)
}

export const approveApplication = async (id: Number, name: String, petId: Number) => {
	try {
		const dataApp = { status: true }
		const dataPet = { isAdopted: true }

		Swal.fire({
			title: '¿Apruebas esta solicitud?',
			text: `Confirma si ${name} es una persona de confianza`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Confirmar',
			cancelButtonText: 'Cancelar'
		}).then(async (result) => {
			if (result.isConfirmed) {
				await fetch(`${urlApplication}/${id}`, { method: "PUT", headers: headers, body: JSON.stringify(dataApp) })
				await fetch(`${urlAdoption}/${petId}`, { method: "PUT", headers: headers, body: JSON.stringify(dataPet) })
				Swal.fire(
					'¡Excelente!',
					`Esperemos que ${name} sea una persona responsable`,
					'success'
				).then((result) => {
					if (result.isConfirmed) {
						window.location.reload()
					} else {
						window.location.reload()
					}
				});
			}
		})

	} catch (error) {
		console.log(error)
	}
}

export const deleteApplication = async (id: Number, name: String) => {
	try {
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
				await fetch(`${urlApplication}/${id}`, { method: "DELETE", headers: headers })
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