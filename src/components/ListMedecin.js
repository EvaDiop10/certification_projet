import {useEffect, useState} from "react";
import axios from "axios";
import TabPatient from "./TabPatient";
import NavbarPatient from "./layout/NavbarPatient";
import {useNavigate, Link} from "react-router-dom";
import CardMedecin from "./CardMedecin";
import TabMedecin from "./TabMedecin"


const ListMedecin = ()=>{

    const [data, setData] = useState([])
    const [specialites, setSpecialites] = useState({})

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/medecins')
           .then((response)=>setData(response.data))

        axios.get('http://127.0.0.1:8000/api/specialites')
            .then((response)=> {
                const trData = {}
                for (let sp of response.data){
                    trData[sp.id] = sp
                }
                setSpecialites(trData)
            })

    },[])
    return(
        <div className="container-fluid ">
            <Link to="/gestion_patients" className ="btn-success float-start">
                <i className="bi bi-arrow-left "></i>
            </Link>
            <h3>Liste des Medecin</h3>
               <div>
                   {data.map((medecin)=> {
                       medecin.specialite = specialites[medecin.specialites_id]
                          return <CardMedecin medecin={medecin} key={medecin.id}/>
                       }
                   )}
               </div>
        </div>
    )
}
export default ListMedecin;