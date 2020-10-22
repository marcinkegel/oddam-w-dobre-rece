import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";
import {Link as LinkScroll} from "react-scroll"
import Decoration from "./Decoration";
import ButtonBox from "./ButtonBox";
const HomeNavHeader = () => {

    return (
        <div className="header--container">
            <div className="header--background--container"></div>
            <div className="header--text--container">
                <nav className="header--loginNav">
                    <Link className="header--loginNav--item" to={""}>Zaloguj się</Link>
                    <Link className="header--loginNav--item" to={""}>Załóż konto</Link>

                </nav>
                <nav className="header--homeNav">
                    <LinkScroll className="header--homeNav--item" to={""}>Start</LinkScroll>
                    <LinkScroll className="header--homeNav--item" to={""}>O co chodzi?</LinkScroll>
                    <LinkScroll className="header--homeNav--item" to={""}>O nas</LinkScroll>
                    <LinkScroll className="header--homeNav--item" to={""}>Fundacje i organizacje</LinkScroll>
                    <LinkScroll className="header--homeNav--item" to={""}>Kontakt</LinkScroll>
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