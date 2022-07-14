const HeaderRdv = () => {
    return(
        <div className='d-flex justify-content-between my-4'>
            <form className="d-flex ">
            <input className="form-control  border-success me-2 " type="search" placeholder="Rechercher patient" aria-label="Search"/>
            <button className="btn btn-outline-success border-5" type="submit">
                <i className="bi bi-search"></i>
            </button>
            </form>
            <button className="btn btn-white bg-white fw-light border-success text-success  border border-success rounded-3 mb-3">Liste des médecins</button>
            <button className="btn btn-success fw-light border-success text-white  border border-success rounded-3 mb-3">Gestion des rendez-vous</button>
        </div>
    )
}
export default HeaderRdv;