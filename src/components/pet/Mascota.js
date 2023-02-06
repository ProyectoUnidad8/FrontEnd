import { Fragment } from "react"
import { Link } from "react-router-dom";
import adopt1 from "../../assets/img/adopt1.jpg"

function Mascota({
    mascota
}) {
    return (
        <Fragment>     
            <div className="col-md-5">
                  <img src={adopt1} class="center-block img-rounded img-responsive" alt=""/>
			  </div>
            <div className="row margin-1">
                <h3>{mascota.nombre}</h3>
                <div className="pet-adopt-info">
                    <h6>Gender: female</h6>
                    <h6>Neutered: Yes</h6>
                    <h6>Vaccinated: Yes</h6>
                    <h6>{mascota.edad}</h6>
                    <h6>{mascota.peso}</h6>

                </div>
                <p>{mascota.descripcion}</p>				 
                
                <ul className="custom no-margin">
                    <li>Aliquam erat volut pat.</li>
                    <li>Ibu lum orci eget, viverra elit liquam erat volut pat phas ellus ac.</li>
                    <li>Aliquam erat volut pat phas ellu</li>
                </ul>
                <Link to="/diagnosticos" className="btn">
                            Ver diagnosticos
                        </Link>
            </div>                                                           
        </Fragment>
    )
}
export default Mascota;

