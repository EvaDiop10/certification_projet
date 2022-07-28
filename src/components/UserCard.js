import user from "../asset/Vector.png"

const UserCard = () => {
    return(
        <div className=''>
           <div className="card  user-bg p-4 mx-5 my-5"
               
           >
               <div>
                   <img src={user} alt='' className=""/>
               </div>
               <div>
                   Eva diop
               </div>
               <div>
                   Secretaire
               </div>
           </div>
        </div>
    )
}
export default UserCard;