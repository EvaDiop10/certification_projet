import  {BrowserRouter as Router, Link, Route, Routes,useNavigate} from "react-router-dom";
import doctor  from '../asset/doctor.png'


const CardMedecin = () => {
    return(
        <div>
            <div className="row">
                <div className="col-3 card border-0 shadow-sm">
                    <div className="row">
                        <div className="col-6">
                            <img src={doctor} className="card-img"/>
                        </div>
                        <div  className="col-6">
                            <p className="fw-bold">aaaa</p>
                            <p className="fw-bold">aaaa</p>
                            <p className="text-success">aaaa</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                          <p>Jours</p>
                        </div>
                        <div  className="col-6 my-2">
                            <p>aaaa</p>
                            <p>aaaa</p>
                            <p>aaaa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardMedecin;