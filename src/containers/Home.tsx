import slide0 from "../assets/img/slide0.jpg";
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
                <path d="M0 100 C 20 0 50 0 100 100 Z"/>
            </svg>
            <section id="services-index" className="bg-pattern"  data-bottom-top="background-position: 0px 70%,99% 70%;"
            data-top-bottom="background-position: 0px -50%,99% -50%;">
         {/* <!-- container --> */}
         <div className="container">
            <div className="section-heading">
               <h2>Our Services</h2>
            </div>
			{/* <!-- /section-heading--> */}
            <div className="col-md-10 col-md-offset-1 text-center">
               <p>Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus vi tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </div>
			{/* <!-- /col-md-10--> */}
         </div>
         {/* <!-- /container--> */}
         <div className="container-fluid margin1">
               <div className="col-md-10 col-md-offset-1">
			   {/* <!-- Services --> */}
                  <div id="owl-services" className="owl-carousel">
                     {/* <!-- Feature Box 1  --> */}
                     <div className="col-xs-12">
                        <div className="box_icon">
                           <div className="icon">
                              {/* <!-- icon --> */}
                              <div className="image">
                                 <img src="img/service1.jpg" className="img-responsive" alt="" />
                              </div>
                              <div className="info">
                                 <h4>Exotic Pets</h4>
                                 <p>Nulla vel metus scelerisque ante sollicitudinlorem ipsuet commodo. Cras purus odio, vestibulum in vulputate a Imperdiet interdum donec eget metus auguen unc vel lorem.</p>
                                 {/* <!-- Button--> */}
                                 <a className="btn" href="services-single.html">Read More</a>
                              </div>
                           </div>
                        </div>
                        {/* <!-- /box_icon --> */}
                     </div>
                     {/* <!-- /col-xs-12 ends --> */}
                     {/* <!-- Feature Box 2 --> */}
                     <div className="col-xs-12">
                        <div className="box_icon">
                           <div className="icon">
                              {/* <!-- icon --> */}
                              <div className="image">
                                 <img src={slide0} className="img-responsive" alt=""/>
                              </div>
                              <div className="info">
                                 <h4>Vet Services</h4>
                                 <p>Nulla vel metus scelerisque ante sollicitudinlorem ipsuet commodo. Cras purus odio, vestibulum in vulputate a Imperdiet interdum donec eget metus auguen unc vel lorem.</p>
                                 {/* <!-- Button--> */}
                                 <a className="btn" href="services-single.html">Read More</a>
                              </div>
                           </div>
                        </div>
                        {/* <!-- /box_icon --> */}
                     </div>
                     {/* <!-- /col-xs-12 ends --> */}
                     {/* <!-- Feature Box 3  --> */}
                     <div className="col-xs-12">
                        <div className="box_icon">
                           <div className="icon">
                              {/* <!-- icon --> */}
                              <div className="image">
                                 <img src={slide0} className="img-responsive" alt=""/>
                              </div>
                              <div className="info">
                                 <h4>Great Products</h4>
                                 <p>Nulla vel metus scelerisque ante sollicitudinlorem ipsuet commodo. Cras purus odio, vestibulum in vulputate a Imperdiet interdum donec eget metus auguen unc vel lorem.</p>
                                 {/* <!-- Button--> */}
                                 <a className="btn" href="services-single.html">Read More</a>
                              </div>
                           </div>
                        </div>
                        {/* <!-- /box_icon --> */}
                     </div>
                     {/* <!-- /col-xs-12 ends --> */}
                     {/* <!-- Feature Box 4  --> */}
                     <div className="col-xs-12">
                        <div className="box_icon">
                           <div className="icon">
                              {/* <!-- icon --> */}
                              <div className="image">
                                 <img src={slide0} className="img-responsive" alt=""/>
                              </div>
                              <div className="info">
                                 <h4>Pet Hotel</h4>
                                 <p>Nulla vel metus scelerisque ante sollicitudinlorem ipsuet commodo. Cras purus odio, vestibulum in vulputate a Imperdiet interdum donec eget metus auguen unc vel lorem.</p>
                                 {/* <!-- Button--> */}
                                 <a className="btn" href="services-single.html">Read More</a>
                              </div>
                           </div>
                        </div>
                        {/* <!-- /box_icon --> */}
                     </div>
                     {/* <!-- /col-xs-12 ends --> */}
                     {/* <!-- Feature Box 5  --> */}
                     <div className="col-xs-12">
                        <div className="box_icon">
                           <div className="icon">
                              {/* <!-- icon --> */}
                              <div className="image">
                                 <img src={slide0} className="img-responsive" alt="" />
                              </div>
                              <div className="info">
                                 <h4>Dog Walking</h4>
                                 <p>Nulla vel metus scelerisque ante sollicitudinlorem ipsuet commodo. Cras purus odio, vestibulum in vulputate a Imperdiet interdum donec eget metus auguen unc vel lorem.</p>
                                 {/* <!-- Button--> */}
                                 <a className="btn" href="services-single.html">Read More</a>
                              </div>
                           </div>
                        </div>
                        {/* <!-- /box_icon --> */}
                     </div>
                     {/* <!-- /col-xs-12 ends --> */}
                  </div>
                  {/* <!-- /owl-services --> */}
               </div>
               {/* <!-- /col-md-9 --> */}
           </div>
		
      </section>
        </Layout>
    )
}

export default Home;