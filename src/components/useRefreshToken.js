import axios from './api/Axios'
import useAuth from "./useAuth"
import {useNavigate} from "react-router-dom"

const useRefreshToken = () => {
    const {setAuth} = useAuth()

    const refresh = async () =>{
        const response = await axios.get('/rafraichir',{
            withCredentials: true
        })
        setAuth(prev =>{
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return{...prev, accesToken: response.data.accessToken}
        })
        return response.data.accesToken
    }
    return<div></div>;
};
export default useRefreshToken();