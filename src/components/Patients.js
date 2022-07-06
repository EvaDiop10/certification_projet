import CardPatient from "./CardPatient";
import PatientAdd from "./PatientAdd";
import {useEffect, useState} from "react";
import axios from "axios";
import NavbarPatient from "./layout/NavbarPatient";

const Patients = () =>{
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/patients')
            .then((response)=>setData(response.data))
    },[])
    return(
    <div className="row m-auto">
        <div className="d-flex py-2 justify-content-between">
            <h2>Gestion Patient</h2>
            <div> <NavbarPatient/></div>
        </div>
        <div className="col-6">
            <PatientAdd/>
        </div>
        <div className="col-6  h-25"   >
            <div className="row">
                <div className=" scrollspy-example"  data-bs-spy="scroll" data-bs-offset="0">
                    <ul className=" " style={{height:"500px;",
                    overflowY:"scroll"}}data-bs-toggle="tooltip" data-bs-html="true">
                        {data.map((patient)=>(
                                <CardPatient patient={patient} key={patient.id}/>
                            )
                        )}
                    </ul>
                </div>
                <div className="row">
                </div>
        </div>
        </div>
    </div>


)
}
export default Patients;