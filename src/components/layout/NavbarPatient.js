const NavbarPatient = () =>{
    return(

                <form className="d-flex ">
                    <input className="form-control  border-success me-2 " type="search" placeholder="Rechercher patient" aria-label="Search"/>
                        <button className="btn btn-outline-success border-5" type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                </form>


    )
}
export default NavbarPatient;