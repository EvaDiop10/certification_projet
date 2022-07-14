import {Link} from "react-router-dom";
import dashboard from '../../App.css'
import logo from '../../asset/logovert.svg'
import logo2 from '../../asset/logon.svg'
const Dashboard = () =>{
    console.log(logo)
    function handleGestionPatient() {

    }

    return(

            <div className="dashboard d-flex flex-column flex-shrink-0 p-1 text-white   " >
                <div>
                    <a href="/"
                       className="d-flex align-items-center  text-white text-decoration-none">
                    </a>
                    <img src={logo} alt="ll" className="w-50 h-75  my-3 mx-5"/>
                </div>
                <div className="">
                    <hr></hr>
                </div>
                <div className="">
                    <ul className="nav nav-pills flex-column mb-auto">
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
                            <div className="">
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