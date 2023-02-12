import Layout from "../../hocs/layout"
import React, { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import { getAllClients } from "../../functions/Customers"
import Swal from "sweetalert2"
import FilterComponent from "../../components/filterComponent"
import { deleteClient } from "../../functions/Customers"

import { default as AdminModalUsers } from "../../components/modals/ModalAdminUsers"


const ClienteAdmin = () => {
    const [data, setData] = useState([])
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredItems = data.filter(
        item => item.email && item.email.toLowerCase().includes(filterText.toLowerCase()),
    );

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} msg={"Filtrar por email"} />
        );
    }, [filterText, resetPaginationToggle]);


    const btnEliminar = (e, clientId) => {
        e.preventDefault();
        Swal.fire({
            title: 'Estas seguro?',
            text: "Eliminaras un cliente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, borrar!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteClient(clientId)
                if (res.status === 200) {
                    console.log('.')
                }
                Swal.fire(
                    'Eliminado!',
                    'Cliente ha sido eliminado correctamente',
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
            name: "Acciones",
            selector: row => (
                <>
                    <button className="btn" onClick={(e) => btnEliminar(e, row.id)}>x</button>
                </>

            ),
        }

    ];

    useEffect(() => {
        obtenerUsuarios()
    }, [])

    const obtenerUsuarios = async () => {
        const datos_response = await getAllClients()
        if (datos_response.length > 0) {
            setData(datos_response)
        }
    }

    return (
        <Layout>
            <section id="about-index" className="bg-lightcolor1" >
                <div className="container">
                    <div className="section-heading text-center">
                        <h1 className="margin-1" style={{ marginTop: "25px" }}>Registro de Clientes</h1>
                        <div style={{ display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                            <button className="btn" style={{ marginBottom: "10px", flex: "1" }} onClick={() => setIsModalOpen(true)}>Crear Usuario</button>
                            <button className="btn" style={{ marginBottom: "10px", flex: "1" }} onClick={() => window.location.href = "/profile"}>Mi perfil</button>
                        </div>
                        <div className="row">
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
                </div>
            </section>
            <AdminModalUsers isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
        </Layout>
    )

}
export default ClienteAdmin;