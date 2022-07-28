import User from "./User"
import {Link} from "react-router-dom"


const  Medecin  = () => {
    return(
        <section>
            <h1>Tableau de bord Medecin</h1>
            <br/>
            <User/>
            <p>Vous devez avoir le role de médecin</p>
            <div>
                <Link to="/"></Link>
            </div>
        </section>
    )
}
export default Medecin;