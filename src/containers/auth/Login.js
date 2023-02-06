import { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";


import ReCAPTCHA  from "react-google-recaptcha"


import Layout from "../../hocs/layout";
import { Login } from "../../utils/Auth";


const LoginForm= ({

}) => {        
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const [errormsg, setErrorMsg] = useState("")

    const { 
        email,
        password
    } = formData;

    const captchaRef = useRef(null);

    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});
    useEffect(()=>{
        console.log("Datos del formulario")
        console.log(formData);
    })
   
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("onsubmit");
        console.log(formData)        
        if (email && password){
            Login({formData})            
        }else{
            console.log("Debes ingresar los datos.")
        }
        
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
                            
                            <div className="form-group">                                
                                <ReCAPTCHA 
                                sitekey={process.env.REACT_APP_PUBLIC_KEY}
                                ref={captchaRef}
                                />
                            </div>
                            <button type="submit" id="submit_btn" value="Submit" className="btn center-block">Iniciar Session</button>
                        </form>                        
                        <div id="contact_results"></div>


                    </div> 
                </div>
            </section>                         
        </Layout>
)}

export default LoginForm;