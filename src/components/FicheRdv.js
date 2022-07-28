import {useEffect, useState} from "react";
import  axios from "axios"
import  {useParams ,useNavigate} from 'react-router-dom'

const FicheRdv = ()=>{
    let {id} = useParams()
    let navigate = useNavigate()

    const [rdv, setRdv] = useState({
        date:"",
        heure:"",
        description:"",
        type:"",
        confirmation:"",
        statut:"",
        patients_id:"",
    })

    useEffect(()=>{
        loadRdv()
    },[])

    const loadRdv = async () => {
        const result = await axios.get(`http://127.0.0.1:8000/api/rendez-vous/${id}
        `);
        setRdv(result.data)
    }

    return(
        <div className="row">
            <div className="">
                <h3>Fiche Rendez-vous</h3>
                <div className="card p-4">
                    <h4>Dossier:DSN{rdv.id}</h4>
                    <div className="card fiche_patient">
                        <table className="table table-hover ">
                            <thead>
                            <tr>
                                <th scope="col">DATE</th>
                                <th scope="col">HEURE</th>
                                <th scope="col">DESCRIPTION</th>
                                <th scope="col">TYPE RDV</th>
                                <th scope="col">STATUT</th>
                                <th scope="col">CONFIRMATION</th>
                                <th scope="col">PATIENTS_ID</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{rdv.date}</td>
                                <td>{rdv.heure}</td>
                                <td>{rdv.description}</td>
                                <td>{rdv.type}</td>
                                <td>{rdv.statut}</td>
                                <td>{rdv.confirmation}</td>
                                <td>{rdv.patients_id}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FicheRdv;