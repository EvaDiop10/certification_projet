import {Link} from "react-router-dom";
import logo from '../../src/asset/logon.svg'
import ListRdv from '../components/ListRdv'
import Dashboard from "../components/layout/Dashboard"
import rdv from '../asset/rdv.png'
import  patient from '../asset/patient.png'
import doctor  from '../asset/doctor.png'
import MedecinList from '../components/MedecinList'
import UserCard from '../components/UserCard'
import card_bg from "../asset/card_bg.png"
import axios from "../components/api/Axios"

const Accueil = () => {


    return(
            <div>
                <div className="row ">
                    <div className="col-2 col-lg-2 col-md-2 col-sm-2 h-full scroll-y bg-red-800">
                        <Dashboard/>
                    </div>
                    <div className="col-7 col-lg-7 col-md-7 col-sm-7 my-3">
                        <div className=" d-flex justify-content-between">
                            <div>
                                <h2 className='text-gray'> <strong >Bienvenue</strong>
                                    <br/> Sur HostoDIGITAL
                                </h2>
                            </div>
                            <div className="">
                                <form className="d-flex ">
                                    <input className="form-control  border-success me-2 " type="search" placeholder="Rechercher patient" aria-label="Search"/>
                                    <button className="btn btn-outline-success border-5" type="submit">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between my-4">
                            <div className="col-3 col-lg-3 col-md-3 col-sm-3">
                                <div className="card shadow-md border-0 ">
                                    <img src={patient} className="card-img mx-5 my-3"/>
                                    <div className="card-tittle">
                                        <p className=" text-black  my-3 mb-3">
                                            <Link to="/ajouter_patients" className="nav-link  textNav" >
                                                Ajouter Patients
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 col-lg-3 col-md-3 col-sm-3">
                                <div className="card shadow-md border-0">
                                    <img src={rdv} className="card-img mx-5 my-3"/>
                                    <div className="card-tittle">
                                        <p className=" text-black  my-3 mb-3">
                                            <Link to="/ajouter_rendez-vous" className="nav-link  textNav" >
                                                Ajouter Rendez-vous
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 col-lg-3 col-md-3 col-sm-3">
                                <div className="card shadow-md border-0">
                                    <img src={doctor} className="card-img mx-5 my-3"/>
                                    <div className="card-tittle">
                                        <p className=" text-black  my-3 mb-3">
                                            <Link to="/medecins/list" className="nav-link  textNav" >
                                                Liste Médecins
                                            </Link>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row p-2 shadow-md border-0">
                            <ListRdv/>
                        </div>
                    </div>
                    <div className="col-3 my-3 col-lg-3 col-md-3 col-sm-3">
                        <div className="p-2 card cardUser"
                            style={{
                                backGroundImage : "card_bg"
                            }}
                        >
                            <UserCard/>
                        </div>
                        <div className="border-0 card my-4">
                            <h4 className="my-1">Liste des Médecins</h4>
                            <MedecinList/>
                        </div>
                    </div>
                </div>



        </div>
    )
}
export default Accueil;