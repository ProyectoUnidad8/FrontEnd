import { Fragment } from "react";
import logo from "../../assets/img/logo.png"


function Navbar() {  
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
                     <li><a href="/login">Login</a></li>
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