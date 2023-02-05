import { IPetAdopt } from "../../interfaces/IAdopt";
import { useState } from 'react';

function PetsAdopt({ name, breed, category, description, gender, urlImage, isAdopted }: IPetAdopt ) {
	

	return (<>
				<div className="box_icon" style={{ padding: "20px", width: "100%" }}>
					<div className="icon" style={{display: "flex"}}>
						<div className="image" style={{ width: "790px", margin:"auto", marginBottom:"0px", marginTop: "0px" }} >
								<img src={urlImage} className="img-responsive" style={{ objectFit:"cover" , width: "100%", height: "530px" }} alt="" />
						</div>

						<div className="info" style={{ display: "grid", gridColumn: "auto", justifyContent: "center", alignItems: "center", marginTop: "5px" }}>
							
							<h1>{name}</h1>
							<p className="componentInfoPetAdopt"><b style={{fontSize:"30px"}}> {description}</b></p>
							<p className="componentInfoPetAdopt"><b className="componentTitlePetAdopt">Raza:</b> {breed}</p>							
							<p className="componentInfoPetAdopt"><b className="componentTitlePetAdopt">Género:</b> {gender}</p>
							<p className="componentInfoPetAdopt"><b className="componentTitlePetAdopt">Estado:</b> {isAdopted ? "Adoptado": "No ha sido adoptado"}</p>	
							<p className="componentQuestionPetAdopt">¿Deseas que {name} sea parte de tu familia?</p>
							

						</div>
					</div>
				</div>
				
			</>
	)
}

export default PetsAdopt;