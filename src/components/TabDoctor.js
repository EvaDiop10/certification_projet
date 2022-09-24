import axios from "axios";
import  {BrowserRouter as Router, Link, Route, Routes,useNavigate} from "react-router-dom";

const TabDoctor = (props) =>{
    let {users} = props
    const navigate = useNavigate();

    const handleModifier = (e) => {
        e.preventDefault()
        axios.get(`http://127.0.0.1:8000/api/users/${users.id}`)
        navigate(`/users/edit/${users.id}/`)
    }

    const handleSupprimer = (e) => {
        e.preventDefault()
        axios.delete(`http://127.0.0.1:8000/api/users/${users.id}`)
    }

    const handleSee = (e) =>{
        e.preventDefault()
        axios.get(`http://127.0.0.1:8000/api/patients/${users.id}`)
        navigate(`/users/voir/${users.id}`)
    }



    return(
        <>
            <tr className="border  ">
                <th scope="row">{users.id}</th>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.roles_id}</td>
                <td>
                    <Link className="btn-modifier btn text-success  fw-light " to={`edit/${users.id}`} aria-current="page" >
                        <i className="bi bi-pencil-square "></i>
                    </Link>
                    <button onClick={handleSupprimer} className="btn-supprimer btn fw-light text-danger" to={`patients/edit/${users.id}`}>
                        <i className="bi  bi-trash-fill"></i>
                    </button>
                    <Link to={`/voir/${users.id}`} >
                        <i onClick={handleSee}  className=" btn border  bi bi-three-dots-vertical text-black"></i>
                    </Link>
                </td>
            </tr>
        </>
    )
}
export default TabDoctor;