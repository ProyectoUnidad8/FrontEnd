import { Fragment } from "react";

function Footer(){
    return(
    <Fragment>
        <footer>
         {/* <!-- Contact info --> */}
         <div className="container">
            <div className="col-md-4 text-center">
               {/* <!-- Footer logo --> */}
               <img src="src/assets/img/logo.png" alt="" className="center-block img-responsive" />
            </div>
            {/* <!-- /.col-md-4 --> */}
            <div className="col-md-4 text-center res-margin">
               <ul className="list-unstyled">
                  <li><i className="fa fa-phone"></i>(000) 000-000</li>
                  <li><i className="fa fa-envelope"></i>Email: <a href="mailto:your@email.com">site@email.com</a></li>
                  <li><i className="fa fa-map-marker"></i>123 Anywhere Street,London,LO4 6ON</li>
               </ul>
            </div>
            {/* <!-- /.col-md-4 --> */}
            <div className="col-md-4 text-center res-margin">
               <h5>Nuestras Redes sociales</h5>
               {/* <!--Social icons --> */}
               <div className="social-media">
                  <a href="!#" title=""><i className="fa fa-twitter"></i></a>
                  <a href="!#" title=""><i className="fa fa-facebook"></i></a>
                  <a href="!#" title=""><i className="fa fa-google-plus"></i></a>
                  <a href="!#" title=""><i className="fa fa-instagram"></i></a>
               </div>
            </div>
            {/* <!-- /.col-md-4 --> */}
         </div>
         {/* <!-- /.container --> */}
         {/* <!-- Credits--> */}
         <div className="credits col-md-12 text-center">
            Copyright © 2023 Designed by <a href="http://www.ingridkuhn.com">Ingrid Kuhn</a>
            {/* <!-- Go To Top Link --> */}
            <div className="page-scroll hidden-sm hidden-xs">
               <a href="#page-top" className="back-to-top"><i className="fa fa-angle-up"></i></a>
            </div>
         </div>
         {/* <!-- /credits --> */}
      </footer>                        
    </Fragment>

)}

export default Footer;