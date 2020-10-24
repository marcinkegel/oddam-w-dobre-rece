import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Decoration from "./Decoration";

const Register = () => {
    const [form, setForm]= useState({
        email:"",
        password:"",
        passwordRepeat:""
    })

    const [passwordError, setPasswordError] = useState(null);
    const [passwordRepeatError, setPasswordRepeatError] = useState(null);
    const [emailError, setEmailError] = useState(null);

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
        if (!form.passwordRepeat || form.passwordRepeat.length<6 || (form.password !== form.passwordRepeat)) {
            setPasswordRepeatError('Hasło niezgodne z podanym wyżej');
            return false;
        } else {
            setPasswordRepeatError(null);
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

    const handleRegister = e=>{
        e.preventDefault()
        if (validate()){
            console.log("zarejestrowano")
        }

    }



    return (
        <div className="register--container">
            <nav className="register--nav">
                <Link className="register--nav--item" to={"/"}>Start</Link>
                <Link className="register--nav--item" to={"/logowanie"}>Zaloguj się</Link>
            </nav>
            <div className="register--form--container">
                <h2 className="register--form--header">Załóż konto</h2>
                <Decoration/>
                <form className="register--form" onSubmit={e=>handleRegister(e)}>
                    <div className="register--form--input--container">
                        <label className="register--form--element">Email
                            <input className={emailError ? "register--form--input register--form--input--error" : "register--form--input"} type="email" name="email" value={form.email} onChange={handleChange}/>
                            {emailError &&
                            <div className="register--form--error">
                                {emailError}
                            </div>
                            }
                        </label>
                        <label className="register--form--element">Hasło
                            <input className={passwordError ? "register--form--input register--form--input--error" : "register--form--input"} type="password" name="password" value={form.password} onChange={handleChange}/>
                            {passwordError &&
                            <div className="register--form--error">
                                {passwordError}
                            </div>
                            }
                        </label>
                        <label className="register--form--element">Powtórz hasło
                            <input className={passwordRepeatError ? "register--form--input register--form--input--error" : "register--form--input"} type="password" name="passwordRepeat" value={form.passwordRepeat} onChange={handleChange}/>
                            {passwordRepeatError &&
                            <div className="register--form--error">
                                {passwordRepeatError}
                            </div>
                            }
                        </label>
                    </div>
                    <div className="register--form--btn--container">
                        <Link className="register--form--btn" to={"/logowanie"}>Zaloguj się</Link>
                        <button className="register--form--btn" type="submit">Załóż Konto</button>

                    </div>
                </form>
            </div>
        </div>
    );

}

export default Register;