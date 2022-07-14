import {Link} from "react-router-dom";
import logo from '../../src/asset/logon.svg'
import ListRdv from '../components/ListRdv'
const Accueil = () => {
    return(
            <div>
                <div className="row d-flex justify-contend-around ">
                    <div className="col-6">
                        <p>Welcome to HostoDIGITAL</p>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-success fw-light border-success text-white  border border-success rounded-3 mb-3">
                            <Link to="/ajouter_patients" className="nav-link text-white textNav" >
                                <i className="bi bi-file-earmark mx-3"></i>
                                Ajouter Patients
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-around">
                    <div className="col-2">
                        <div className="card">
                            <img src={logo}/>
                            <div className="card-tittle">Patients</div>
                            <div>
                                <p>24</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <img src={logo}/>
                            <div className="card-tittle">Rendez-vous</div>
                            <div>
                                <p>24</p>
                            </div>
                        </div >
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <img src={logo}/>
                            <div className="card-tittle">Médecin</div>
                            <div>
                                <p>24</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <ListRdv/>
                </div>



        </div>
    )
}
export default Accueil;