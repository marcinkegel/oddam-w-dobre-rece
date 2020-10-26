import React, {useState, useEffect} from 'react';
import Decoration from "../Decoration";
import ButtonBox from "../ButtonBox";

const HomeSimpleSteps = () => {

    return (
        <div id="simpleSteps" className="HomeSimpleSteps--container">
            <h2 className="HomeSimpleSteps--header">Wystarczą 4 proste kroki</h2>
            <Decoration/>
            <div className="HomeSimpleSteps--steps--container">
                <div className="HomeSimpleSteps--step">
                    <h4 className="HomeSimpleSteps--step--title HomeSimpleSteps--step--title--1">Wybierz rzeczy</h4>
                    <p h4 className="HomeSimpleSteps--step--text">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="HomeSimpleSteps--step">
                    <h4 className="HomeSimpleSteps--step--title HomeSimpleSteps--step--title--2">Spakuj je</h4>
                    <p h4 className="HomeSimpleSteps--step--text">skorzystaj z worków na śmieci</p>
                </div>
                <div className="HomeSimpleSteps--step">
                    <h4 className="HomeSimpleSteps--step--title HomeSimpleSteps--step--title--3">Zdecyduj komu chcesz pomóc</h4>
                    <p h4 className="HomeSimpleSteps--step--text">wybierz zaufane miejsce</p>
                </div>
                <div className="HomeSimpleSteps--step">
                    <h4 className="HomeSimpleSteps--step--title HomeSimpleSteps--step--title--4">Zamów kuriera</h4>
                    <p h4 className="HomeSimpleSteps--step--text">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <ButtonBox text="oddaj rzeczy"/>
        </div>
    );

}

export default HomeSimpleSteps;