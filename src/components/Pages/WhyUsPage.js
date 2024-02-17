import AboutHomePage1 from "../componetsmini/AboutHomePage1";
import AboutHomePage2 from "../componetsmini/AboutHomePage2";
import Footer from "../componetsmini/Footer";
import video from "../images/Whyusvideo.mp4"
import Service1 from "../images/Service1.jpg"
import Service2 from "../images/Service2.jpg"
import Service3 from "../images/Service3.jpg"
function WhyUsPage() {
    return (
        <div className="WhyUsPage">
            <section className="container-fluid" >

                <section className="container-fluid HeroWhyUS">
                    <div>
                        <video className="container-fluid " src={video} autoplay loop controls> </video>
                    </div>
                </section>


                <section>
                    <AboutHomePage1 />
                </section>
                <section>
                    <AboutHomePage2 />
                </section>



                <section>

                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Best oF Mobile</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Best oF Table</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Best of Laptop</button>
                        </li>

                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={Service1} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8 whyuscard">
                                        <div className="card-body">
                                            <h5 className="card-title">Mobile Fixing</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={Service2} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8 whyuscard">
                                        <div className="card-body">
                                            <h5 className="card-title">Tablet Fixing</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>










                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">

                            <div className="card mb-3 " >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={Service3} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8 whyuscard">
                                        <div className="card-body">
                                            <h5 className="card-title">Laptop Fixing </h5>
                                            <p className="card-text">Laptop repaire  </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                </section>


                <section>
                    <Footer />
                </section>

            </section>
        </div>
    );
}

export default WhyUsPage;

