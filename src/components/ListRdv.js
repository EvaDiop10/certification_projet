import {useEffect, useState} from "react";
import axios from "axios";
import TabRdv from "./TabRdv";
import NavbarPatient from "./layout/NavbarPatient";

const ListRdv = ()=>{

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/rendez-vous')
            .then((response)=>setData(response.data))

    },[])
    return(
        <div className="container-fluid py-5">
            <table className="table mx-auto ">
                <thead>
                <tr>
                    <th scope="col">NUMERO RDV</th>
                    <th scope="col">DATE</th>
                    <th scope="col">HEURE</th>
                    <th scope="col">DESCRIPTION</th>
                    <th scope="col">TYPE</th>
                    <th scope="col">CONFIRMATION</th>
                    <th scope="col">STATUT</th>
                    <th scope="col">PATIENT_ID</th>
                </tr>
                </thead>
                <tbody className="mb-5 border-0 bg-white rounded-3" >
                {data.map((rdv)=>(
                        <TabRdv rdv={rdv} key={rdv.id}/>
                    )
                )}
                </tbody>
            </table>
        </div>
    )
}
export default ListRdv;