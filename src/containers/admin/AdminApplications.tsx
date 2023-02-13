import Layout from "../../hocs/layout";
import Application from "../../components/applications/applications";
import { useState, useEffect } from "react";
import { getAllApplications } from "../../functions/Admin/AdminApplications";


const AllApplications = () => {
	const [application, setApplications] = useState<any[]>([])

	useEffect(() => {
		getAllApplications(setApplications)

	}, [])

	return (
		<>
			<Layout>
				<div className="pageAdopt">
					<h1 style={{ paddingTop: "25px", textAlign: "center" }}>Solicitudes de adopción</h1>
					<div className="pageAdoptChild">

						{
							application != null ? (
								application.map(app => (
									app.status ? ("") :
										(
											<div key={app.id}>
												<Application id={app.id} name={app.name} description={app.description} phone={app.phone} dni={app.dni} petAdoptId={app.petAdoptId} />
											</div>
										)
								))
							) : ("No hay datos")
						}
					</div>
				</div>
			</Layout>
		</>
	)
}

export default AllApplications;