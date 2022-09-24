import PatientAdd from "./PatientAdd";
import ListPatient from "./ListPatient";
import PatientFiche from "./PatientFiche";
import Dashboard from "./layout/Dashboard"
import CardPatient from "../components/CardPatient"
import {useEffect, useState} from "react";
import axios from "axios"
import PatientOpt from  "./PatientOpt"
import  {Link} from "react-router-dom";


const GestionPatient = () =>{
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/patients')
            .then((response)=>setData(response.data))
    },[])


    return(
        <div className="row">
            <div className="col-2">
                <Dashboard/>
            </div>
            <div className="col-10">
                <div className=" my-2 d-flex flex-row justify-content-between">
                        <h1>Gestion Patient</h1>
                        <form className="d-flex ">
                            <input className="form-control  border-success me-2 " type="search" placeholder="Rechercher patient" aria-label="Search"/>
                            <button className="btn btn-outline-success border-5" type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </form>
                </div>
               <div className="row py-2">
                   <div className="col-6">
                       <PatientAdd/>
                   </div>
                   <div className="col-6">
                       <div className="d-flex">
                           {/*<ul className=" " >*/}
                           {/*    {data.map((patient)=>(*/}
                           <CardPatient
                               //patient={patient} key={patient.id}
                           />
                           {/*    )*/}
                           {/*)}*/}
                           {/*</ul>*/}
                       </div>
                       <div className="d-flex bg-white shadow-sm  rounded-3 ">
                            <PatientOpt/>
                       </div>
                       <div>
                           <Link to="/patients/details" >
                               <button className="btn btn-success fw-light border-success text-white  border border-success rounded-3 mb-3">Voir tout</button>
                           </Link>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    )
}
export default GestionPatient;