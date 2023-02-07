import { FC } from 'react';
import { addPetToAdoption } from '../../functions/Admin/AdminAdoptPet';

interface ModalProps {
	isOpen: boolean;
	closeModal: () => void;

}

const AdminModalAdoption: FC<ModalProps> = ({ isOpen, closeModal }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div>
			<div className="modal-overlay" />
			<div className="modal-content" >
				<form action="" method='post' onSubmit={addPetToAdoption}>
					<h1 style={{ fontSize: "50px", textAlign: "center" }}>Agregar nueva mascota</h1>
					Nombre:
					<input
						name="name"
						type="text"
						required={true}
						className="form-control input-field"
						placeholder='Ingresa nombre de la mascota' />
					Raza:
					<input
						name="breed"
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
						placeholder='Ingresa edad de la mascota' />
					Género
					<input
						name="gender"
						type="text"
						required={true}
						className="form-control input-field"
						placeholder='Ingresa género de la mascota' />

					Categoría
					<input
						name="category"
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
						placeholder='Añade una descripción de la mascota' />

					Url Imagen
					<input
						name="url_image"
						type="url"
						required={false}
						className="form-control input-field"
						placeholder='Ingresa el Url de la imagen de referencia' />


					<div style={{ display: "grid" }}>
						<button type='submit' className="btn">Agregar</button>
						<button className="btn" onClick={closeModal}>Cerrar</button>
					</div>
				</form>
			</div>
		</div>

	);
};

export default AdminModalAdoption;