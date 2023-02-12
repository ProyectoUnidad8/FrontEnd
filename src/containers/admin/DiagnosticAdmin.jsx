import React, { useState, useEffect } from 'react';
import Layout from '../../hocs/layout';
import Swal from 'sweetalert2';
import DataTable from 'react-data-table-component';
import FilterComponent from "../../components/filterComponent";
import { getAllDiagnostic, deleteDiagnostic } from '../../functions/Diagnostic';


const DiagnosticAdmin = () => {
    const [data, setData] = useState([])

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = data.filter(
        item => item.pet.numberChip && item.pet.numberChip.toLowerCase().includes(filterText.toLowerCase()),
    );


    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} msg={"Filtrar por Numero de Chip"} />
        );
    }, [filterText, resetPaginationToggle]);


    const btnEliminar = (e, diagnosticId) => {
        e.preventDefault()
        Swal.fire({
            title: 'Estas seguro',
            text: "Borraras un diagnostico",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteDiagnostic(diagnosticId)
                if (res.status === 200) {
                    console.log('.')
                }
                Swal.fire(
                    'Eliminado!',
                    'El registro a sido eliminado',
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
            name: 'Sintomas',
            selector: row => row.symptoms,
        },
        {
            name: 'Medicacion',
            selector: row => row.medication,
        },
        {
            name: 'Fecha Creacion',
            selector: row => row.createdAt,
        },
        {
            name: 'Numero de chip',
            selector: row => row.pet.numberChip,
        },
        {
            name: 'Raza',
            selector: row => row.pet.breed,
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
        obtenerDiagnosticos()
    }, [])

    const obtenerDiagnosticos = async () => {
        const datos_response = await getAllDiagnostic()
        if (datos_response.length > 0) {
            setData(datos_response)
        }
    }

    return (
        <Layout>
            <section id="about-index" className="bg-lightcolor1" >
                <div className="container">
                    <div className="section-heading text-center" style={{ display: "grid", alignContent: "center", alignItems: "center", textAlign: "center" }}>
                        <h1 className="margin-1" style={{ marginTop: "25px" }}>Registro de Mascotas</h1>
                        <button className="btn" style={{ marginBottom: "10px" }}>Crear Registro</button>
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


        </Layout>
    )

}
export default DiagnosticAdmin