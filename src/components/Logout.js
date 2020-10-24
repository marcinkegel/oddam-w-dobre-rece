import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Decoration from "./Decoration";

const Logout = () => {

    return (
        <div className="logout--container">
            <nav className="logout--nav">
                <Link className="logout--nav--item" to={"/"}>Start</Link>
                <Link className="logout--nav--item" to={"/logowanie"}>Zaloguj Się</Link>
                <Link className="logout--nav--item" to={"/rejestracja"}>Załóż Konto</Link>
                
            </nav>
            <div className="logout--info--container">
                <h2 className="logout--info--header">Wylogowanie nastąpiło <br/> pomyślnie</h2>
                <Decoration/>
                <Link className="logout--info--btn" to={"/"}>Strona Główna</Link>

            </div>
        </div>
    );

}

export default Logout;