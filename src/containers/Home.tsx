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
        </Layout>
    )
}

export default Home;