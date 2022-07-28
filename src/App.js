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
import RdvAdd from "../src/components/Rdv"
import FicheRdv from "../src/components/FicheRdv"
import Registrer from "../src/components/Registrer"
import Login from "../src/components/Login"
import  useAuth from "../src/components/useAuth"
import RdvEdit from "../src/components/RdvEdit"

function App() {
    // const {getToken} = useAuth();
    // if(!getToken()){
    //     return <LoginForm/>

    return (
        <Router>
            <div className="App row">
                <div className="">
                    <Routes>
                        <Route exact path="/" element={<Accueil to="/ "/> }></Route>
                        <Route path="/connexion" element={<Login to="/connexion"/>}></Route>
                        <Route path="/inscription" element={<Registrer to="/inscription"/>}></Route>
                        <Route path="/gestion_patients" element={<GestionPatient to="gestion_patients"/> }></Route>
                        <Route path="/patients/list" element={<ListPatient to="/patients/list "/>}></Route>
                        <Route path="/patients/details" element={<ListPatient to="/patients/details "/>}></Route>
                        <Route path="/ajouter_patients" element={<Patients to='ajouter_patients' /> }></Route>
                        <Route path={`patients/details/edit/:id`} element={<PatientEdit to={`patients/details/edit/:id`} />}></Route>
                        <Route path={`/patients/voir/:id`} element={<PatientFiche to={`/patients/voir/:id`}/>} ></Route>
                        <Route path="/gestion_rendez-vous" element={<GestionRdv to="gestion_rendez-vous"/> }></Route>
                        <Route path="/ajouter_rendez-vous" element={<RdvAdd to='ajouter_rendez-vous' /> }></Route>
                        <Route path={`rendez-vous/edit/:id`} element={<RdvEdit to={`rendez-vous/edit/:id`} />}></Route>
                        <Route path={`/rendez-vous/voir/:id`} element={<FicheRdv to={`/rendez-vous/voir/:id`}/>} ></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
export default App;
