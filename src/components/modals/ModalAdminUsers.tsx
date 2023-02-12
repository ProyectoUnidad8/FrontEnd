import { FC } from 'react';
import { addUsersFunction } from '../../functions/Admin/AdminUsers';

interface ModalProps {
	isOpen: boolean;
	closeModal: () => void;

}


const AdminModalUsers: FC<ModalProps> = ({ isOpen, closeModal }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div>
			<div className="modal-overlay" />
			<div className="modal-content">
				<h1 style={{ fontSize: "50px", textAlign: "center" }}>Crear Nuevo Usuario</h1>
				<form action="" method='post' onSubmit={addUsersFunction}>

					Nombre:
					<input
						name="name"
						type="text"
						required={false}
						className="form-control input-field"
						placeholder='Ingresa el nombre de usuario' />
					Email:
					<input
						name="email"
						type="email"
						required={true}
						className="form-control input-field"
						placeholder='Ingresa tu correo electrónico' />
					Contraseña:
					<input
						name="password"
						type="password"
						required={true}
						className="form-control input-field"
						placeholder='Ingresa tu contraseña' />
					Rol
					<select name="role" id="" className="form-control input-field">
						<option value="USER">USER</option>
						<option value="ADMIN">ADMIN</option>
						<option value="AUX">AUX</option>
					</select>

					<div style={{ display: "flex" }}>
						<button style={{ flex: "1" }} type='submit' className="btn">Agregar</button>
						<button style={{ flex: "1" }} className="btn" onClick={closeModal}>Cerrar</button>
					</div>

				</form>
			</div>
		</div>

	);
};

export default AdminModalUsers;