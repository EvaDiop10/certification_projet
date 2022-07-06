import {Link} from "react-router-dom";

const Navbar = () =>{
    return(
        <div>
            <nav>
                <img/>
                <ul>


                    <li>
                        <Link to="patients/add">Ajouter Patient</Link>
                    </li>


                </ul>
            </nav>
        </div>
    )
}
export default Navbar;