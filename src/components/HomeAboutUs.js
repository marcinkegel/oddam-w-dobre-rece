import React, {useState, useEffect} from 'react';
import Decoration from "./Decoration";

const HomeAboutUs = () => {

    return (
        <div className="aboutUs--container">
            <div className="aboutUs--text">
                <h2 className="aboutUs--text--header">O nas</h2>
                <Decoration/>
                <p className="aboutUs--text--description">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className="aboutUs--text--signature"/>

            </div>
            <div className="aboutUs--image"/>
        </div>
    );

}

export default HomeAboutUs;