import Layout from "../../hocs/layout";
import Mascota from "../../components/pet/Mascota";

const data = [
    {
        id: 1,
        nombre:"Puchy",    
        raza : "Schauzer",
        descripcion:"perrito bonito encontrado y rescatado",
        edad : 3,
    },
    {
        id: 2,
        nombre:"Puchy 2",    
        raza : "Schauzer 222",
        descripcion:"perrito bonito",
        edad : 3,
    },
    {
        id: 3,
        nombre:"Negrito",    
        raza : "Callejero",
        descripcion:"perrito bonito",
        edad : 2,
    }
]
const MisMascotas = () =>{
    const showMascota = ()=>{
        return data.map((mascota,index )=> {
            return (
            
                <div key={index} className="col-md-4 col-lg-4">
                    <Mascota mascota={mascota} />
                </div>
                
            )
        })
    }

    return(
        <Layout>
            <div className="row margin1" > 
            <div className="margin1"></div>
                {showMascota()}
            </div>
        </Layout>
    )
}

export default MisMascotas;
