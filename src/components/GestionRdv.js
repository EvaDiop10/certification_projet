import PatientAdd from "./PatientAdd";
import ListRdv from "./ListRdv";
import PatientFiche from "./PatientFiche";
import RdvAdd from "./RdvAdd"
import FicheRdv from "./FicheRdv"
import HeaderRdv from "./HeaderRdv"

const GestionRdv = () =>{
    return(
        <div className="row">
            <HeaderRdv/>
            <div className=" ">
                <ListRdv/>
            </div>
            <div className="col-4">
                <RdvAdd/>
            </div>
            <div className="col-8">
            </div>
            <div>
                Liste Medecins
            </div>
        </div>
    )
}
export default GestionRdv;