import Layout from "../../hocs/layout";
import { AdminPetFunction } from "../../functions/Admin/AdminPets";

export const PetForm = () => {
  return (
    <Layout>
      <div style={{ display: "flex", alignContent: "center", justifyContent: "center", marginTop: "130px" }}>
        <div style={{ width: "60%" }}>
          <form method="POST" onSubmit={AdminPetFunction}>
            <h2 style={{ textAlign: "center" }}>Agregar mascota</h2>
            <label >Nombre</label>
            <input
              type="text"
              name="name"
              required={true}
              placeholder="Ingrese nombre"
              className="form-control input-field" />
            <label >Raza</label>
            <input
              type="text"
              name="breed"
              required={true}
              placeholder="Ingrese raza"
              className="form-control input-field" />
            <label >Género</label>
            <input
              type="text"
              name="gender"
              required={true}
              placeholder="Ingrese genero"
              className="form-control input-field" />
            <label >Descripción</label>
            <input
              type="text"
              name="description"
              required={true}
              placeholder="Ingrese descripción"
              className="form-control input-field" />
            <label >Número de chip</label>
            <input
              type="text"
              name="numberChip"
              required={true}
              placeholder="Ingrese el número de chip"
              className="form-control input-field" />
            <label >Categoría</label>
            <select name="category" className="form-control input-field" >
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
              <option value="Paloma">Paloma</option>
              <option value="Conejo">Conejo</option>
              <option value="Hamster">Hamster</option>
              <option value="Otros">Otros</option>
            </select>
            <label >URL Imagen</label>
            <input
              type="text"
              name="url_image"
              placeholder="Ingrese URL"
              className="form-control input-field" />
            <label >Id de dueño</label>
            <input
              type="number"
              name="ownerId"
              required={true}
              placeholder="Ingrese ID de dueño"
              className="form-control input-field" />
            <div style={{ display: "grid" }}>
              <button style={{ marginBottom: "10px" }} type="submit" id="submit_btn" className="btn center-block">Añadir mascota</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}