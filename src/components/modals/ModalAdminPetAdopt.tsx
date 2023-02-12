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

					<div className='modales'>
						<p>Raza</p>
						<p>Edad</p>
						<input
							name="breed"
							type="text"
							required={true}
							className="form-control input-field modalselect"
							placeholder='Ingresa raza de la mascota' />
						<input
							name="age"
							type="number"
							required={false}
							className="form-control input-field modalselect"
							placeholder='Ingresa edad de la mascota' />
					</div>

					<div className='modales'>
						<p>Género</p>
						<p>Categoría</p>
						<select name="gender" className="form-control input-field modalselect" >
							<option value="Macho">Macho</option>
							<option value="Hembra">Hembra</option>
						</select>
						<select name="category" className="form-control input-field modalselect">
							<option value="Perro">Perro</option>
							<option value="Gato">Gato</option>
							<option value="Tortuga">Tortuga</option>
							<option value="Conejo">Conejo</option>
							<option value="Hamster">Hamster</option>
							<option value="Otros">Otros</option>
						</select>
					</div>



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

					<div style={{ display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
						<button type='submit' style={{ marginBottom: "10px", flex: "1" }} className="btn">Agregar</button>
						<button className="btn" style={{ marginBottom: "10px", flex: "1" }} onClick={closeModal}>Cerrar</button>
					</div>
				</form>
			</div>
		</div>

	);
};

export default AdminModalAdoption;