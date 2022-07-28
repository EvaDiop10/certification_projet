import {useEffect, useState, useRef} from "react";
import  { Link} from "react-router-dom";
import axios from './api/Axios';
import input from '../App.css'

const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9*_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const CONFIRMPASSWOR_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const INSCRIPTION_URL = '/inscription'

const Registrer = () =>{
    const userRef = useRef()
    const errRef = useRef()

    const [name, setName] = useState('');
    const [validName, setValidName] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [password_confirmation, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [roles_id, setRole] = useState('');


    const [errMessage,setErrormessage] =  useState('');
    const [success,setSuccess] =  useState(false);

    useEffect(()=>{
        userRef.current.focus();
    },[])

    useEffect(()=>{
        const result = NAME_REGEX.test(name);
        console.log(result);
        console.log(name);
        setValidName(result)
    },[name])

    useEffect(()=>{
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result)
    },[email])



     useEffect(()=>{
         const result = PASSWORD_REGEX.test(password);
         console.log(result);
        console.log(password);
        setValidPassword(result)
        const match = password == password_confirmation;
        setValidMatch(match);
         console.log(password_confirmation)
     },[password, password_confirmation
    ])

     useEffect(()=>{
        setErrormessage('')
     },[name,email,password,password_confirmation])

    console.log(validName,validPassword,validMatch )
    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = NAME_REGEX.test(name)
        const v2 = PASSWORD_REGEX.test(password)
        if(!v1 || !v2){
            setErrormessage("invalid Entry");
            return ;
        }
        console.log(name,email,password)
        try {
            const response = await axios.post(INSCRIPTION_URL,
                JSON.stringify({name,email,password,password_confirmation,roles_id}),
                {
                        headers:{'Content-type':'application/json',
                            "access-control-allow-Origin" : "*",},
                        withCredentials: false
                }
            );
            console.log(response.data)
            console.log(response.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);

        }
       catch(err){
            if(!err?.response){
                setErrormessage('le serveur ne repond pas !')
            }
            else if (!err.response?.status === 409){
               setErrormessage(`le nom d'utilisateur existe deja`)
            }
            else {
                setErrormessage("l'inscription à échouer ")
            }
            errRef.current.focus();
        }
    }

    return(
    <>
        {
            success ? (
                <section>
                    <h1>Inscription reussie !</h1>
                    <p>
                        <Link to="/connexion">Connectez-vous</Link>
                    </p>
                </section>
            ):(
        <section className="row m-auto registrer container  p-5">
            <div className=''>
            <p ref={errRef} className={errMessage ? "errmsg" : "offscreen"} aria-live="assertive">{errMessage}</p>
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit} className="p-5">
                <div>
                    <div className="mb-3">
                        <label className="mx-2">
                            <span className={validName ? "valid" : "d-none"}>
                                <i className="bi bi-check-all text-success"></i>
                            </span>
                                    <span className={validName || !name ? "d-none" : "invalid"}>
                                 <i className="bi bi-x-circle-fill text-danger"></i>
                            </span>
                        </label>
                        <input className="form-control input align-center"
                            placeholder="Name"
                            type="react"
                            id="userName"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e)=> setName(e.target.value)}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={()=>setNameFocus(true)}
                            onBlur={()=>setNameFocus(false)}
                        />
                        {/*<p id="uidnote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>*/}
                        {/*    4 à 24 caractères <br/>*/}
                        {/*    Doit commencer avec une lettre <br/>*/}
                        {/*    letter, numbers , underscores hypmen allowed*/}
                        {/*</p>*/}
                    </div>
                </div>

                <div>
                    <div  className="mb-3">
                        <label className="mx-2">
                            <span className={validEmail ? "valid" : "d-none"}>
                                <i className="bi bi-check-all text-success"></i>
                            </span>
                            <span className={validEmail || !email ? "d-none" : "invalid"}>
                                 <i className="bi bi-x-circle-fill text-danger"></i>
                            </span>
                        </label>
                        <input className="form-control input"
                            placeholder=" Email"
                            type="react"
                            id="userName"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e)=> setEmail(e.target.value)}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={()=>setEmailFocus(true)}
                            onBlur={()=>setEmailFocus(false)}
                        />
                        {/*<p id="confirmnote" className={matchFocus && !validMatch  ? "instruction" : "offscreen"}>*/}
                        {/*    4 à 24 caractères <br/>*/}
                        {/*    Doit etre identique au mot de passe ! <br/>*/}
                        {/*</p>*/}
                    </div>
                </div>

                <div>
                    <div  className="mb-3">
                        <label>
                            <span className={validPassword ? "valid" : "d-none"}>
                                <i  className="bi bi-check-all text-success"></i>
                            </span>
                                    <span className={validPassword || !password ? "d-none" : "invalid"}>
                                 <i className="bi bi-x-circle-fill text-danger"></i>
                            </span>
                        </label>
                        <input className="form-control input"
                            placeholder="Mot de passe"
                            type="password"
                            id="password"
                            onChange={(e)=> setPassword(e.target.value)}
                            required
                            aria-invalid={validPassword ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={()=>setPasswordFocus(true)}
                            onBlur={()=>setPasswordFocus(false)}
                        />
                        {/*<p id="pwdnote" className={passwordFocus && !validPassword  ? "instructions" : "offscreen"}>*/}
                        {/*    4 à 24 caractères <br/>*/}
                        {/*    Doit avoir avec un caractère spécial <br/>*/}
                        {/*    Doit contenir une lettre majuscule , un nombre<br/>*/}
                        {/*</p>*/}
                    </div>
                </div>

                <div>
                    <div>
                        <label>

                    <span className={validMatch && password_confirmation ? "valid" : "d-none"}>
                        <i className="bi bi-check-all text-success"></i>
                    </span>
                            <span className={validMatch || !password_confirmation ? "d-none" : "invalid"}>
                         <i className="bi bi-x-circle-fill text-danger"></i>
                    </span>
                        </label>
                        <input className="form-control  input"
                            placeholder='Confirmer mot de passe'
                            type="password_confirm"
                            id="confirmPassword"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e)=> setMatchPassword(e.target.value)}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={()=>setMatchFocus(true)}
                            onBlur={()=>setMatchFocus(false)}
                        />
                        {/*<p id="confirmnote" className={matchFocus && !validMatch  ? "instructions" : "offscreen"}>*/}
                        {/*    4 à 24 caractères <br/>*/}
                        {/*    Doit etre identique au mot de passe ! <br/>*/}
                        {/*</p>*/}
                    </div>
                </div>

                <div>
                    <div>
                        <select className="form-select input my-4" onChange={(e)=>setRole(e.target.value)}>
                            <option></option>
                            <option value={1}>Medecin</option>
                            <option value={2}>Secretaire</option>
                            <option value={3}>Admin</option>
                        </select>
                    </div>
                </div>

                <div className=" my-4">
                    <button id="btn" className='btn btn-success'
                        //disabled={!validName || !validPassword || validMatch ? true : false}
                    >
                        Incription
                    </button>
                </div>

            </form>
            <p>
                Vous etes deja inscrit ? <br/>
                <span>
                    <Link to="/connexion">Connectez-vous</Link>
                </span>
            </p>
        </div>
        {/*<div className="col-6 presentation">*/}
        {/*    <div className="row d-flex flex-row  ">*/}
        {/*        <div className="d-flex ">*/}
        {/*            <img src={logo2} alt="logo Hostodigital" className="logo2 "/>*/}

        {/*        </div>*/}
        {/*        <div className="d-flex my-2">*/}
        {/*            <img src={nurse} alt="image infirmière" className="nurse mx-4 nurse"/>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        </section>
        )}
        </>
    )
}
export default Registrer;