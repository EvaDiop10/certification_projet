import axios from "axios";
import  {useParams ,useNavigate} from 'react-router-dom'
import {useEffect, useRef, useState} from "react";
import PatientFiche from "./PatientFiche";



const PatientEdit = () => {
    let {id} = useParams()

    let navigate = useNavigate();
    const formRef = useRef(null);
    const valeur = [
        'Homme',
        'Femme',
        'autres'
    ]
    const list = valeur.map((index,valeur)=>{
        return {key:valeur,value:index}
    })


    const [patients, setPatient] = useState({
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

    //let {nom,prenom,sexe,date_naissance,adresse,fonction,CMU,users_id,telephone} = patient
    const loadPatient = async () => {
        const result = await axios.get(`http://127.0.0.1:8000/api/patients/${id}`);
        setPatient(result.data)
    }
    function handleEdit (e) {
        e.preventDefault()
        const form = new FormData(formRef.current);
        const patient = Object.fromEntries(form.entries())
         axios.patch(`http://127.0.0.1:8000/api/patients/${id}`,patient)
             .then((res) => console.log(res))
        navigate(`/patients/details/`)
    }

    return(
        <div className="row">
        <div className="col-4">
            <h3>Modifier Patient</h3>
            <form className="form-control bg-white border-0 rounded-3 shadow-sm" onSubmit={handleEdit} ref={formRef}>
                <div className="row">
                    <div className="col-6">
                        <input className="input-group border border-success rounded-3 mb-3 p-1" placeholder="Nom" name="nom" defaultValue={patients.nom}/>
                    </div>
                    <div className="col-6">
                        <input className="input-group border border-success rounded-3 mb-3 p-1" placeholder="Prenom" name="prenom" defaultValue={patients.prenom}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <select className=" form-select border border-success rounded-3 mb-3"   id="sexe" name="sexe">
                            <option>
                            </option>
                            <option defaultValue={list.value} selected={patients.sexe == 'Homme' ? 'selected' : ''} >Homme</option>
                            <option defaultValue={list.value} selected={patients.sexe == 'Femme' ? 'selected' : ''} >Femme</option>
                        </select>
                    </div>
                    <div className="col-8">
                        <input type="date" className="input-group border border-success rounded-3 mb-3 p-1" placeholder="date de naissance" name="date_naissance" value={patients.date_naissance}/>
                    </div>
                </div>
                <input className="input-group border border-success rounded-3 mb-4 p-1" placeholder="Adresse" name="adresse" defaultValue={patients.adresse}/>
                <input className="input-group border border-success rounded-3 mb-4 p-1" placeholder="Telephone" name="telephone" defaultValue={patients.telephone}/>
                <input className="input-group border border-success rounded-3 mb-4 p-1" placeholder="Fonction" name="fonction" defaultValue={patients.fonction}/>
                <input className="input-group border border-success rounded-3 mb-4 p-1" placeholder="CMU" name="CMU" defaultValue={patients.CMU}/>
                <input className="input-group border border-success rounded-3 mb-4 p-1" placeholder="User id" name="users_id" defaultValue={patients.users_id}/>
                <input className="btn btn-success fw-light border-success text-white  border border-success rounded-3 mb-3" type="submit" defaultValue="Modifier Patient"/>
            </form>
        </div>
        <div className="col-7">
            <PatientFiche/>
        </div>
        </div>
    )
}
export default PatientEdit;