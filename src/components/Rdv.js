import CardPatient from "./CardPatient";
import PatientAdd from "./PatientAdd";
import {useEffect, useState} from "react";
import axios from "axios";
import NavbarPatient from "./layout/NavbarPatient";
import RdvAdd from "./RdvAdd"
import FicheRdv from "./FicheRdv"
import HeaderRdv from "../components/HeaderRdv"
import Dashboard from "../components/layout/Dashboard"



const Rdv = () =>{
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/rendez-vous')
            .then((response)=>setData(response.data))
    },[])
    return(
        <div className="row ">
            <div className="col-2">
                <Dashboard/>
            </div>
            <div className="col-4">
              <div>
                  <h2>Gestion Rendez-vous</h2>
                  <RdvAdd/>
              </div>

            </div>
            <div className="col-6">
                <FicheRdv/>
            </div>
        </div>
    )
}
export default Rdv;