import ListPatient from "./components/ListPatient";
import PatientAdd from "./components/PatientAdd";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import PatientEdit from "./components/PatientEdit";
import Accueil from "./components/Accueil";
import GestionPatient from "./components/GestionPatient";
import Dashboard from "./components/layout/Dashboard";
import Patients from "./components/Patients";
function App() {

    return (
        <Router>
            <div className="App row">
                <div className="col-2">
                    <Dashboard/>
                </div>
                <div className="col-10">
                    <Routes>
                        <Route exact path="/" element={<Accueil to="/ "/> }></Route>
                        <Route path="/gestion_patients" element={<GestionPatient to="gestion_patients"/> }></Route>
                        <Route path="/patients/list" element={<ListPatient to="/patients/list "/>}></Route>
                        <Route path="/ajouter_patients" element={<Patients to='ajouter_patients' /> }></Route>
                        <Route path={`gestion_patients/edit/:id`} element={<PatientEdit to={`gestion_patients/edit/:id`} />}></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
