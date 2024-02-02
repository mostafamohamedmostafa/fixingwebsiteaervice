import repair from "../images/repair.png"
import care from "../images/care.png"
import clock from "../images/clock.png"
import Heroimg from "../images/Hero.jpg"
function Hero() {
    return (

        <div className="Hero">
            <section className="container-fluid">




                <div class="    Hero-Text d-flex  flex-column flex-lg-row justify-content-center  ">


                    <div className=" col-lg-6  col-md-6">
                        <h1 className="  ">
                            <span>We repair   </span> any device
                            <br>
                            </br>
                            Smart Phone , Tablet ,
                            <br></br>
                            Laptop or Desktop.

                        </h1>

                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card h-100">
                                    <img src={repair} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Electronic  Repair</h5>
                                    </div>

                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={care} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Satisfation  Guarantee</h5>
                                    </div>

                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                    <img src={clock} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Fast 24/7  Service</h5>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>

                    <div className="  col-lg-6  col-md-6">

 
                    </div>
                </div>

            </section>

        </div>
    );
}

export default Hero;

