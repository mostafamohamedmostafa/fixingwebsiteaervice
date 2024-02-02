

function Basiccomponentcol2(props) {
    return (
        <div className="Basiccomponentcol2">
            <div className={props.componentclassName}>
                <section className="container-fluid">
                    <h3>{props.header}</h3>

                    <section className="Basiccomponentcol2Section">
                        <div className="row row-cols-1 row-cols g-3 " >
                            <div className="col-lg-6  h-100 " >
                                <div className={props.specialstylecol1}>
                                    <div className=" website-card-internal">
                                        <div className=" ">
                                            <h5 className=" ">  {props.sectiononeh5ONE}</h5>

                                            <h1 className="   ">{props.sectiononeh1ONE}</h1>

                                            <img src={props.sectiononeimgONE} className="card-img-top img-fluid  " alt=" " />


                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-6 h-100">
                                <div className={props.specialstylecol2}>
                                    <div className="website-card-internal ">
                                        <div className="">
                                            <h5 className=" ">  {props.sectiononeh5TWO}</h5>

                                            <img src={props.sectiononeimg} className="card-img-top img-fluid  " alt="..." />

                                            <h1 className={props.specialstylecol2h1}>{props.sectiononeh1TWO}</h1>

                                            <img src={props.sectiononeimgTWO} className="card-img-top img-fluid  " alt="..." />


                                        </div>

                                    </div>
                                </div>

                            </div>



                        </div>
                    </section>











                </section>

            </div>
        </div>

    );
}

export default Basiccomponentcol2;

