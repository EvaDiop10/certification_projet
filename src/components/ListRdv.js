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
        <div className="bg-white p-1 rounded-3 shadow-sm h-full">
            <h4 className="text-bold">Liste de Rendez-vous</h4>
            <table className="table  border-0">
                <thead>
                <tr>
                    <th scope="col">numéro</th>
                    <th scope="col">date</th>
                    <th scope="col">heure</th>
                    <th scope="col">description</th>
                    <th scope="col">type</th>
                    <th scope="col">confirmation</th>
                    <th scope="col">statut</th>
                    <th scope="col">patient</th>
                    <th scope="col">action</th>
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