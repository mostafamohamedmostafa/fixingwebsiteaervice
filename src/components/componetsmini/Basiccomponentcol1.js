
function Basiccomponentcol1(props) {
    return (
        <div className="Basiccomponentcol1">
            <div className={props.componentclassName}>

                <section className="container-fluid  ">
                    <h3>{props.header} </h3>

                    <section className="Basiccomponentcol1Section">
                        <div class="    website-card-external row row-cols-1 row-cols g-3   ">


                            <div className=" col-lg-12  ">
                                <h5 className=" ">  {props.sectiononeh5}</h5>

                                <h1 className="   ">{props.sectiononeh1}</h1>

                                <img src={props.sectiononeimg} className="card-img-top img-fluid  " alt="..." />


                            </div>


                        </div>




                    </section>


                </section>

            </div>
        </div>

    );
}

export default Basiccomponentcol1;

