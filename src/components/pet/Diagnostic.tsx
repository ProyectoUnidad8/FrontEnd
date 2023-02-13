import { Fragment } from "react"
import { IPetDiagnostic } from "../../interfaces/IDiagnostic"

function PetDiagnostic({ id, symptoms, medication, createdAt }: IPetDiagnostic) {
    console.log('asdas')
    console.log(createdAt)
    function formatDate(fecha:any){
        console.log(fecha)
        const date = new Date(fecha).toDateString();
        console.log(date)
        return date
    }
    return (
        <Fragment>
            <div className="review-caption">                
                <div className="small-heading">       
                    <h6>fecha de diagnostico</h6>
                    {formatDate(createdAt)}
                </div>                
                <blockquote>
                    <h5><span>Sintomas:</span>  {symptoms}</h5>
                    <h6><span>Medicacion: </span> {medication}</h6>
                    El perrito ingreso con una fiebre de 32° estaba
                    solo estaba acostado y no queria comer ni tomar agua

                </blockquote>
            </div>            
        </Fragment>
    )
}
export default PetDiagnostic;