


import { Link, Route, Routes } from 'react-router-dom';




function Navigation() {
    return (
        <div className="Navigation">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
              
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="Home">Home Page!  </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="QA">QAPage</Link>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link" to="Whyus">WhyUsPage</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="Offer">OfferPricingPage</Link>
                        </li>

                    
                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default Navigation;

