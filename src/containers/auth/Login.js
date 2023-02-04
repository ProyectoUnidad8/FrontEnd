import { useState, useEffect } from "react";
import Layout from "../../hocs/layout";

const Login= ({

}) => {        
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const { 
        email,
        password
    } = formData;

    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});
    useEffect(()=>{
        console.log("Datos del formulario")
        console.log(formData);
    })
    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
    }
    
    return (        
        <Layout>
            <section className="container">
                <div className="row margin1">
                    <div className="col-lg-5 col-lg-offset-1 col-md-12">                        
                        <h5 className="sub-header">Iniciar session</h5>        
                        <form onSubmit={e=>onSubmit(e)} id="contact_form" autoComplete="off">
                            <div className="form-group">
                                <label>email<span className="required">*</span></label>
                                <input 
                                    name="email"
                                    type="email"                                    
                                    value={email}
                                    autoComplete="off"
                                    onChange={e=>onChange(e)}
                                    className="form-control input-field" 
                                    placeholder="Ingrese su email"
                                    required/>                    
                                <label>Contraseña <span className="required">*</span></label>
                                <input 
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={e=>onChange(e)}
                                    className="form-control input-field"
                                    autoComplete="off"
                                    placeholder="Ingrese su contraseña"
                                    required=""/>                                       
                            </div>
                            <button type="submit" id="submit_btn" value="Submit" className="btn center-block">Autenticarte con google</button>
                            <button type="submit" id="submit_btn" value="Submit" className="btn center-block">Iniciar Session</button>
                        </form>                        
                        <div id="contact_results"></div>
                    </div> 
                </div>
            </section>                         
        </Layout>
)}

export default Login;