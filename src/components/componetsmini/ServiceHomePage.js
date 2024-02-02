import Service1 from "../images/Service1.jpg"
import Service2 from "../images/Service2.jpg"
import Service3 from "../images/Service3.jpg"
function ServiceHomePage() {
    return (

        <div className="ServiceHomePage">
            <section className="container">



                <h2 className="text-center">What kind of device do you want to service?</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={Service1} className="card-img-top" alt="..." />

                            <div className="card-footer">
                                <h5 className="card-title">SMARTPHONE</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={Service2} className="card-img-top" alt="..." />

                            <div className="card-footer">
                                <h5 className="card-title">TABLET</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={Service3} className="card-img-top" alt="..." />

                            <div className="card-footer">
                                <h5 className="card-title">LAPTOP</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
}

export default ServiceHomePage;

