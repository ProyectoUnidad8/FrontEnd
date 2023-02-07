import { Fragment,useEffect,useState } from "react";
import logo from "../../assets/img/logo.png"
import { logOut } from "../../utils/Auth";
import { lastToken } from "../../utils/token";

function Navbar() {  
   const [isAuthenticated, setIsAuthenticated] = useState(false)
   
   const guestLinks = (
      <Fragment>                  
         <li><a href="/login">Login</a></li>
      </Fragment>
   )
  

   const checkRole = (role) =>{      
         if (role==='ADMIN'){
            return (
               <Fragment>                  
                  <li><a href="/admin/usuarios">Clientes</a></li>
                  <li><a href="/admin/mascota">Mascotas</a></li>
                  <li><a href="/admin/solicitudes">Solicitudes</a></li>
                  <li><a href="/admin/diagnosticos">Diagnosticos Totales</a></li>
                  <li><a href="/admin/mascotas/adopcion">Mascotas Adopcion</a></li>   
                  <li><a href="/admin/donaciones">Donaciones</a></li>   
                  <li><a href="/" onClick={logOut}>Logout</a></li>
         </Fragment>)
         }else if (role==='USER') {
            return (
               <Fragment>      
               <li><a href="/mis_mascotas">Mis Mascotas</a></li>         
               <li><a href="/" onClick={logOut}>Logout</a></li>         
            </Fragment>
            )
         }  
   }


   useEffect(()=>{
      if(lastToken){
         setIsAuthenticated(true)         
      }else{
         setIsAuthenticated(false)
      }
   })
   
   return (
      <Fragment>
         <link href="https://fonts.googleapis.com/css?family=Lato:400,800" rel="stylesheet"/>
         <link href="https://fonts.googleapis.com/css?family=Baloo+Thambi" rel="stylesheet"/>
         <nav className="navbar navbar-custom navbar-fixed-top" style={{ zIndex: "10"}}>
            <div className="container">
               {/* <!-- Brand and toggle get grouped for better mobile display --> */}
               <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
                     <i className="fa fa-bars"></i>
                  </button>
                  <div className="navbar-brand navbar-brand-centered page-scroll">
                     <a href="/">
                        {/* <!-- logo  --> */}
                        <img src={logo} className="img-responsive" alt="" />
                     </a>
                  </div>
               </div>
               {/* <!--/navbar-header --> */}
               {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
               <div className="collapse navbar-collapse" id="navbar-brand-centered">
                  <ul className="nav navbar-nav">
                     <li><a href="/">Home</a></li>
                     <li><a href="!#">Nosotros</a></li>
                     <li><a href="/adopt-pet">¡Adopta!</a></li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">                     
                     {isAuthenticated? checkRole(localStorage.getItem('role')) : guestLinks}
                  </ul>
               </div>
               {/* <!-- /.navbar-collapse --> */}
            </div>
            {/* <!-- /.container --> */}
         </nav>         
      </Fragment>

   )
}

export default Navbar;
