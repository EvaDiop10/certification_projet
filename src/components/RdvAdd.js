import {useEffect, useState, useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import CardPatient from "./CardPatient";
const RdvAdd = () =>{
    let FormRef = useRef(null);
    let navigate = useNavigate()

    const valeur = [
        'effectué',
        'reporté',
        'refusé'
    ]
    const list = valeur.map((index,valeur)=>{
        return {key:valeur,value:index}
    })

    const valeur1 = [
        "1",
        "0"
    ]
    const list1 = valeur1.map((index,valeur)=>{
        return {key:valeur,value:index}
    })


    const [rdv, setRdv] = useState({
        date:"",
        heure:"",
        type:"",
        description:"",
        confirmation:"",
        statut:"",
        patients_id:"",
    })

    const inputChange = (e)=> {
        setRdv(e.target.value)

    }

    function handleSubmit(e) {
        e.preventDefault()
        const form = new FormData(FormRef.current)
       const rdv = Object.fromEntries(form.entries())
        console.log(rdv)
        axios.post('http://127.0.0.1:8000/api/rendez-vous',rdv)
        navigate("/gestion_rendez-vous")
    }

    return(

        <div className="row">
            
        <div className=" ">
            <form className="form-control bg-white border-0 rounded-3 shadow-sm" onSubmit={handleSubmit} ref={FormRef}>
                <h3 className="p-4">Ajouter Rendez-vous</h3>
                <div className="row">
                    <div className="col-6">
                        <input className="input-group border border-success rounded-3 mb-3 p-1 " type="date" placeholder="date" name="date" onChange={inputChange} />
                    </div>
                    <div className="col-6">
                        <input className="input-group  border border-success rounded-3 mb-3 p-1" type="time" placeholder="heure" name="heure"onChange={inputChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 my-3">
                        <select placeholder="Statut Rendez vous" className="form-select border border-success rounded-3 mb-3" id="sexe" name="statut"onChange={inputChange}  >
                            <option className="" >Statut Rendez vous</option>
                            <option  value={list.value} >effectué</option>
                            <option value={list.value} >reporté</option>
                            <option value={list.value} >annulé</option>
                        </select>
                    </div>
                    <div className="col-6 my-3">
                        <select placeholder="confirmation" className="form-select border border-success rounded-3 mb-3" id="sexe" name="confirmation"onChange={inputChange}  >
                            <option className="">Confirmation Rendez vous</option>
                            <option  value={list1.value}>1</option>
                            <option value={list1.value}>0</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <select className="input-group border border-success rounded-3 mb-3 p-1"  placeholder="Type" name="type" onChange={inputChange} >
                            <option></option>
                            <option>Consultation</option>
                            <option>Visite médicale</option>
                        </select>
                    </div>
                    <div className="col-6 ">
                    <input className="input-group border border-success rounded-3 mb-4 p-1" placeholder="Patients id" name="patients_id"onChange={inputChange} />
                    </div>
                </div>
                    <textarea className="input-group my-3 border border-success rounded-3 mb-3 p-1"  placeholder="Description" name="description"onChange={inputChange} />
                <button className="my-3 btn btn-success fw-light border-success text-white  border border-success rounded-3 mb-3" >Ajouter Rendez-vous</button>
            </form>
        </div>
        </div>
    )
}
export default RdvAdd;