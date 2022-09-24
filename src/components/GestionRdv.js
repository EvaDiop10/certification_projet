import PatientAdd from "./PatientAdd";
import ListRdv from "./ListRdv";
import PatientFiche from "./PatientFiche";
import RdvAdd from "./RdvAdd"
import FicheRdv from "./FicheRdv"
import HeaderRdv from "./HeaderRdv"
import Dashboard from "../components/layout/Dashboard"
import ListMedecin from "../components/ListMedecin"
import CardMedecin from "../components/CardMedecin"
import TabMedecin from "../components/TabMedecin"

const GestionRdv = () =>{
    return(
        <div className="row">
            <div className="col-2">
                <Dashboard/>
            </div>
            <div className="col-10 h-full">
                <HeaderRdv/>
                <ListRdv/>
                <div className="card my-4 border-0 d-flex flex-column shadow-sm">
                    <h4 className="my-1">Liste Medecins</h4>

                        <ListMedecin/>

                </div>
            </div>
        </div>
    )
}
export default GestionRdv;