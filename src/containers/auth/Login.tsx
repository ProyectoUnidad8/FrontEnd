import Layout from "../../hocs/layout";
import { LoginFunction } from "../../functions/login";

const LoginForm = () => {
    return (        
        <Layout>
            <section className="container">
                <div className="row margin1">
                    <div className="col-lg-5 col-lg-offset-1 col-md-12">                        
                        <h5 className="sub-header">Iniciar Sesión</h5>        
                        <form method='post' onSubmit={ LoginFunction } id="contact_form" autoComplete="off" >
                            <div className="form-group">
                                <label>email<span className="required">*</span></label>
                                <input 
                                    name="email"
                                    type="text"                                    
                                    autoComplete="off"
                                    className="form-control input-field" 
                                    placeholder="Ingrese su email"
                                    required={true}/>                    
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
            </section>                         
        </Layout>
    )
}

export default LoginForm;




// const Login= ({

// }) => {        
//     const [formData, setFormData] = useState({
//         email:'',
//         password:''
//     })

//     const { 
//         email,
//         password
//     } = formData;

//     const captchaRef = useRef(null);

//     const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});
//     useEffect(()=>{
//         console.log("Datos del formulario")
//         console.log(formData);
//     })

//     const verifyToken = async (token) => {
//         try{
//             let response = await axios.post(`http://localhost:4000/verify-token`,{
//                 secret:process.env.REACT_APP_SECRET_KEY,
//                 token
//             }, console.log(token))
//             return response.data;
            
//         }catch(error){
//             console.log("error",error)
//         }
//     }
//     const onSubmit = async e => {
//         e.preventDefault();
//         let token = captchaRef.current.getValue();

//         if (email && password){
//             if(token){
//                 let valid_token = await verifyToken(token);
//                 if (valid_token.success){
//                     console.log("Congrats has emitido el formulario");
//                 }else{
//                     console.log("Nope invalid token")
//                 }
    
//             }else{
//                 console.log("debes confirmar que no eres un robot")
//             }
//         }else{
//             console.log("Debes ingresar los datos.")
//         }
        
//     }
//     // const onSubmit = e => {
//     //     e.preventDefault();
//     //     console.log(formData);

//     // }


    
//     return (        
//         <Layout>
//             <section className="container">
//                 <div className="row margin1">
//                     <div className="col-lg-5 col-lg-offset-1 col-md-12">                        
//                         <h5 className="sub-header">Iniciar session</h5>        
//                         <form onSubmit={e=>onSubmit(e)} id="contact_form" autoComplete="off">
//                             <div className="form-group">
//                                 <label>email<span className="required">*</span></label>
//                                 <input 
//                                     name="email"
//                                     type="email"                                    
//                                     value={email}
//                                     autoComplete="off"
//                                     onChange={e=>onChange(e)}
//                                     className="form-control input-field" 
//                                     placeholder="Ingrese su email"
//                                     required/>                    
//                                 <label>Contraseña <span className="required">*</span></label>
//                                 <input 
//                                     type="password"
//                                     name="password"
//                                     value={password}
//                                     onChange={e=>onChange(e)}
//                                     className="form-control input-field"
//                                     autoComplete="off"
//                                     placeholder="Ingrese su contraseña"
//                                     required=""/>                                       
//                             </div>
                            
//                             <div className="form-group">                                
//                                 <ReCAPTCHA 
//                                 sitekey={process.env.REACT_APP_PUBLIC_KEY}
//                                 ref={captchaRef}
//                                 />
//                             </div>
//                             <button type="submit" id="submit_btn" value="Submit" className="btn center-block">Iniciar Session</button>
//                         </form>                        
//                         <div id="contact_results"></div>


//                     </div> 
//                 </div>
//             </section>                         
//         </Layout>
// )}

//export default Login;