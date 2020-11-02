import React, {useState, useEffect} from 'react';

const HomeOrganisations = () => {
    const [organisations, setOrganisations] = useState([
            {
                id: 0,
                name: "Organizacja “Lorem Ipsum 1”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
            },
            {
                id: 1,
                name: "Organizacja “Lorem Ipsum 2”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
            },
            {
                id: 2,
                name: "Organizacja “Lorem Ipsum 3”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
            },
            {
                id: 3,
                name: "Organizacja “Lorem Ipsum 4”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
            },
            {
                id: 4,
                name: "Organizacja “Lorem Ipsum 5”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
            },
            {
                id: 5,
                name: "Organizacja “Lorem Ipsum 6”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
            }
        ]

    );
    const [organisationsToDisplay, setOrganisationsToDisplay]= useState([]);
    
    const [pageCounter, setPageCounter] = useState(1);

    useEffect(()=>{
        filterOrganisations()
    },[pageCounter])



    const filterOrganisations = ()=>{
        setOrganisationsToDisplay([organisations[(pageCounter * 3)-3]]);
        if (organisations[(pageCounter * 3)-2]) {
            setOrganisationsToDisplay(prevState => {
                return [...prevState, organisations[(pageCounter * 3) - 2]]
            })
        }
        if (organisations[(pageCounter * 3)-1]) {
            setOrganisationsToDisplay(prevState => {
                return [...prevState, organisations[(pageCounter * 3) - 1]]
            })
        }
    }

    const handlePageClick = (e)=>{
        setPageCounter(parseInt(e.target.id))
    }

    const displayOrganisations = () =>{
        return(
            organisationsToDisplay.map(e=>{
                return(
                    <div key={e.id} className="homeOrganisations--list--item">
                        <div className="homeOrganisations--list--name--container">
                            <h2 className="homeOrganisations--list--name">
                                {e.name}
                            </h2>
                            <p className="homeOrganisations--list--aim">
                                {e.aim}
                            </p>
                        </div>
                        <p className="homeOrganisations--list--needs">
                            {e.needs}
                        </p>
                    </div>
                )
            },0)
        )
    }

    const pagination = ()=>{
        let amountOfPages = Math.ceil(organisations.length/3);
        let pages=[];
        for (let i=0; i<amountOfPages; i++){
            pages.push(i+1)
        }
        return(
            pages.map(e=>{
                return(
                    <button className="homeOrganisations--list--page" id={e} onClick={e=>handlePageClick(e)} key={e}>{e}</button>
                )
            })
        )
    };


    return (
        <div className="homeOrganisations--container">
            <div className="homeOrganisations--info">W naszej bazie znajdziesz listę zweryfikowanych organizacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują. </div>
            <div className="homeOrganisations--list--container">
                <div className="homeOrganisations--list">
                    {(organisations.length > 0) && displayOrganisations()}
                </div>

                {organisations.length > 3 &&
                <div className="pagination">
                    {pagination()}

                </div>
                }

            </div>
        </div>


    );
}

export default HomeOrganisations;