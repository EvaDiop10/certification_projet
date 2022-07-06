<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
>>>>>>> ba979d47f919e4998afd1673bfea14df5a76b81d
}

export default App;
