import React, {useState, useEffect} from 'react';
import Decoration from "./Decoration";

const Contact = () => {

    const [form, setForm]= useState({
        name:"",
        email:"",
        message:""
    })

    const [nameError, setNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [messageError, setMessageError] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submissionError, setSubmissionError] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };


    const resetForm = ()=>{
        setForm({
            name:"",
            email:"",
            message:""
        })
    }




    const validate = () => {
        let valid = true;
        if (!form.name || (form.name.indexOf(" ") !== -1)) {
            setNameError('Podane imię jest nieprawidłowe.');
            return false;
        } else {
            setNameError(null);
        }
        if (!form.email || form.email.indexOf("@") === -1) {
            setEmailError('Podany email jest nieprawidłowy');
            return false;
        } else {
            setEmailError(null);
        }
        if (!form.message || form.message.length<120) {
            setMessageError('Wiadomość musi mieć co najmniej 120 znaków');
            return false;
        } else {
            setMessageError(null);
        }
        return valid;
    }

    const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";

    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsSubmitted(false)
        if (validate()){

            fetch(API, {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setIsSubmitted(true);
                    resetForm()

                })
                .catch(error => {
                    console.log(error);
                    setIsSubmitted(false);
                    setSubmissionError(error)
                })
        }



    }



    return (
        <div id="contact" className="contact--container">
            <div className="contact--text--container">
                <h2 className="contact--header">Skontaktuj się z nami</h2>
                <Decoration/>
                <form className="contact--form" onSubmit={handleSubmit}>
                    {submissionError &&
                    <div className="contact--form--error">
                        {submissionError}
                    </div>
                    }
                    {isSubmitted &&
                    <div className="contact--form--sent">
                        Wiadomość została wysłana!<br/>
                        Wkrótce się skontaktujemy"
                    </div>
                    }


                    <div className="contact--form--group">
                        <label className="contact--form--element">Wpisz swoje imię
                            <input placeholder="Krzysztof" className={nameError ? "contact--form--input contact--form--input--error" : "contact--form--input"} type="text" name="name" value={form.name} onChange={handleChange}/>
                            {nameError &&
                            <div className="contact--form--error">
                                {nameError}
                            </div>
                            }
                        </label>

                        <label className="contact--form--element">Wpisz swój email
                            <input placeholder="abc@xyz.pl" className={emailError ? "contact--form--input contact--form--input--error" : "contact--form--input"} type="email" name="email" value={form.email} onChange={handleChange}/>
                            {emailError &&
                            <div className="contact--form--error">
                                {emailError}
                            </div>
                            }
                        </label>
                    </div>


                    <label className="contact--form--element message">Wpisz swoją wiadomość
                        <textarea  className={messageError ? "contact--form--input contact--form--input--error contact--form--element--textarea" : "contact--form--input contact--form--element--textarea"} name="message" value={form.message} onChange={handleChange} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                        {messageError &&
                        <div className="contact--form--error">
                            {messageError}
                        </div>
                        }
                    </label>

                    <button className="contact--form--btn" type="submit">Wyślij</button>

                </form>
            </div>
        </div>
    );

}

export default Contact;