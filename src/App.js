import ListPatient from "./components/ListPatient";
import PatientAdd from "./components/PatientAdd";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import PatientEdit from "./components/PatientEdit";
import Accueil from "./components/Accueil";
import GestionPatient from "./components/GestionPatient";
import Dashboard from "./components/layout/Dashboard";
import Patients from "./components/Patients";
import PatientFiche from "./components/PatientFiche";
import logo from './logo.svg';
import GestionRdv from '../src/components/GestionRdv'
import './App.css';
import Rdv from "../src/components/Rdv"
import FicheRdv from "../src/components/FicheRdv"

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
                        <Route path={`/patients/voir/:id`} element={<PatientFiche to={`/patients/voir/:id`}/>} ></Route>
                        <Route path="/gestion_rendez-vous" element={<GestionRdv to="gestion_rendez-vous"/> }></Route>
                        <Route path="/ajouter_rendez-vous" element={<Rdv to='ajouter_rendez-vous' /> }></Route>
                        <Route path={`/rendez-vous/voir/:id`} element={<FicheRdv to={`/rendez-vous/voir/:id`}/>} ></Route>

                    </Routes>
                </div>
            </div>
        </Router>
    );
}
export default App;
