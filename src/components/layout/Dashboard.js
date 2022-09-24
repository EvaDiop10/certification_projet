import {Link} from "react-router-dom";
import dashboard from '../../App.css'
import logo from '../../asset/logovert.svg'
import logo2 from '../../asset/logon.svg'
import navbarnav from '../../App.css'

const Dashboard = () =>{
    console.log(logo)
    function handleGestionPatient() {

    }

    return(

            <div className="dashboard navbarnav  navbar navbar-expand-lg d-flex flex-column flex-shrink-0 p-1 text-white bg-red-800"
            >
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                    <a href="/"
                       className="d-flex align-items-center  text-white text-decoration-none">
                    </a>
                    <img src={logo} alt="ll" className="w-50 h-75  my-3 mx-5"/>
                </div>
                <div className="my-5"
                     style={{width:"180px",
                     }}>
                    <hr></hr>
                </div>
                <div className="">
                    <ul className="nav navbar-nav  navbar-expand-lg me-auto mb-2 mb-lg-0 nav-pills flex-column mb-auto">
                        <li className="nav-item ">
                            <Link to="/" className="nav-link text-white textNav" aria-current="page">
                                <img src={logo2} alt="cc " className="mx-2 w-25 h-25"/>
                                Tableau de bord
                            </Link>
                        </li>
                        <li onClick={handleGestionPatient}>
                            <Link to="/gestion_patients" className="nav-link text-white textNav" >
                                <i className="bi bi-file-earmark mx-3"></i>
                                Gestion Patients
                            </Link>
                        </li>
                        <li>
                            <a href="gestion_rendez-vous" className="nav-link text-white textNav">
                                <i className="bi bi-calendar3  mx-3"></i>
                                Gestion Rendez-vous
                            </a>
                        </li>
                    </ul>

                </div>
                        <div className="dropdown my-5">
                            <div className="my-5">
                                <hr></hr>
                            </div>
                            <Link to="#" className="nav-link text-white textNav">
                                <i className="bi bi-box-arrow-right  mx-3"></i>
                                DECONNEXION
                            </Link>
                        </div>
            </div>

    )
}
export default Dashboard;