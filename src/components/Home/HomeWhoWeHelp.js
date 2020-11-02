import React, {useState} from 'react';
import Decoration from "../Decoration";
import HomeFoundations from "./HomeFoundations";
import HomeOrganisations from "./HomeOrganisations";
import HomeLocals from "./HomeLocals";


const HomeWhoWeHelp = () => {

    const [selectedItem, setSelectedItem] = useState("foundations")
    
    const handleSelect= (e)=> {
        setSelectedItem(e.target.name)
    }
    
    return (
        <div id="help" className="homeWhoWeHelp--container">
            <h2 className="homeWhoWeHelp--header">Komu Pomagamy?</h2>
            <Decoration/>
            <div className="homeWhoWeHelp--options">
                <button name="foundations" onClick={e=>handleSelect(e)} className="homeWhoWeHelp--options--item">Fundacjom</button>
                <button name="organisations" onClick={e=>handleSelect(e)} className="homeWhoWeHelp--options--item">Organizacjom pozarządowym</button>
                <button name="locals" onClick={e=>handleSelect(e)} className="homeWhoWeHelp--options--item">Lokalnym zbiórkom</button>
            </div>
            <div className="homeWhoWeHelp--selected--option--container">
                {(selectedItem=== "foundations") && <HomeFoundations/>}
                {(selectedItem=== "organisations") && <HomeOrganisations/>}
                {(selectedItem=== "locals") && <HomeLocals/>}
            </div>
        </div>
    );

}

export default HomeWhoWeHelp;