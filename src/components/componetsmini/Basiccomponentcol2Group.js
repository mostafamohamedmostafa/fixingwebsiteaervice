import autofill_ui from "../images/autofill_ui.png"


function Basiccomponentcol2Group(props) {
    return (
        <div className=" Basiccomponentcol2Group">
            <div className={props.componentclassName}>
                <section className="container-fluid">
                    <h3>{props.header}</h3>

                    <section className="">




                        <div className="card-group">

                            <div className="card card-one">
                                <div className="card-body">
                                    <h5 className="card-title">{props.cardoneh5}</h5>
                                    <p className="card-text">{props.cardonep}</p>
                                </div>
                                <img src={props.cardoneimage} className=" img-fluid" alt="..." />

                            </div>

                            <div className="card  ">
                                <div className="card-two">
                                    <div className="card-body">
                                        <h5 className="card-title">{props.cardtwoh5}</h5>
                                        <img src={props.cardtwoimage} className="card-img-top img-fluid card-two-IMG-ONE" alt="..." />

                                        <p className="card-text ">{props.cardtwop}</p>
                                    </div>
                                    <img src={props.cardtwoimagetwo} className="img-fluid card-two-IMG-TWO" alt="..." />

                                </div>



                            </div>

                        </div>

                    </section>











                </section>

            </div>
        </div>

    );
}

export default Basiccomponentcol2Group;

