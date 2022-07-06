import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import CardPatient from "./CardPatient";

const PatientAdd = () =>{
    let navigate = useNavigate()

    const [nom, setNom]= useState("")
    const [prenom, setPrenom]= useState("")
    const [sexe, setSexe]= useState("")
    const [date_naissance, setDate]= useState("")
    const [adresse, setAdresse]= useState("")
    const [fonction, setFonction]= useState("")
    const [CMU, setCmu]= useState("")
    const [users_id, setUser]= useState("")
    const [telephone, setTelephone]= useState("")

   const valeur = [
       'Homme',
       'Femme',
       'autres'
   ]
    const list = valeur.map((index,valeur)=>{
        return {key:valeur,value:index}
    })


    function handleNom(e) {
        setNom(e.target.value)
    }

    function handlePrenom(e) {
        setPrenom(e.target.value)
    }

    function handleSexe(e) {
        setSexe(e.target.value)
    }

    function handleDate(e) {
        setDate(e.target.value)
    }

    function handleAdresse(e) {
        setAdresse(e.target.value)
    }

    function handleTel(e) {
        setTelephone(e.target.value)
    }

    function handleFonction(e) {
        setFonction(e.target.value)
    }

    function handleCmu(e) {
        setCmu(e.target.value)
    }

    function handleUser(e) {
        setUser(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        let patient = {nom,prenom,sexe,date_naissance,adresse,fonction,CMU,users_id,telephone}
        axios.post('http://127.0.0.1:8000/api/patients',patient)
        navigate("patients")
    }

    return(
        <div className="  p-1">
            <form className="form-control bg-white border-0 rounded-3 shadow-sm" onSubmit={handleSubmit}>
                <h3 className="p-4">Ajouter Patient</h3>
                <div className="row">
                    <div className="col-6">
                        <input className="input-group border border-success rounded-3 mb-3 p-1" placeholder="Nom" name="nom" onChange={handleNom} value={nom}/>
                    </div>
                    <div className="col-6">
                        <input className="input-group border border-success rounded-3 mb-3 p-1" placeholder="Prenom" name="prenom"onChange={handlePrenom}  value={prenom}/>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-6">
                            <select placeholder="Sexe" className="form-select border border-success rounded-3 mb-3" id="sexe" name="sexe"onChange={handleSexe}  >
                                <option className=""></option>
                                <option  value={list.value} >Homme</option>
                                <option value={list.value} >Femme</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <input type="date" className="input-group border border-success rounded-3 mb-3 p-1" placeholder="date de naissance" name="date_naissance "onChange={handleDate} value={date_naissance}/>
                        </div>
                    </div>
                <input className="input-group border border-success rounded-3 mb-4 p-1" placeholder="Adresse" name="adresse"onChange={handleAdresse} value={adresse}/>
                <input className="input-group border border-success rounded-3 mb-4 p-1" placeholder="Telephone" name="telephone"onChange={handleTel} value={telephone}/>
                <input className="input-group border border-success rounded-3 mb-4 p-1" placeholder="Fonction" name="fonction"onChange={handleFonction} value={fonction}/>
                <input className="input-group border border-success rounded-3 mb-4 p-1" placeholder="CMU" name="CMU" onChange={handleCmu} value={CMU}/>
                <input className="input-group border border-success rounded-3 mb-4 p-1" placeholder="User id" name="users_id"onChange={handleUser} value={users_id}/>
                <button className=" btn btn-success fw-light border-success text-white  border border-success rounded-3 mb-3" >Ajouter Patient</button>
            </form>
        </div>
    )
}
export default PatientAdd;