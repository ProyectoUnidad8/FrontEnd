import Layout from "../../hocs/layout";
import { AdminDiagnosticFunction } from "../../functions/Admin/AdminDiagnostic";

export const DiagnosticoForm = () => {
  return (
    <Layout>
      <div style={{ display: "flex", alignContent: "center", justifyContent: "center", marginTop: "130px" }}>
        <div style={{ width: "60%" }}>
          <form method="POST" onSubmit={AdminDiagnosticFunction}>
            <h2 style={{ textAlign: "center" }}>Agregar diagnóstico</h2>
            <label>Id de mascota</label>
            <input
              type="number"
              name="petId"
              required={true}
              placeholder="Ingrese ID de mascota"
              className="form-control input-field" />
            <label>Síntoma</label>
            <input
              type="text"
              name="symptoms"
              required={true}
              placeholder="Ingrese síntoma"
              className="form-control input-field" />
            <label >Medicación</label>
            <input
              type="text"
              name="medication"
              required={true}
              placeholder="Ingrese medicación"
              className="form-control input-field" />
            <div style={{ display: "grid" }}>
              <button style={{ marginBottom: "10px" }} type="submit" id="submit_btn" className="btn center-block">Añadir diagnóstico</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}