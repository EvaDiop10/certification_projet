import {useEffect, useState} from "react";
import axios from "axios";
import TabPatient from "./TabPatient";
import NavbarPatient from "./layout/NavbarPatient";
import TabDoctor from "./TabDoctor"
import {useNavigate, Link} from "react-router-dom";



const DoctorList = ()=>{

    const [roles_id,setRoles] =  useState(false);


    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/users')
            .then((response)=>setData(response.data))
    },[])
    const handleAdd = (e)=>{
        e.preventDefault()
        //let medecin = {presence,etat,specialites_id,users_id}
        //axios.post('http://127.0.0.1:8000/api/medecins',medecin)
        //navigate("")
    }
    return(
        <div className="container-fluid ">
            <Link to="/" className ="btn-success float-start">
                <i className="bi bi-arrow-left "></i>
            </Link>
            <h3>Liste des Médecins</h3>
            <table className="table mx-auto ">
                <thead>
                {roles_id?(
                <tr>
                    <th scope="col">Nom et Prenom</th>
                    <th scope="col">etat</th>
                    <th scope="col">specialité</th>
                    <th scope="col">presence</th>
                    <th scope="col">users_id</th>
                </tr>
                       ) :(
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">role</th>
                        <th scope="col">action</th>
                    </tr>
                       )}
                </thead>
                <tbody className="mb-5 border-0 bg-white rounded-3" >
                {data.map((users)=>(
                        <TabDoctor users={users} key={users.id}/>
                    )
                )}
                </tbody>
            </table>
            <div>
                <button onClick={handleAdd} className="btn-success btn fw-light text-white" >
                    Ajouter Medecin
                </button>
            </div>
        </div>
    )
}
export default DoctorList;