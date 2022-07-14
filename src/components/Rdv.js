import CardPatient from "./CardPatient";
import PatientAdd from "./PatientAdd";
import {useEffect, useState} from "react";
import axios from "axios";
import NavbarPatient from "./layout/NavbarPatient";
import RdvAdd from "./RdvAdd"
import FicheRdv from "./FicheRdv"
import HeaderRdv from "../components/HeaderRdv"


const Rdv = () =>{
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/rendez-vous')
            .then((response)=>setData(response.data))
    },[])
    return(
        <div className="row m-auto">
            <div className="d-flex py-2 justify-content-between">
                <h2>Gestion Rendez-vous</h2>
                <div><HeaderRdv/></div>
            </div>
            <div className="col-6">
                <RdvAdd/>
            </div>
            <div className="col-6  h-25"   >
            </div>
        </div>
    )
}
export default Rdv;