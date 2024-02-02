import repair from "../images/repair.png"
import care from "../images/care.png"
import clock from "../images/clock.png"
import Service1 from "../images/Service1.jpg"
import Service2 from "../images/Service2.jpg"
import Service3 from "../images/Service3.jpg"
import { repairdata } from "./Websitedata"
import Calltoaction from "../componetsmini/Calltoaction"
import Footer from "../componetsmini/Footer"
function OfferPricingPage() {
    return (
        <div className="OfferPricingPage contatiner-fluid">

            <section className="OfferPricingPageHero container">
                <h1><span> We repair any device</span>
                    <br></br>
                    Smartphone, tablet
                    <br></br>

                    , laptop, etc...</h1>


                <div className="row row-cols-1 row-cols-md-3 g-4 offer-section">
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
            </section>


            <section className="OfferPricingPagePrices container">
                <h1>Choose your device and get the best price for it.</h1>

                <div className="row row-cols-1 row-cols-md-2 g-4">

                    <div className="col">
                        <div className="card h-100">
                            <img src={Service1} className="card-img-top" alt="..." />
                            <div className="card-body">
                            </div>

                        </div>
                    </div>
                    <div className="col Service-prices">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title"> <span>Smartphone </span>repair</h2>
                                <p className="card-title"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor imodo cuat.</p>
                                <ul className="list-group  list-group-flush">


                                    {repairdata.map((repairdata, index) => {
                                        return (
                                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                                {repairdata.Fixing}
                                                <span className="badge bg-primary rounded-pill">{repairdata.Price} </span>
                                            </li>


                                        )

                                    })}


                                </ul>



                            </div>

                        </div>
                    </div>
                </div>


                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col Service-prices">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title"> <span>Tablet  </span>repair</h2>
                                <p className="card-title"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor imodo cuat.</p>
                                <ul className="list-group  list-group-flush">


                                    {repairdata.map((repairdata, index) => {
                                        return (
                                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                                {repairdata.Fixing}
                                                <span className="badge bg-primary rounded-pill">{repairdata.Price} </span>
                                            </li>


                                        )

                                    })}


                                </ul>



                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={Service2} className="card-img-top" alt="..." />
                            <div className="card-body">
                            </div>

                        </div>
                    </div>

                </div>

                <div className="row row-cols-1 row-cols-md-2 g-4">

                    <div className="col">
                        <div className="card h-100">
                            <img src={Service3} className="card-img-top" alt="..." />
                            <div className="card-body">
                            </div>

                        </div>
                    </div>
                    <div className="col Service-prices">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title"> <span>Laptop </span>repair</h2>
                                <p className="card-title"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor imodo cuat.</p>
                                <ul className="list-group  list-group-flush">


                                    {repairdata.map((repairdata, index) => {
                                        return (
                                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                                {repairdata.Fixing}
                                                <span className="badge bg-primary rounded-pill">{repairdata.Price} </span>
                                            </li>


                                        )

                                    })}


                                </ul>



                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Calltoaction/>
            <Footer/>

        </div>
    );
}

export default OfferPricingPage;

