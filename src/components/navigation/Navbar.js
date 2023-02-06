import { Fragment,useEffect,useState } from "react";
import logo from "../../assets/img/logo.png"
import { checkAuthenticated, logOut } from "../../utils/Auth";

function Navbar() {  
   const [isAuthenticated, setIsAuthenticated] = useState(false)

   const authLinks = (
      <Fragment>      
         <li><a href="/mis_mascotas">Mis Mascotas</a></li>
         <li><a href="/perfil">Perfil</a></li>
         <li><a href="/" onClick={logOut}>Logout</a></li>         
      </Fragment>  
   )
   const guestLinks = (
      <Fragment>
         <li><a href="/mis_mascotas">Mis Mascotas</a></li>
         <li><a href="/perfil">Perfil</a></li>
         <li><a href="/login">Login</a></li>
         </Fragment>
   )

   useEffect(()=>{
      checkAuthenticated().then(res=>{         
         if (res){
            setIsAuthenticated(res)         
         }else{
            localStorage.removeItem('token')
         }
               
      })
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
                     {isAuthenticated? authLinks:guestLinks}
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
