import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import User from '../asset/Vector.png'
import iconUser from '../App.css'

const CardPatient = (props) => {
    let {patient}= props
    return(
        <section className="card mb-3 shadow-sm border-0 rounded-3 container-fluid" >
            <div className="row g-0">
                <div className="col-md-4 p-4">
                    <i className="bi bi-person-circle text-success w-100 iconUser h1"></i>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h6 className="card-title fs-5">DOSSIER:DPN</h6>
                        <p className="card-text"></p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-around p-2">
                        <Link className=" btn btn-success mx-5"  to="">Modifier</Link>
                        <Link className=" btn btn-danger " to="">Supprimer</Link>
                    </div>
                </div>
            </div>
        </section>
        )
}
export default CardPatient;