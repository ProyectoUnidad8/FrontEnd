import { FC } from 'react';
import { updatePetToAdoption, deletePetAdopt } from '../../functions/Admin/AdminAdoptPet';

interface ModalProps {
	isOpen: boolean;
	closeModal: () => void;
	data: any,
}

const AdminModalAdoptionUPDEL: FC<ModalProps> = ({ data ,isOpen, closeModal }) => {
	if (!isOpen) {
		return null;
	}
	
	return (
		<div>
			<div className="modal2-overlay" />
			<div className="modal2-content" >
				<form action="" method='put' onSubmit={updatePetToAdoption}>
					<div style={{ textAlign: "left" }}>
						<h1 style={{ fontSize: "50px", textAlign: "center" }}>Datos de {data.name}</h1>
					
					<input
						name="id"
						type="number"
						required={true}
						value={data.id}
						className="form-control input-field"
					/>
					Nombre:
					<input
						name="name"
						type="text"
						required={true}
						className="form-control input-field"
						placeholder='Ingresa el nuevo nombre de la mascota' />
					Raza:
					<input
						name="breed"
						value={data.breed}
						disabled={true}
						type="text"
						required={true}
						className="form-control input-field"
						placeholder='Ingresa raza de la mascota' />
					Edad:
					<input
						name="age"
						type="number"
						required={false}
						className="form-control input-field"
						placeholder='Ingresa la nueva edad de la mascota' />
					Género
					<input
						name="gender"
						value={data.gender}
						disabled={true}
						type="text"
						required={true}
						className="form-control input-field"
						placeholder='Ingresa género de la mascota' />

					Categoría
					<input
						name="category"
						value={data.category}
						disabled={true}
						type="text"
						required={true}
						className="form-control input-field"
						placeholder='Perro/Gato/Tortuga' />

					Descripción
					<input
						name="description"
						type="text"
						required={true}
						className="form-control input-field"
						placeholder='Añade una nueva descripción de la mascota' />

					Url Imagen
					<input
						name="url_image"
						type="url"
						required={false}
						className="form-control input-field"
						placeholder='Ingresa el nuevo Url de la imagen de referencia' />
					</div>

					<div style={{ display: "grid" }}>
						<button type='submit' className="btn">Actualizar</button>
					</div>
				</form>
				<button className="btn" onClick={() => deletePetAdopt(data.id, data.name)}>Eliminar</button>
				<button className="btn" onClick={closeModal}>Cerrar</button>
		</div>
	</div>

	);
};

export default AdminModalAdoptionUPDEL;