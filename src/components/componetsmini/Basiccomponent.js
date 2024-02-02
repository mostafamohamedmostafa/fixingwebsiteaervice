

function Basiccomponent(props) {
    return (

        <div className="Basiccomponent">
            <div className={props.componentclassName}>
                <section className="container-fluid">
                    <h3>{props.header} </h3>

                    <section className="BasiccomponentSectionOne">
                        <div class="    website-card-external d-flex  flex-column flex-lg-row justify-content-center  ">


                            <div className=" col-lg-6 ">
                                <h5 className="  ">{props.sectiononeh5}</h5>

                                <h1 className="h1textpadding  ">{props.sectiononeh1}</h1>



                            </div>

                            <div className="  col-lg-6 ">

                                <img src={props.sectiononeimg} className="card-img-top img-fluid" alt="..." />

                            </div>
                        </div>
                    </section>












                </section>

            </div>
        </div>

    );
}

export default Basiccomponent;

