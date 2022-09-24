import axios from "axios";
import  {BrowserRouter as Router, Link, Route, Routes,useNavigate} from "react-router-dom";

const TabRdv = (props) =>{
    let {rdv} = props
    const navigate = useNavigate();

    const handleAdd = (e) => {
        e.preventDefault()
        axios.post(`http://127.0.0.1:8000/api/rendez-vous/`)
        navigate(`/rendez-vous/`)
    }



    const handleSee = (e) =>{
        e.preventDefault()
        axios.get(`http://127.0.0.1:8000/api/rendez-vous/${rdv.id}`)
        navigate(`/rendez-vous/voir/${rdv.id}`)
     }

    return(
        <>
           
            <tr className="border-0 bg-white ">
                <th scope="row">RDV NO:{rdv.id}</th>
                <td>{rdv.date}</td>
                <td>{rdv.heure}</td>
                <td>{rdv.description}</td>
                <td>{rdv.type}</td>
                <td>{rdv.confirmation == 0 ? "Validé" : "Refusé" }</td>
                <td>{rdv.statut}</td>
                <td>{rdv.patients_id}</td>
                <td>
                    {/*<Link className="btn-modifier btn text-success  fw-light " to={`edit/${rdv.id}`} aria-current="page" >*/}
                    {/*    <i onClick={handleModifier} className="bi bi-pencil-square "></i>*/}
                    {/*</Link>*/}
                   
                    <Link to={`/voir/${rdv.id}`} >
                        <i onClick={handleSee}  className=" btn border  bi bi-three-dots-vertical text-black"></i>
                    </Link>
                </td>
            </tr>
        </>
    )
}
export default TabRdv;