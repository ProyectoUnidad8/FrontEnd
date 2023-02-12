import { FC } from 'react';
import { changePasswordFunction } from '../../functions/profileFunction';

interface ModalProps {
	isOpen: boolean;
	closeModal: () => void;
	email: String
}


const ChangePassword: FC<ModalProps> = ({ email, isOpen, closeModal }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div>
			<div className="modal-overlay" />
			<div className="modal-content">
				<h1 style={{ fontSize: "50px", textAlign: "center" }}>Cambiar contraseña</h1>
				<form action="" method='post' onSubmit={changePasswordFunction} >
					<input
						name="email"
						type="email"
						value={String(email)}
						className="form-control input-field"
						style={{ display: "none" }} />
					Contraseña:
					<input
						name="password"
						type="password"
						required={true}
						className="form-control input-field"
						placeholder='Ingresa tu contraseña' />
					Nueva Contraseña:
					<input
						name="newpassword"
						type="password"
						required={true}
						className="form-control input-field"
						placeholder='Ingresa tu contraseña' />

					<div style={{ display: "grid" }}>
						<button type='submit' className="btn">Cambiar contraseña</button>
						<button className="btn" onClick={closeModal}>Cerrar</button>
					</div>

				</form>
			</div>
		</div>

	);
};

export default ChangePassword;