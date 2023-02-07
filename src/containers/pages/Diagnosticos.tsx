import { useState, useEffect } from "react"
import Layout from "../../hocs/layout"
import { useParams } from "react-router-dom"
import PetDiagnostic from "../../components/pet/Diagnostic"
import { getPetDiagnostic } from "../../functions/Diagnostic"
import { urlPetDiagnostic } from "../../utils/urls"


const Diagnosticos = () => {
    const params = useParams()

    const petId = params.petId

    const [data, setData] = useState([{
        id: 1,
        symptoms: "Example1",
        medication: "Pastillas cada 4 horas",
        createdAt:"18/06/2021"
    }])

    useEffect(() => {
        showDiagnostic()
    }, [])

    const showDiagnostic = async (): Promise<any> => {
        const datos_response = await getPetDiagnostic(Number(petId))
        if (datos_response.length > 0) {            
            setData(datos_response)
        }
    }
    
    return (
        <Layout>
            <section id="adoption" className="pages">
                <div className="jumbotron" data-stellar-background-ratio="0.5">
                    {/* <!-- Heading --> */}
                    <div className="jumbo-heading" data-stellar-background-ratio="1.2">
                        <h1>Diagnosticos realizados
                        </h1>
                    </div>
                </div>
                {/* <!-- container--> */}
                <div className="container">
                    {/* <!-- row --> */}
                    <div className="row">
                        {/* <!-- /col-lg-6 --> */}                        
                            {
                                data &&
                                data !== null &&
                                data.map((diagnostico, index) => (
                                    <div className="col-lg-6 col-md-6 res-margin" key={index}>
                                        <div>
                                            <PetDiagnostic
                                                id={diagnostico.id}
                                                symptoms={diagnostico.symptoms !== null ? diagnostico.symptoms: ''  }
                                                medication={diagnostico.medication !== null ? diagnostico.medication: ''  }
                                                createdAt = {diagnostico.createdAt !== null ? diagnostico.createdAt: ''  }
                                            />
                                        </div>
                                    </div>
                                )
                                )}
                            {/* <!-- /ul custom--> */}
                        
                        {/* <!-- /col-lg-6 --> */}
                    </div>
                    {/* <!-- row --> */}

                </div>
                {/* <!-- /container--> */}
            </section>

        </Layout>
    )
}
export default Diagnosticos