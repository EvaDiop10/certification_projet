import user from "../asset/Vector.png"

const MedecinList = () => {

    return(
        <div className="row   my-5">
            <div className="d-flex  flex flex-row mx-3">
                <img src={user} alt='' className="vector-user mx-3"/>
                <div className="mx-5">
                    nom
                </div>
                <div className=' d-flex '>
                    disponibilité
                </div>
            </div>
        </div>
    )
}
export default MedecinList;