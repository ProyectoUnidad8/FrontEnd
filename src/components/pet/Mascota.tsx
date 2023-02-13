import { Fragment } from "react"
import { Link } from "react-router-dom";
import { IPet } from "../../interfaces/IPet";

function Mascota({
    id, name, age,breed, gender, url_image, description, 
}:IPet) {

    return (
        <Fragment>     
            <div className="col-md-5">
                <img src={String(url_image)} className="center-block img-rounded img-responsive" alt=""/>
			  </div>
            <div className="row margin-1">
                <h3>{name}</h3>
                <div className="pet-adopt-info">                    
                    <h6>Edad: {Number(age)}</h6>
                    <h6>Raza: {breed}</h6>
                    <h6>Gender: {gender}</h6>                                        

                </div>                                
                <ul className="custom no-margin">
                    <li>Jugueton tranquilo con todos es muy amigable</li>
                    <p>{description}</p>				 
                    
                </ul>
                <Link to={`/diagnosticos/${id}`} className="btn">
                        Ver diagnosticos
                </Link>
            </div>                                                           
        </Fragment>
    )
}
export default Mascota;

