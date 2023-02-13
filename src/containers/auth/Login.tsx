import Layout from "../../hocs/layout";
import { LoginFunction } from "../../functions/AuthLogin";

const LoginForm = () => {
    return (
        <Layout>
            <div style={{ marginTop: "150px", marginBottom: "100px", display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "50%" }}>
                    <h5 className="sub-header">Iniciar Sesión</h5>
                    <form method='post' onSubmit={LoginFunction} id="contact_form" autoComplete="off">
                        <div className="form-group">
                            <label>Email<span className="required">*</span></label>
                            <input
                                name="email"
                                type="text"
                                autoComplete="off"
                                className="form-control input-field"
                                placeholder="Ingrese su email"
                                required={true} />
                            <label>Contraseña <span className="required">*</span></label>
                            <input
                                type="password"
                                name="password"
                                className="form-control input-field"
                                autoComplete="off"
                                placeholder="Ingrese su contraseña"
                                required={true} />
                        </div>
                        <button type="submit" id="submit_btn" value="Submit" className="btn center-block">Iniciar Sesión</button>
                    </form>
                    <div id="contact_results"></div>
                </div>
            </div>
        </Layout>
    )
}

export default LoginForm;