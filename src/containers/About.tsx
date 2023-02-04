import { useState} from "react"
import Layout from "../hocs/layout";

const About = () => {
    const [isShown, setIsShown] = useState(false);    
    return (
        <Layout>
            <section id="about" className="pages">
                <div className="jumbotron" data-stellar-background-ratio="0.5">
                    {/* <!-- Heading --> */}
                    <div className="jumbo-heading" data-stellar-background-ratio="1.2">
                        <h1>Qué somos?</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6">
                            <h3>High Quality Services</h3>
                            <p>Elit uasi quidem minus id omnis a nibh fusce mollis imperdie tlorem ipuset phas ellus ac sodales Lorem ipsum dolor Phas ellus
                                ac sodales felis tiam non metus. lorem ipsum dolor sit amet, consectetur adipisicing elit uasi quidem minus id omnis a nibh fusce mollis imperdie tlorem ipuset campas fincas
                            </p>
                            <p>Phas ellus
                                ac sodales felis tiam non metus. lorem ipsum dolor sit amet, consectetur adipisicing elit uasi quidem minus id omnis a nibh fusce mollis imperdie tlorem ipuset campas fincas
                            </p>
                        </div>
                        {/* <!-- /col-lg-7 --> */}
                        {/* <!-- image --> */}
                        <div className="col-lg-5 col-md-6 res-margin">
                            <img src="img/about.jpg" className="img-rounded center-block img-responsive" alt="" />
                        </div>
                        {/* <!-- /col-lg-5--> */}
                    </div>
                    {/* <!-- /row --> */}
                    <div className="margin1 text-center">
                        <div className="well lightcolor row">
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
                                <button className="btn" onClick={()=>setIsShown(!isShown)}>Click para mostrar</button>  
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
                            {/* <!-- item 4 --> */}
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
                        {/* <!-- /well --> */}
                    </div>
                    {/* <!-- /margin1 --> */}
                    <div className="row margin1">
                        <div className="col-lg-7 col-sm-12 res-margin">
                            <h3 className="text-center">How We Started</h3>
                            <p>Ibu lum orci eget, viverra elit. Aliquam erat volut pat phas ellus ac
                                sodales felis tiam non Doloreiur qui commolu ptatemp dolupta orem retibusam
                                andigen Ibu lum orci eget, viverra elit. Aliquam erat volut pat phas ellus ac sodales felis tiam non metus.
                                Placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget,Fusce mollis imperdiet interdum donec eget metus auguen unc vel lorem ispuet Ibu lum orci eget, viverra elit liquam erat volut pat phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur adipisicing elit uasi quidem minus id omnis.
                            </p>
                            <p>
                                Les felis tiam non metus ali quam eros Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum.
                            </p>
                        </div>
                        {/* <!-- /col-lg-7 -->	 */}
                        <div className="col-lg-5 col-sm-12">
                            {/* <!-- Accordion --> */}
                            <div className="panel-group" id="accordion">
                                {/* <!-- Question 1 --> */}
                                <div className="panel">
                                    <div className="panel-heading">
                                        <h5 className="panel-title">
                                            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Social Responsability</a>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse in">
                                        <div className="panel-body">
                                            <p>Patatemp dolupta orem retibusam qui commolu
                                                les felis tiam non metus ali quam eros Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Question 2 --> */}
                                <div className="panel">
                                    <div className="panel-heading">
                                        <h5 className="panel-title">
                                            <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Mission Statement</a>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Patatemp dolupta orem retibusam qui commolu
                                                les felis tiam non metus ali quam eros Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Question 3 --> */}
                                <div className="panel">
                                    <div className="panel-heading">
                                        <h5 className="panel-title">
                                            <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Value Added Services</a>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Patatemp dolupta orem retibusam qui commolu
                                                les felis tiam non metus ali quam eros Pellentesque turpis lectus, placerat a ultricies a, posuere a nibh. Fusce mollis imperdiet interdum donec eget metus auguen unc vel mauris ultricies, vest ibulum orci eget, viverra elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.accordion --> */}
                        </div>
                        {/* <!-- /col-lg-5 --> */}
                    </div>
                    {/* <!-- /row --> */}
                </div>
            </section>
        </Layout>
    )
}

export default About;