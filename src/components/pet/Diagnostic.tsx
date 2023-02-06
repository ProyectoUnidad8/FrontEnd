import { Fragment } from "react"
import { IPetDiagnostic } from "../../interfaces/IDiagnostic"

function PetDiagnostic ({id, symptoms, medication}: IPetDiagnostic){
    return(
        <Fragment>
            <div key={Number(id)}>
                <h1>Pet Diagnostic</h1>
                
                <h3>{symptoms}</h3>
                <h3>{medication}</h3>
            </div>
            
        </Fragment>
    )
}
export default PetDiagnostic;