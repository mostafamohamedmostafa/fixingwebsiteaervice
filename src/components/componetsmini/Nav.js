import { Link, Route, Routes } from 'react-router-dom';


function Navigation() {
    return (

        <section>
            <div className="Nav ">

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Home</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ms-auto p-2">
                                <li className="nav-item ">
                                    <Link className="nav-link  " aria-current="page" to="Home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="QA">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="QA">QA Page</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Whyus">WhyUs Page</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="Offer">OfferPricingPage</Link>
                                </li>


                                <li className="nav-item">
                                    <Link className="nav-link " to="Contact">ContactPage</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </section>

    );
}

export default Navigation;
