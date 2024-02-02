import { QnData, FQnData } from "../Pages/Websitedata";
function QuestionCard() {
    return (

        <div className="QuestionCard">
            <section className="container-fluid">



                <h1 className=" text-center ">
                    <span>Answers    </span> to frequent questions  </h1>
                <div class="    Hero-Text d-flex  flex-column flex-lg-row justify-content-center  ">



                    <div className="row row-cols-1 row-cols-md-2 g-4 container">

                        {QnData.map((QnData, index) => {
                            return (

                                <div className="col" key={index}>
                                    <div className="card h-100">
                                        <img src={QnData.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h2 className="card-title"> {QnData.Question}</h2>
                                            <p className="card-text">{QnData.Answer}</p>
                                        </div>

                                    </div>
                                </div>

                            )

                        })}







                    </div>
                </div>




            </section>
            <section className="container">

                <h1 className=" text-center ">
                    <span>FQA    </span>   </h1>
                {FQnData.map((FQnData, index) => {
                    return (
                        <div className="accordion" id="accordionExample" key={index}>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={FQnData.IDHash} aria-expanded="true" aria-controls="collapseOne">
                                        {FQnData.Question}
                                    </button>
                                </h2>
                                <div id={FQnData.ID} className="accordion-collapse collapse show " data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>{FQnData.Strong}</strong> {FQnData.Answer}
                                    </div>
                                </div>
                            </div>

                        </div>


                    )

                })}
            </section>

        </div>
    );
}

export default QuestionCard;

