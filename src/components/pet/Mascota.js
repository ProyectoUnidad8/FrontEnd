import { Fragment } from "react"
import { Link } from "react-router-dom";
import adopt1 from "../../assets/img/adopt1.jpg"

function Mascota({
    mascota
}) {
    return (
        <Fragment>                                        
                <div className="box_icon">
                    <div className="icon">
                        {/* <!-- icon --> */}
                        <div class="image">
                            <img src={adopt1} className="img-responsive" alt="" />
                        </div>
                        <div className="info">
                            <h4>{mascota.nombre}</h4>
                            <p>{mascota.raza}</p>                            
                            <p>{mascota.descripcion}</p>
                            <p>{mascota.edad}</p>
                            {/* <!-- Button--> */}
                            <Link to="/diagnosticos" className="btn">
                                Ver diagnosticos
                            </Link>
                        </div>
                    </div>
                    {/* <!--/icon --> */}
                </div>
                {/* <!-- /box_icon --> */}            
        </Fragment>
    )
}
export default Mascota;