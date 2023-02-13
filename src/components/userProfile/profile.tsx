import { IUser } from "../../interfaces/IUsers";
import ChangePassword from "../modals/ModalChangePassword";
import { useState } from "react"

function UserProfile({ email, name, createdAt, password }: IUser) {

	const [isModalOpen, setIsModalOpen] = useState(false);

	const date = new Date(createdAt);
	const dateString = date.toLocaleDateString();
	return (
		<>
			<h1 style={{ paddingTop: "25px", textAlign: "center" }}>Perfíl</h1>
			<div id="profilecont">
				<div>
					<div id="subprofilecont">
						<p><b>Nombre:</b> {name}</p>
					</div>
					<div id="subprofilecont">
						<img width={"50%"} src={`https://avatars.dicebear.com/api/avataaars/${name}.svg`} alt="" />
					</div>
					<div id="subprofilecont">
						<p><b>Email:</b> {email}</p>
					</div>
					<div id="subprofilecont">
						<p><b>Creado en:</b> {dateString}</p>
					</div>
					<div style={{ display: "grid", marginBottom: "10px" }}>
						<button className="btn" onClick={() => setIsModalOpen(true)}>Cambiar Contraseña</button>
					</div>
				</div>
			</div>
			<ChangePassword email={email} isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
		</>
	)
}

export default UserProfile;