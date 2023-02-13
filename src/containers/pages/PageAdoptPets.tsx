import Layout from "../../hocs/layout";
import PetsAdopt from "../../components/adoptPet/petAdopt";
import { useState,useEffect } from "react";
import { allPetsToAdopt } from "../../functions/adoptionFunction";


const PetsToAdoption = () => {
	const [pets, setPets] = useState<any[]>([])
	
	useEffect(()=> {
		allPetsToAdopt(setPets)
	},[])

	return (
		<>
			<Layout>
				<div className="pageAdopt">
					<div className="pageAdoptChild">
						{ 
							pets != null ? (
								pets.map(pet => (
									pet.isAdopted ? (""): 
										(
										<div key={pet.id}>
											<PetsAdopt id={pet.id} name={pet.name} breed={pet.breed} isAdopted={pet.isAdopted} description={pet.description} gender={pet.gender} urlImage={pet.url_image}  />
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

export default PetsToAdoption;