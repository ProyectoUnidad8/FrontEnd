import { FormEvent } from "react";
import { lastToken } from "../../utils/LocalStorage";
import { urlPet } from "../../utils/urls";
import Swal from "sweetalert2";

let headers = {
	"Content-type": "application/json; charset=UTF-8",
	"Authorization": `Bearer ${lastToken}`
};

export const AdminPetFunction =async (event:FormEvent) => {
  event.preventDefault();
  try {
    const formData = new FormData(event.target as HTMLFormElement);
		const datos: { [key: string]: any } = {};

    for (const [key, value] of formData.entries()) {
			datos[key] = value;
		}
    const ownerId = Number(formData.get("ownerId"));
    datos["ownerId"] = ownerId;
    await fetch(urlPet, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(datos)
    })
    Swal.fire({
			title: '¡Mascota añadida!',
			icon: "success",
			showConfirmButton: true,
		}).then((result) => {
			if (result.isConfirmed) {
				window.location.href = "/admin/mascota"
			} else {
				window.location.href = "/admin/mascota"
			}
		});
  } catch (error) {
    console.log(error)
  }
}