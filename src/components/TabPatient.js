import axios from "axios";
import  {BrowserRouter as Router, Link, Route, Routes,useNavigate} from "react-router-dom";

const TabPatient = (props) =>{
    let {patient} = props
    const navigate = useNavigate();

    const handleModifier = (e) => {
        e.preventDefault()
        axios.get(`http://127.0.0.1:8000/api/patients/${patient.id}`)
        navigate(`/patients/edit/${patient.id}/`)
    }

    const handleSupprimer = (e) => {
        e.preventDefault()
       axios.delete(`http://127.0.0.1:8000/api/patients/${patient.id}`)
    }

    const handleSee = (e) =>{
        e.preventDefault()
        axios.get(`http://127.0.0.1:8000/api/patients/${patient.id}`)
        navigate(`/patients/voir/${patient.id}`)
    }



    return(
        <>
        <tr className="border  ">
            <th scope="row">DPN{patient.id}</th>
            <td>{patient.nom}</td>
            <td>{patient.prenom}</td>
            <td>
                <Link className="btn-modifier btn text-success  fw-light " to={`edit/${patient.id}`} aria-current="page" >
                    <i className="bi bi-pencil-square "></i>
                </Link>
                <button onClick={handleSupprimer} className="btn-supprimer btn fw-light text-danger" to={`patients/edit/${patient.id}`}>
                    <i className="bi  bi-trash-fill"></i>
                </button>
                <Link to={`/voir/${patient.id}`} >
                    <i onClick={handleSee}  className=" btn border  bi bi-three-dots-vertical text-black"></i>
                </Link>
            </td>
        </tr>
        </>
    )
}
export default TabPatient;