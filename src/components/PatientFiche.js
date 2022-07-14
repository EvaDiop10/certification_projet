import {useEffect, useState} from "react";
import  axios from "axios"
import  {useParams ,useNavigate} from 'react-router-dom'

const PatientFiche = ()=>{
    let {id} = useParams()
    let navigate = useNavigate()

    const [patient, setPatient] = useState({
        nom:"",
        prenom:"",
        sexe:"",
        date_naissance:"",
        adresse:"",
        fonction:"",
        CMU:"",
        users_id:"",
        telephone:""
    })

    useEffect(()=>{
       loadPatient()
    },[])

    const loadPatient = async () => {
        const result = await axios.get(`http://127.0.0.1:8000/api/patients/${id}`);
        setPatient(result.data)
    }

    return(
        <div className="row">
        <div className="col-8 p-4">
            <h3>Fiche Patient</h3>
            <div className="card p-4">
                <h4>Dossier:DSN{patient.id}</h4>
                <div className="card fiche_patient">
                    <table className="table table-hover ">
                        <thead>
                        <tr>

                            <th scope="col"  >Nom</th>
                            <th scope="col">Prénom</th>
                            <th scope="col">Fonction</th>
                            <th scope="col">Date de naissance</th>
                            <th scope="col">Téléphone</th>
                            <th scope="col">adresse</th>
                            <th scope="col">CMU</th>
                            <th scope="col">User_id</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{patient.nom}</td>
                            <td>{patient.prenom}</td>
                            <td>{patient.fonction}</td>
                            <td>{patient.date_naissance}</td>
                            <td>{patient.telephone}</td>
                            <td>{patient.adresse}</td>
                            <td>{patient.CMU}</td>
                            <td>{patient.users_id}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
}
export default PatientFiche;