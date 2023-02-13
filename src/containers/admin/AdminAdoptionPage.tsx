import Layout from "../../hocs/layout";
// import CAdminPetsAdopt from "../../components/adminAdoptPet/adminAdopt";
import { useState, useEffect } from "react";
import { getAllPetsToAdotp } from "../../functions/Admin/AdminAdoptPet";
import DataTable from "react-data-table-component";
import AdminModalAdoption from "../../components/modals/ModalAdminPetAdopt";
import AdminModalAdoptionUPDEL from "../../components/modals/ModalAdminPetAdoptCrud";


const CallPetsAdopt = () => {
	const [pets, setPets] = useState<any[]>([])
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModal2Open, setIsModal2Open] = useState(false);

	const [selectedRow, setSelectedRow] = useState<any>({});

	useEffect(() => {
		getAllPetsToAdotp(setPets)

	}, [])

	const columns = [
		{
			name: 'Id',
			selector: (row: { id: number; }) => row.id,
		},
		{
			name: 'Imagen',
			cell: (row: { url_image: string }) => (
				<img src={row.url_image} style={{ width: "100px", height: "100px", borderRadius: "10px", objectFit: "cover" }} alt="" />
			),
		},
		{
			name: 'Nombre',
			selector: (row: { name: any; }) => row.name,
		},
		{
			name: 'Descripción',
			selector: (row: { description: any; }) => row.description,
		},
		{
			name: 'Edad',
			selector: (row: { age: any; }) => String(row.age),
		},
		{
			name: 'Raza',
			selector: (row: { breed: any; }) => row.breed,
		},
		{
			name: 'Género',
			selector: (row: { gender: any; }) => row.gender,
		},
		{
			name: 'Categoría',
			selector: (row: { category: any; }) => row.category,
		},
		{
			name: 'Adoptado',
			selector: (row: { isAdopted: Boolean; }) => String(row.isAdopted),
		},

		{

			name: "Acciones",
			selector: (row: any) => (
				<>
					<button
						className="btn"
						style={{ marginRight: "20px" }}
						onClick={() => {
							setSelectedRow(row);
							setIsModal2Open(true)
						}}
					>Ver</button>
					<AdminModalAdoptionUPDEL data={selectedRow} isOpen={isModal2Open} closeModal={() => setIsModal2Open(false)} />
				</>

			),
		}
	];

	return (
		<>
			<Layout>
				<div className="pageAdopt">
					<div className="pageAdoptChild">

						<section id="" className="" >
							<div className="">
								<div className="section-heading text-center" style={{ display: "grid", alignContent: "center", alignItems: "center", textAlign: "center" }}>
									<h1 className="" >Mascotas para adopción</h1>

									<div style={{ display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
										<button className="btn" style={{ marginBottom: "10px", flex: "1" }} onClick={() => setIsModalOpen(true)}>Añadir mascotas</button>
										<button className="btn" style={{ marginBottom: "10px", flex: "1" }} onClick={() => window.location.href = "/adopt-pet"}>Vista de usuario para adopción</button>
									</div>



									<DataTable
										columns={Object(columns)}
										data={pets}
										pagination
									/>
								</div>
							</div>
						</section>
						<AdminModalAdoption isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
					</div>
				</div>
			</Layout>
		</>
	)
}

export default CallPetsAdopt;