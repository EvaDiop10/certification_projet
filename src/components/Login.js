import {useEffect, useState, useRef, useContext} from "react";
import useAuth from "../components/useAuth"
import  { Link} from "react-router-dom";
import nurse from  '../asset/nurse-img.png'
import logo2 from '../asset/logo2.png'
import vector from "../asset/Vector.png"
import logo from '../asset/logo1.png'
import axios from "../components/api/Axios"
const LOGIN_URL = "/connexion";

const LoginForm = () =>{
    const {http,setToken} = useAuth();
    let useref = useRef()
    const errRef = useRef()

    const [user,setUser] = useState('');
    const [email,setEmail] =  useState('');
    const [password,setPassword] =  useState('');
    const [errMessage,setErrormessage] =  useState('');
    const [success,setSuccess] =  useState(false);

    useEffect(()=>{
        useref.current.focus();
    },[])

    useEffect(()=>{
        setErrormessage('');
    },[user,password])


    const submitForm = (e) => {
        e.preventDefault()
        try {
            console.log(email+''+ password)
            http.post("/connexion",{email:email,password:password})
                .then((response)=>{
                    setToken(response.data,response.data.accessToken)
                    console.log(response.data)
                })
        }catch (err){
            if(!err?.response){
                setErrormessage('Le serveur ne repond pas');
            }
            else if (err.response?.status === 400){
                setErrormessage('Email ou mot de passe incorrect!');
            }
            else if(err.response?.status === 401){
                setErrormessage('Pas autoriser');
            }
            else {
                setErrormessage('Connexion echoué');
            }
            errRef.current.focus();

    }


    // const handleSubmit = async (e)  =>{
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post(LOGIN_URL,
    //             JSON.stringify({email, password}),
    //         {
    //             headers:{'Content-type':'application/json'},
    //             withCredentials: false
    //         }
    //         );
    //         console.log(JSON.stringify(response?.data));
    //         const accessToken = response?.data.accessToken;
    //         const roles= response?.data.roles;
    //         setAuth({email,password,roles,accessToken})
    //         setUser('');
    //         setPassword('');
    //         setSuccess(true)
    //
    //     }
    // }
    }

    return (
        <>
            { success?(
                <section>
                    <h1>Vous etes connecté!</h1>
                    <br/>
                    <p>
                        <Link to="/">Accueil</Link>
                    </p>
                </section>
            ) : (
                <section className="formulaire d-flex container flex-column ">
                    <p ref={errRef} className={errMessage ? "errmsg": "offscreen"} aria-live="assertive">{errMessage}</p>
                    <h1>Connexion</h1>
                    <div className="row">
                        <div className="col-6 bg-white">
                            <div>
                                <img src={logo} alt="logo Hosto digital" className="logo "/>
                            </div>
                            <div>
                                <img src={vector} alt="logo Hosto digital" className="vector "/>
                            </div>
                            <form className="connexion-form " >
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label"></label>
                                    <input onChange={(e)=>setEmail(e.target.value)}
                                        //value={email}
                                           required
                                           name="email"
                                           placeholder="Email"
                                           type="email"
                                           className="form-control input "
                                           id="userEmailId"
                                           aria-describedby="emailHelp"
                                           ref={useref}
                                           autoComplete="off"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label"></label>
                                    <input onChange={(e)=>setPassword(e.target.value)}
                                        //value={password}
                                           required
                                           name="password"
                                           placeholder="Password"
                                           type="password"
                                           className="form-control input "
                                           id="userPasswordId"
                                           aria-describedby="emailHelp"
                                           ref={useref}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-success text-white  my-4 btn-connexion " onClick={submitForm}>CONNEXION</button>
                            </form>
                            <p>Vous n'avez pas de compte ?
                                <span>
                    <Link to="/inscription">S'incrire</Link>
                </span>
                            </p>

                        </div>

                        <div className="col-6 presentation">
                            <div className="row d-flex flex-row  ">
                                <div className="d-flex ">
                                    <img src={logo2} alt="logo Hostodigital" className="logo2 "/>

                                </div>
                                <div className="d-flex my-2">
                                    <img src={nurse} alt="image infirmière" className="nurse mx-4 nurse"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>

    )
}
export default LoginForm;