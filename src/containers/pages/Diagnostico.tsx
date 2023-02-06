import Layout from "../../hocs/layout"
import { useParams } from "react-router-dom"
const Diagnostico = () =>{
    const params = useParams()

    const diagnosticoId = params.diagnosticoId
    console.log(diagnosticoId)
    return (
        <Layout>
            <h1>Pagina de Diagnostico</h1>
        </Layout>
    )
}
export default Diagnostico 