import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Decoration from "./Decoration";

const Login = () => {

    const [form, setForm]= useState({
        email:"",
        password:""
    })

    const [passwordError, setPasswordError] = useState(null);
    const [emailError, setEmailError] = useState(null);

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        return re.test(String(email).toLowerCase());
    }

    const validate = () => {
        let valid = true;
        if (!form.email || !validateEmail(form.email)) {
            setEmailError('Podany email jest nieprawidłowy');
            return false;
        } else {
            setEmailError(null);
        }
        if (!form.password || form.password.length<6) {
            setPasswordError('Podane hasło jest za krótkie');
            return false;
        } else {
            setPasswordError(null);
        }
        return valid;
    }






    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };

    const handleLogin = e=>{
        e.preventDefault()
        if (validate()){
            console.log("zalogowano")
        }

    }



    return (
        <div className="login--container">
            <nav className="login--nav">
                <Link className="login--nav--item" to={"/"}>Start</Link>
                <Link className="login--nav--item" to={"/rejestracja"}>Załóż Konto</Link>
            </nav>
            <div className="login--form--container">
                <h2 className="login--form--header">Zaloguj się</h2>
                <Decoration/>
                <form className="login--form" onSubmit={e=>handleLogin(e)}>
                    <div className="login--form--input--container">
                        <label className="login--form--element">Email
                            <input className={emailError ? "login--form--input login--form--input--error" : "login--form--input"} type="email" name="email" value={form.email} onChange={handleChange}/>
                            {emailError &&
                            <div className="login--form--error">
                                {emailError}
                            </div>
                            }
                        </label>
                        <label className="login--form--element">Hasło
                            <input className={passwordError ? "login--form--input login--form--input--error" : "login--form--input"} type="password" name="password" value={form.password} onChange={handleChange}/>
                            {passwordError &&
                            <div className="login--form--error">
                                {passwordError}
                            </div>
                            }
                        </label>
                    </div>
                    <div className="login--form--btn--container">
                        <Link className="login--form--btn" to={"/rejestracja"}>Załóż Konto</Link>
                        <button className="login--form--btn" type="submit">Zaloguj się</button>

                    </div>
                </form>
            </div>
        </div>
    );

}

export default Login;