const Card = (props) => {
    let {user} = props
    return(
        <div>
            <div className="card" style="width: 18rem;">
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">{user.email}</p>
                    </div>
            </div>
        </div>
    )
}
export default Card;