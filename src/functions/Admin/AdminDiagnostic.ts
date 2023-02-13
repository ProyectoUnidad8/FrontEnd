import { FormEvent } from "react";
import { lastToken } from "../../utils/LocalStorage";
import { urlPetDiagnostic } from "../../utils/urls";
import Swal from "sweetalert2";

let headers = {
	"Content-type": "application/json; charset=UTF-8",
	"Authorization": `Bearer ${lastToken}`
};

export const AdminDiagnosticFunction = async (event:FormEvent) => {
  event.preventDefault();
  try {
    const formData = new FormData(event.target as HTMLFormElement);
		const datos: { [key: string]: any } = {};

    for (const [key, value] of formData.entries()) {
			datos[key] = value;
		}
    const petId = Number(formData.get("petId"));
    datos["petId"] = petId;
    await fetch(urlPetDiagnostic, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(datos)
    })
    Swal.fire({
			title: 'Diagnóstico añadido',
			icon: "success",
			showConfirmButton: true,
		}).then((result) => {
			if (result.isConfirmed) {
				window.location.href = "/admin/diagnosticos"
			} else {
				window.location.href = "/admin/diagnosticos"
			}
		});
  } catch (error) {
    console.log(error)
  }
}