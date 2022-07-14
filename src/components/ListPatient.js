import {useEffect, useState} from "react";
import axios from "axios";
import TabPatient from "./TabPatient";
import NavbarPatient from "./layout/NavbarPatient";

const ListPatient = ()=>{

    const [data, setData] = useState([])
    
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/patients')
            .then((response)=>setData(response.data))
    },[])
    return(
        <div className="container-fluid ">
            <h3>Liste des patients</h3>
            <table className="table mx-auto ">
                <thead>
                <tr>
                    <th scope="col">NUMERO DOSSIER</th>
                    <th scope="col">NOM</th>
                    <th scope="col">PRENOM</th>
                    <th scope="col">ACTION</th>
                </tr>
                </thead>
            <tbody className="mb-5 border-0 bg-white rounded-3" >
                {data.map((patient)=>(
                        <TabPatient patient={patient} key={patient.id}/>
                    )
                )}
            </tbody>
            </table>
        </div>
    )
}
export default ListPatient;