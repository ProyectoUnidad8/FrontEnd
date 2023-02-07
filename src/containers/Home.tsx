import slide0 from "../assets/img/slide0.jpg";
import aboutindex from "../assets/img/about-index.png";
import Layout from "../hocs/layout";

const Home = () => {   

   
    return (
        <Layout>            
            <div className="slider-container">
            <div className="slider-control left inactive"></div>
            <div className="slider-control right"></div>
            <ul className="slider-pagi"></ul>

            <div className="slider">
               {/* <!-- Slide 0 --> */}
               <div className="slide slide-0 active" style={{ backgroundImage: `url(${slide0})` }}>
                  <div className="slide__bg"></div>
                  <div className="slide__content">
                     <div className="slide__overlay">
                     </div>
                     {/* <!-- slide text--> */}
                     <div className="slide__text">
                        <h1 className="slide__text-heading">Hola!</h1>
                        <div className="hidden-mobile">
                           <p className="lead">Somos una pequeña organizacion que busca ayudar a mascotas abandonadas</p>
                           <a href="!#" className="btn btn-default">Acerca de nosotros</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!--/Slider--> */}
         </div>
         <svg id="curveUp" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" fill="#fff">
            <path d="M0 100 C 20 0 50 0 100 100 Z" />
         </svg>
         <svg id="curveUp" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" fill="#fff">
            <path d="M0 100 C 20 0 50 0 100 100 Z" />
         </svg>
         {/*ACERCA DE NOSOTROS*/}
         <section id="about-index" className="bg-lightcolor1" >
            <div className="container">
               <div className="section-heading text-center">
                  <h2>Nosotros</h2>
               </div>
               {/* <!-- row --> */}
               <div className="row">
                  <div className="col-md-6 col-lg-7 text-center">
                     <h3>Para tu mejor amigo</h3>
                     <p>
                        Velamos por el cuidado de tu perrito
                     </p>
                     {/* <!-- Accordion --> */}
                     
                     
                     <div className="panel-group">
                        <div className="panel">
                           <div className="panel-heading">
                              <h5 className="panel-title">
                                 <details>
                                    <summary className="">Responsabilidad Social</summary>
                                    <div id="collapseOne" className="panel-collapse collapse in">
                                       <div className="panel-body">
                                       <p>Patatemp dolupta orem retibusam qui commolu les felis tiam non metus ali quam eros Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit.</p>
                                       </div>
                                    </div>
                                 </details>
                              </h5>
                           </div>
                        </div>
                     </div>
                                 


                     {/* <!-- /.accordion --> */}
                  </div>
                  {/* <!-- /col-md-7--> */}
                                    
                  {/* <!-- /parallax-object1--> */}
                  <div className="col-md-6 col-lg-5" >
                     <img src={aboutindex} className="img-responsive" alt="" />
                  </div>
                  {/* <!-- /col-md-5--> */}
               </div>
               {/* <!-- /row --> */}
               <div className="row margin1 text-center">
                  {/* <!-- item 1 --> */}
                  <div className="features col-lg-3 col-sm-6 col-xs-12">
                     <div className="col-xs-12 big-icon">
                        {/* <!-- icon --> */}
                        <i className="flaticon-dog-and-pets-house"></i>
                     </div>
                     <div className="col-xs-12">
                        <h5>Housing</h5>
                        <p>Aenean lacinia bibendum nulla sed consectetur ras mattis consectetur purus sit amet fermentum sociis natoque penatibus et magnis.</p>
                     </div>
                  </div>
                  {/* <!-- /col-md-3 --> */}
                  {/* <!-- item 2 --> */}
                  <div className="features col-lg-3 col-sm-6 col-xs-12">
                     <div className="col-xs-12 big-icon">
                        {/* <!-- icon --> */}
                        <i className="flaticon-dog-in-front-of-a-man"></i>
                     </div>
                     <div className="col-xs-12">
                        <h5>High Quality</h5>
                        <p>Aenean lacinia bibendum nulla sed consectetur ras mattis consectetur purus sit amet fermentum sociis natoque penatibus et magnis.</p>
                     </div>
                  </div>
                  {/* <!-- /col-md-3 --> */}
                  {/* <!-- item 3 --> */}
                  <div className="features col-lg-3 col-sm-6 col-xs-12">
                     <div className="col-xs-12 big-icon">
                        {/* <!-- icon --> */}
                        <i className="flaticon-veterinarian-hospital"></i>
                     </div>
                     <div className="col-xs-12">
                        <h5>Vet Services</h5>
                        <p>Aenean lacinia bibendum nulla sed consectetur ras mattis consectetur purus sit amet fermentum sociis natoque penatibus et magnis.</p>
                     </div>
                  </div>
                  {/* <!-- /col-md-3 --> */}
                  {/* <!-- item 1 --> */}
                  <div className="features col-lg-3 col-sm-6 col-xs-12">
                     <div className="col-xs-12 big-icon">
                        {/* <!-- icon --> */}
                        <i className="flaticon-animals-3"></i>
                     </div>
                     <div className="col-xs-12">
                        <h5>Special Care</h5>
                        <p>Aenean lacinia bibendum nulla sed consectetur ras mattis consectetur purus sit amet fermentum sociis natoque penatibus et magnis.</p>
                     </div>
                  </div>
                  {/* <!-- /col-md-3 --> */}
               </div>
               {/* <!-- /row --> */}
            </div>
            {/* <!-- /container --> */}
         </section>
      <section id="contact-index">
         <div className="container">
            <div className="section-heading">
               <h2>Ayudanos</h2>
            </div>
            <div className="col-lg-7 col-lg-offset-5 col-md-8 col-md-offset-2">
               {/* <!-- contact info --> */}
               <h4>Información </h4>
               <ul className="list-inline">
                  <li><i className="fa fa-envelope"></i><a href="mailto:youremailaddress">youcanhelptoo@example.com</a></li>
                  <li><i className="fa fa-phone margin-icon"></i>+51 656 598 498</li>
                  <li><i className="fa fa-map-marker margin-icon"></i>Perú - Perú</li>
               </ul>
               {/* <!-- address info --> */}
               <p>
                  Tu tambien puedes ayudarnos a ayudar a las mascotas
                  que residen en nuestro refugio con una pequeña donación,
                  si deseas ser activo en la organizacion puedes contactarnos
                  directamente.                  
               </p>
               <h4 className="margin1">Send us a Message</h4>
               {/* <!-- Form Starts --> */}
               
               <div id="contact_form">
                  <div className="form-group">
                     <label>Name<span className="required">*</span></label>
                     <input type="text" name="name" className="form-control input-field" required />
                        <label>Email Adress <span className="required">*</span></label>
                        <input type="email" name="email" className="form-control input-field" required />
                           <label>Subject</label>
                           <input type="text" name="subject" className="form-control input-field" required />
                              <label>Message<span className="required">*</span></label>
                              <textarea name="message" id="message" className="textarea-field form-control" rows={3} required ></textarea>
                           </div>
                           <button type="submit" id="submit_btn" value="Submit" className="btn center-block">Enviar</button>
                        </div>                         
                  <div id="contact_results"></div>
                  </div>
                  {/* <!-- Contact --> */}
                  {/* <!-- /col-lg-5--> */}
               </div>
               {/* <!-- /container --> */}
            </section>
        </Layout>
    )
}

export default Home;
