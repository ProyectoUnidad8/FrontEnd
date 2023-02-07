import Layout from "../../hocs/layout"
import React,{ useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import { getAllPets } from "../../functions/Pets"
import Swal from "sweetalert2"
import FilterComponent from "../../components/filterComponent"
import { deletePet } from "../../functions/Pets"





const MascotaAdmin =()=>{
    const [data, setData] = useState([])

    const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const filteredItems = data.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	);
    

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText}  msg={"Filtrar por email"}/>
		);
	}, [filterText, resetPaginationToggle]);
        

    const btnEliminar = (e, petId) =>{
        e.preventDefault()
        Swal.fire({
            title: 'Estas Seguro?',
            text: "Eliminaras una mascota",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deletePet(petId)
                Swal.fire(
                    'Eliminado!',
                    'La mascota ha sido elminada Correctamente.',
                    'success'
                    ) 
                window.location.reload(true);
            }
          })
    }
    
    const columns = [
        {
            name: 'id',
            selector: row => row.id,
        },
        {
            name: 'Nombre',
            selector: row => row.name,
        },
        {
            name: 'Raza',
            selector: row => row.breed,
        },
        {
            name: 'Edad',
            selector: row => row.age,
        },
        {
            name: 'Genero',
            selector: row => row.gender,
        },        
        {
            name: 'Numero de Chip',
            selector: row => row.numberChip,
        },        
        {
            name:"Acciones",
            selector: row => (
                <>
                   <button className="btn" onClick={(e) => btnEliminar(e,row.id)}>x</button>
                </>
            
            ),
        }
        
    ];
    
    const datos = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    useEffect(()=>{        
        obtenerPets()        
        console.log(data)
    },[])

    const obtenerPets = async () => {
        const datos_response = await getAllPets()
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
                        <h2 className="margin-1">Registro de Mascotas</h2>
                        <button className="btn">Crear Registro</button>
                        <DataTable
                            columns={columns}
                            data={filteredItems}
                            pagination
                            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                            subHeader
                            subHeaderComponent={subHeaderComponentMemo}
                            selectableRows
                            persistTableHead
                        
                            
                        />
                    </div>
                </div>
            </section>
            
            
        </Layout>
    )

}
export default MascotaAdmin