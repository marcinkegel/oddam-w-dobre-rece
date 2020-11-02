import React, {useState, useEffect} from 'react';

const HomeLocals = () => {
    const [locals, setLocals] = useState([
            {
                id: 0,
                name: "Lokalna zbiórka “Lorem Ipsum 1”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
            },
            {
                id: 1,
                name: "Lokalna zbiórka “Lorem Ipsum 2”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
            },
            {
                id: 2,
                name: "Lokalna zbiórka “Lorem Ipsum 3”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
            }
        ]

    );
    const [localsToDisplay, setLocalsToDisplay]= useState([]);

    const [pageCounter, setPageCounter] = useState(1);

    useEffect(()=>{
        filterLocals()
    },[pageCounter])



    const filterLocals = ()=>{
        setLocalsToDisplay([locals[(pageCounter * 3)-3]]);
        if (locals[(pageCounter * 3)-2]) {
            setLocalsToDisplay(prevState => {
                return [...prevState, locals[(pageCounter * 3) - 2]]
            })
        }
        if (locals[(pageCounter * 3)-1]) {
            setLocalsToDisplay(prevState => {
                return [...prevState, locals[(pageCounter * 3) - 1]]
            })
        }
    }

    const handlePageClick = (e)=>{
        setPageCounter(parseInt(e.target.id))
    }

    const displayLocals = () =>{
        return(
            localsToDisplay.map(e=>{
                return(
                    <div key={e.id} className="homeLocals--list--item">
                        <div className="homeLocals--list--name--container">
                            <h2 className="homeLocals--list--name">
                                {e.name}
                            </h2>
                            <p className="homeLocals--list--aim">
                                {e.aim}
                            </p>
                        </div>
                        <p className="homeLocals--list--needs">
                            {e.needs}
                        </p>
                    </div>
                )
            },0)
        )
    }

    const pagination = ()=>{
        let amountOfPages = Math.ceil(locals.length/3);
        let pages=[];
        for (let i=0; i<amountOfPages; i++){
            pages.push(i+1)
        }
        return(
            pages.map(e=>{
                return(
                    <button className="homeLocals--list--page" id={e} onClick={e=>handlePageClick(e)} key={e}>{e}</button>
                )
            })
        )
    };


    return (
        <div className="homeLocals--container">
            <div className="homeLocals--info">W naszej bazie znajdziesz listę zweryfikowanych lokalnych działaczy, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują. </div>
            <div className="homeLocals--list--container">
                <div className="homeLocals--list">
                    {(locals.length > 0) && displayLocals()}
                </div>

                {locals.length > 3 &&
                <div className="pagination">
                    {pagination()}

                </div>
                }

            </div>
        </div>


    );
}

export default HomeLocals;