import Footerimg from "../images/Footer.gif"

function Footer() {
    return (

        <div className="Footer">
            <section className="container-fluid">




                <div className="row row-cols-1 row-cols-md-3 g-4 container justify-content-center  align-items-center">
                    <div className="col">
                        <div className="card h-100">
                            <img src={Footerimg} className="card-img-top" alt="..." />


                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title"><span>Contact with us</span>   </h2>
                                <p className="card-title">Nullam viverra consectetuer quisque cursus et, porttitor   </p>
                                <p className="card-title"> +61 (0) 3 8376 6284  </p>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title"><span>Contact with us</span>   </h2>
                                <p className="card-title">Nullam viverra consectetuer quisque cursus et, porttitor   </p>
                                <p className="card-title"> +61 (0) 3 8376 6284  </p>
                            </div>

                        </div>
                    </div>
                </div>


            </section>

        </div>
    );
}

export default Footer;

