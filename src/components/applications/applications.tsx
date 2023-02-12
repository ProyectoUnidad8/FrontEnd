import { IApplication } from "../../interfaces/IApplications";
import { approveApplication, deleteApplication } from "../../functions/Admin/AdminApplications";


function Application({ id, name, description, phone, dni, status, petAdoptId }: IApplication) {

	return (
		<>
			<div className="box_icon" style={{ padding: "20px", width: "100%" }}>
				<div className="icon" style={{ display: "flex" }}>
					<div className="info" style={{ display: "grid", gridColumn: "auto", justifyContent: "center", alignItems: "center", marginTop: "5px" }}>
						<h1>{name}</h1>
						<p className="componentInfoPetAdopt">
							<b className="componentTitlePetAdopt">Razón para adoptar: </b>{description}
						</p>

						<p className="componentInfoPetAdopt">
							<b className="componentTitlePetAdopt">Teléfono:</b> {phone}
						</p>

						<p className="componentInfoPetAdopt">
							<b className="componentTitlePetAdopt">DNI:</b> {dni}
						</p>

						<p className="componentInfoPetAdopt"><b className="componentTitlePetAdopt">Estado:</b> {status ? true : "Solicitud en espera"}</p>
						
						<p className="componentQuestionPetAdopt">
							Confirma si <b>{name}</b> es la persona indicada para adoptar.
						</p>
						<button className="btn" onClick={() => approveApplication(id, name, petAdoptId)}>Aprobar Solicitud</button>
						<button className="btn" onClick={() => deleteApplication(id, name)}>Eliminar Solicitud</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Application;