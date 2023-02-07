import Layout from "../../hocs/layout"
import {React, useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import { getAllClients } from "../../functions/Customers"
import Swal from "sweetalert2"



const ClienteAdmin =()=>{
    const [data, setData] = useState([])
        

    const btnEliminar = () =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              console.log("Registro eliminado!")
            }
          })
    }
    
    const columns = [
        {
            name: 'id',
            selector: row => row.id,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Nombre',
            selector: row => row.name,
        },        
        {
            name: 'Fecha Creacion',
            selector: row => row.createdAt,
        },        
        {
            name: 'Fecha Actualización',
            selector: row => row.update_at,
        },        
        {
            name:"Acciones",
            selector: row => (
                <>
                    <button className="btn" onClick={btnEliminar}>x</button>

                </>
            
            ),
        }
        
    ];
    
    const datos = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        }
    ]

    useEffect(()=>{        
        obtenerUsuarios()        
        console.log(data)
    },[])

    const obtenerUsuarios = async () => {
        const datos_response = await getAllClients()
        if (datos_response.length > 0) {            
            setData(datos_response)
        } 
    }
    
    return(
        <Layout>
            <section id="about-index" className="bg-lightcolor1" >
                <div className="container">
                    <div className="section-heading text-center">                        
                    </div>                    
                    <div className="row">
                        <h2 className="margin-1">Registro de Clientes</h2>
                        <button className="btn">Crear Registro</button>
                        <DataTable
                            columns={columns}
                            data={data}
                            pagination                            
                        />
                    </div>
                </div>
            </section>
            
            
        </Layout>
    )

}
export default ClienteAdmin;