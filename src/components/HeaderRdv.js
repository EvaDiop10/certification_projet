import {Link} from "react-router-dom";


const HeaderRdv = () => {
    return(
        <div className='d-flex justify-content-between my-4 bg-white p-3 rounded-3 shadow-sm'>
            <form className="d-flex ">
            <input className="form-control  border-success me-2 " type="search" placeholder="Rechercher RDV" aria-label="Search"/>
            <button className="btn btn-outline-success border-5" type="submit">
                <i className="bi bi-search"></i>
            </button>
            </form>
            <button className="btn  btn-white bg-white fw-light border-success text-success  border border-success rounded-3 mb-3">Liste des médecins</button>
                <Link to="/ajouter_rendez-vous" className="text-decoration-none" >
                    <button className="btn btn-success text-decoration-none fw-light border-success text-white  border border-success rounded-3 mb-3">
                        Ajouter Rendez-vous
                    </button>
                </Link>
        </div>
    )
}
export default HeaderRdv;