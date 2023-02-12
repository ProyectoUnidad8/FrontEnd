import { FC } from 'react';
import smileDog from "../../assets/img/smile-dog.png";
import sadDog from "../../assets/img/sad-dog.png";
import { sendApplication } from '../../functions/adoptionFunction';


interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  id: string;
}


const Modal: FC<ModalProps> = ({ id, isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }
  
  return (
    <div>
		<div className="modal-overlay"  />
			<div className="modal-content" >
				<form action="" method='post' onSubmit={ sendApplication }>
					
					<h1 style={{ fontSize: "50px", textAlign: "center"}}> Solicitud de Adopción</h1>
					
				   <input
						name="petAdoptId"
						type="number"
						value={id}
						className="form-control input-field"
						placeholder='Ingresa tu nombre'
						style={{ display: "none" }}/>
					Nombre:							 
					<input
						name="name"
						type="text"
						required={true}
						className="form-control input-field"
						placeholder='Ingresa tu nombre'/>
					DNI:								 
					<input
						name="dni"
						type="number"
						required={true}
						className="form-control input-field"
						placeholder='Ingresa tu número de DNI'/>
					Teléfono:						 
					<input
						name="phone"
						type="text"
						required={true}
						className="form-control input-field"
						placeholder='Ingresa tu número de teléfono'/>
					¿Por qué quieres adoptarlo? 
					<input
						name="description"
						type="text"
						required={true}
						className="form-control input-field"
						placeholder='Déjanos saber tu motivación para adoptar a esta mascota'/>

					<div style={{ display: "grid"}}>
						<button type='submit' className="btn" id="btn-smile">Enviar</button>
						<img src={smileDog} id='imageSmile' alt="" />
	
						<button className="btn" id="btn-sad" onClick={closeModal}>Cerrar</button>
						<img src={sadDog} id='imageSad' alt="" />
					</div>

				</form>
		</div>
	</div>

  ); 
};

export default Modal;
