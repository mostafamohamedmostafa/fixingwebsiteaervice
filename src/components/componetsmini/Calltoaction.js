import calltoaction from "../images/calltoaction.png"

function Calltoaction() {
    return (

        <div className="Calltoaction">
            <section className="container-fluid">




                <div className="row row-cols-1 row-cols-md-3 g-4 container justify-content-center  align-items-center">
                    <div className="col">
                        <div className="card h-100">
                            <img src={calltoaction} className="card-img-top" alt="..." />


                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title"><span>Contact us</span> 
                                 if you want
                                    to repair your
                                    device really fast</h2>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                             <div className="card-body">

                                
                                <h2 className="card-title">  <a>+34 544 444 444</a> </h2>
                            </div>

                        </div>
                    </div>
                </div>


            </section>

        </div>
    );
}

export default Calltoaction;

