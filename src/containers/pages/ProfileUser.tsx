import Layout from "../../hocs/layout";
import UserProfile from "../../components/userProfile/profile";
import { useState, useEffect } from "react";
import { getUser } from "../../functions/profileFunction";

const ProfileUserPage = () => {
	const [users, setUsers] = useState<any[]>([])

	useEffect(() => {
		getUser(setUsers)

	}, [])
	const datos: any = {}
	users.forEach((a: any) => {
		a.name !== null ? (datos["name"] = (a.name)) : (datos["name"] = ("Usuario"))
		datos["id"] = (a.id)
		datos["email"] = (a.email)
		datos["createdAt"] = (a.createdAt)
	})
	return (
		<>
			<Layout>
				<div className="pageAdopt">
					<div className="pageAdoptChild">
						{
							datos !== null ? (
								<div key={datos.id}>
									<UserProfile name={datos.name} email={datos.email} createdAt={datos.createdAt} />
								</div>
							) : ("Ha ocurrido un error")
						}
					</div>
				</div>
			</Layout>
		</>
	)
}

export default ProfileUserPage;