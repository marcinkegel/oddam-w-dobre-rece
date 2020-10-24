import React, {useState, useEffect} from 'react';
import Decoration from "./Decoration";


const HomeWhoWeHelp = () => {

    const [selectedItem, setSelectedItem] = useState("foundations")


    const foundations = ()=>{
        return(
            <div>FUNDACJE</div>
        )
    }

    const organizations = ()=>{
        return(
            <div>Organizacja pozarządowe</div>
        )
    }

    const locals = ()=>{
        return(
            <div>Lokalne zbiórki</div>
        )
    }
    const handleSelect= (e)=> {
        setSelectedItem(e.target.name)
    }


    return (
        <div id="help" className="homeWhoWeHelp--container">
            <h2 className="homeWhoWeHelp--header">Komu Pomagamy?</h2>
            <Decoration/>
            <div className="homeWhoWeHelp--options">
                <button name="foundations" onClick={e=>handleSelect(e)} className="homeWhoWeHelp--options--item">Fundacjom</button>
                <button name="organizations" onClick={e=>handleSelect(e)} className="homeWhoWeHelp--options--item">Organizacjom pozarządowym</button>
                <button name="locals" onClick={e=>handleSelect(e)} className="homeWhoWeHelp--options--item">Lokalnym zbiórkom</button>
            </div>
            <div className="homeWhoWeHelp--selected--option--container">
                {(selectedItem=== "foundations") && foundations()}
                {(selectedItem=== "organizations") && organizations()}
                {(selectedItem=== "locals") && locals()}


            </div>
            
        </div>
    );

}

export default HomeWhoWeHelp;