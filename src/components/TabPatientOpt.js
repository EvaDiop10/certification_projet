import axios from "axios";
import  {BrowserRouter as Router, Link, Route, Routes,useNavigate} from "react-router-dom";

const TabPatientOpt = (props) =>{
    let {patient} = props
    const navigate = useNavigate();

    const handleAdd = (e) => {
        e.preventDefault()
        axios.get(`http://127.0.0.1:8000/api/patients/${patient.id}`)
        console.log(patient)

        navigate(`/ajouter_rendez-vous`)
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
                <td>{patient.nom}</td>
                <td>{patient.prenom}</td>
                <td>
                    <Link className="btn-modifier btn text-success  fw-light " to={`/ajouter_rendez-vous/${patient.id}`} aria-current="page" >
                        <i className="bi bi-calendar2-plus-fill  border py-2 px-3 rounded"></i>
                    </Link>
                    {/*<link to={`/ajouter_rendez-vous`}>*/}
                    {/*    <i onClick={handleAdd}  className="bi bi-calendar2-plus-fill"></i>*/}
                    {/*</link>*/}
                    <Link to={`/voir/${patient.id}`} >
                        <i onClick={handleSee}  className=" btn border   bi bi-three-dots-vertical text-black"></i>
                    </Link>
                </td>
            </tr>
        </>
    )
}
export default TabPatientOpt;