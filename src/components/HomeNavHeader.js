import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";
import {Link as LinkScroll} from "react-scroll"
const HomeNavHeader = () => {

    return (
        <div className="header--container">
            <nav className="header--loginNav">
                <Link to={""}>Zaloguj się</Link>
                <Link to={""}>Załóż konto</Link>

            </nav>
            <nav className="header--homeNav">
                <LinkScroll to={""}>Start</LinkScroll>
                <LinkScroll to={""}>O co chodzi?</LinkScroll>
                <LinkScroll to={""}>O nas</LinkScroll>
                <LinkScroll to={""}>Fundacje i organizacje</LinkScroll>
                <LinkScroll to={""}>Kontakt</LinkScroll>
            </nav>

            <h1> Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
        </div>

    );

}

export default HomeNavHeader;