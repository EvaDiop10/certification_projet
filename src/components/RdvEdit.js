import axios from "axios";
import  {useParams ,useNavigate} from 'react-router-dom'
import {useEffect, useRef, useState} from "react";
import PatientFiche from "./PatientFiche";



const RdvEdit = () => {
    let FormRef = useRef(null);
    let {id} = useParams()

    let navigate = useNavigate();
    const formRef = useRef(null);

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

    useEffect(()=>{
        loadRdv()
    },[])

    const loadRdv = async () => {
        const result = await axios.get(`http://127.0.0.1:8000/api/rendez-vous/${id}`);
        setRdv(result.data)
    }

    function handleEdit (e) {
        e.preventDefault()
        const form = new FormData(formRef.current);
        const rdv = Object.fromEntries(form.entries())
        axios.patch(`http://127.0.0.1:8000/api/rendez-vous/${id}`,rdv)
            .then((res) => console.log(res))

    }
    
    return(
        <div className="row">
            <div className=" ">
                <form className="form-control bg-white border-0 rounded-3 shadow-sm" onSubmit={handleEdit} ref={FormRef}>
                    <h3 className="p-4">Modifier Rendez-vous</h3>
                    <div className="row">
                        <div className="col-6">
                            <input className="input-group border border-success rounded-3 mb-3 p-1 " type="date" placeholder="date" name="date"  defaultValue={rdv.date} />
                        </div>
                        <div className="col-6">
                            <input className="input-group  border border-success rounded-3 mb-3 p-1" defaultValue={rdv.heure} type="time" placeholder="heure" name="heure" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 my-3">
                            <select placeholder="Statut Rendez vous"  className="form-select border border-success rounded-3 mb-3" id="sexe" name="statut"  >
                                <option  defaultValue={list.value} selected={rdv.statut == 'effectué' ? 'selected' : ''} >effectué</option>
                                <option defaultValue={list.value} selected={rdv.statut == 'reporté' ? 'selected' : ''}>reporté</option>
                                <option defaultValue={list.value} selected={rdv.statut == 'annulé' ? 'selected' : ''}>annulé</option>
                            </select>
                        </div>
                        <div className="col-6 my-3">
                            <select placeholder="confirmation"  className="form-select border border-success rounded-3 mb-3" id="sexe" name="confirmation"  >
                                <option  defaultValue={list1.value} selected={rdv.confirmation == 0 ? 'selected' : ''}>1</option>
                                <option defaultValue={list1.value} selected={rdv.confirmation == 1 ? 'selected' : ''}>0</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <select className="input-group border border-success rounded-3 mb-3 p-1"  placeholder="Type" name="type"  >
                                <option defaultValue={rdv.type} selected={rdv.confirmation == "Consultation" ? 'selected' : ''}>Consultation</option>
                                <option defaultValue={rdv.type} selected={rdv.confirmation == "Visite médicale" ? 'selected' : ''}>Visite médicale</option>
                            </select>
                        </div>
                        <div className="col-6 ">
                            <input className="input-group border border-success rounded-3 mb-4 p-1" defaultValue={rdv.patients_id} placeholder="Patients id" name="patients_id" />
                        </div>
                    </div>
                    <textarea className="input-group my-3 border border-success rounded-3 mb-3 p-1"  placeholder="Description" name="description" >{rdv.description}</textarea>
                    <button className="my-3 btn btn-success fw-light border-success text-white  border border-success rounded-3 mb-3" >Modifier Rendez-vous</button>
                </form>
            </div>
        </div>
    )
}
export default RdvEdit;