import {useState, useEffect} from "react"
import axios from "../components/api/Axios"
import useRefreshToken from "../components/useRefreshToken"

const User = () => {
    const [users,setUsers] = useState()
    const refresh = useRefreshToken()
    useEffect(()=>{
        let isMonted = true;
        const controller = new AbortController()

        const getUsers = async () =>{
            try {
                const response = await axios.get('/users',{
                    signal:controller.signal
                })
                console.log(response.data)
                isMonted && setUsers(response.data)
            }catch (err){
                console.log(err)
            }
        }
        getUsers()
        
        return () =>{
            isMonted = false;
            controller.abort();
        }
    },[])

    return(
        <article>
            <h2>Liste des utilisateurs</h2>
            {users?.length
                ?(
                    <ul>
                        {users.map((user , i)=>
                        <li key={i}>{user?.name}</li>
                        )}
                    </ul>
                ): <p>Pas d'utilisateurs à afficher</p>
            }
            <button onClick={()=>refresh()}>Refresh</button>
            <br/>
        </article>
    )
}
export default User;