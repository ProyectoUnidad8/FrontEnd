import Layout from "../../hocs/layout";
import Mascota from "../../components/pet/Mascota";
import { useEffect, useState } from "react";

import { getUserPets } from "../../functions/Pets";
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
        id: 99,
        nombre:"Negrito",    
        raza : "Callejero",
        descripcion:"perrito bonito",
        edad : 2,
    }
]


const MisMascotas = () =>{

    const [data, setData] = useState([{
        id: 1,
        name:"Puchy",    
        age : 3,
        breed : "Schauzer",
        gender:"Male",
        description:"perrito bonito encontrado y rescatado",
        url_image:"https://goo.su/XQImvpd"
        
    },
    ])

    useEffect(()=>{
        showMascota();
    },[])

    const showMascota = async():Promise<any> =>{
        const datos_response = await getUserPets(Number(2))
        if (datos_response.length > 0){            
            setData(datos_response)
        }else{
            console.log(datos_response)
        }
    }

    return(
        <Layout>
            <>
            <section id="about-index" className="bg-lightcolor1" >
                <div className="container">
                <div className="section-heading text-center">
                    <h2>Mis Mascotas</h2>
                </div>      
                    
                    {                    
                        data &&
                        data!== null &&
                        data.map((mascota, index)=>(                        
                            <div className="row margin-1" key={index}>             
                                <Mascota
                                    id= {mascota.id}
                                    name= {mascota.name}
                                    age = {mascota.age}
                                    breed= {mascota.breed}
                                    gender= {mascota.gender}
                                    description= {mascota.description}
                                    urlImage={mascota.url_image}
                                />
                            </div>
                        ))
                    }
                </div>           
            </section>
            </>
        </Layout>
    )
}

export default MisMascotas;
