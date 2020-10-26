import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";
import {Link as LinkScroll} from "react-scroll"
import Decoration from "../Decoration";
import ButtonBox from "../ButtonBox";

const HomeNavHeader = () => {

    return (
        <div id="start" className="header--container">
            <div className="header--background--container"></div>
            <div className="header--text--container">
                <nav className="header--loginNav">
                    <Link className="header--loginNav--item" to={"/logowanie"}>Zaloguj się</Link>
                    <Link className="header--loginNav--item" to={"/rejestracja"}>Załóż konto</Link>
                </nav>
                <nav className="header--homeNav">
                    <LinkScroll duration={700} smooth={true} spy={true} className="header--homeNav--item" to="start">Start</LinkScroll>
                    <LinkScroll duration={700} smooth={true} spy={true} className="header--homeNav--item" to="simpleSteps">O co chodzi?</LinkScroll>
                    <LinkScroll duration={700} smooth={true} spy={true} className="header--homeNav--item" to="about">O nas</LinkScroll>
                    <LinkScroll duration={700} smooth={true} spy={true} className="header--homeNav--item" to="help">Fundacje i organizacje</LinkScroll>
                    <LinkScroll duration={700} smooth={true} spy={true} className="header--homeNav--item" to="contact">Kontakt</LinkScroll>
                </nav>
                <h1 className="header--title"> Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <Decoration/>
                <div className="header--button--container">
                    <ButtonBox className="buttonBox" text="Oddaj rzeczy"/>
                    <ButtonBox className="buttonBox" text="Zorganizuj zbiórkę"/>
                </div>

            </div>

        </div>

    );

}

export default HomeNavHeader;