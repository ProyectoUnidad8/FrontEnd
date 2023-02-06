import { useState, useEffect } from "react"
import Layout from "../../hocs/layout"
import { useParams } from "react-router-dom"
import PetDiagnostic from "../../components/pet/Diagnostic"
import { getPetDiagnostic } from "../../functions/Diagnostic"
import { urlPetDiagnostic } from "../../utils/urls"


const Diagnosticos = () =>{
    const params = useParams()

    const petId = params.petId

    const [data, setData] = useState([{
        id:1,
        symptoms:"Example1",
        medication:"Pastillas cada 4 horas"
    }])

    useEffect(()=>{
        showDiagnostic()
    },[])
  
    const showDiagnostic = async ():Promise<any>=>{        
        const datos_response = await getPetDiagnostic(Number(petId))
        if (datos_response.length > 0){
            setData(datos_response)
        }
        
    }    
    
    return (
        <Layout>
            <div>
                {
                    data &&
                    data !== null && 
                    data.map((diagnostico, index)=>(
                        <div key={index}>
                            <PetDiagnostic 
                            id = {diagnostico.id}
                            symptoms ={diagnostico.symptoms}
                            medication  ={diagnostico.medication}
                            />
                        </div>
                        
                    )                        
                )}
            </div>
            
        </Layout>
    )
}
export default Diagnosticos