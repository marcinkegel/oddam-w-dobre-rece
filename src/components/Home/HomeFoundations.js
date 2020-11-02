import React, {useState, useEffect} from 'react';

const HomeFoundations = () => {


    const [foundations, setFoundations] = useState([
            {
                id: 0,
                name: "Fundacja “Lorem Ipsum 1”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
            },
            {
                id: 1,
                name: "Fundacja “Lorem Ipsum 2”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
            },
            {
                id: 2,
                name: "Fundacja “Lorem Ipsum 3”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
            },
            {
                id: 3,
                name: "Fundacja “Lorem Ipsum 4”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
            },
            {
                id: 4,
                name: "Fundacja “Lorem Ipsum 5”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
            },
            {
                id: 5,
                name: "Fundacja “Lorem Ipsum 6”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
            },
            {
                id: 6,
                name: "Fundacja “Lorem Ipsum 7”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
            },
            {
                id: 7,
                name: "Fundacja “Lorem Ipsum 8”",
                aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                needs: "Egestas, sed, tempus"
                // },
                // {
                //     id: 8,
                //     name: "Fundacja “Lorem Ipsum 9”",
                //     aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
                //     needs: "Egestas, sed, tempus"
            }
        ]
    );
    const [pageCounter, setPageCounter] = useState(1);


    const [foundationsToDisplay, setFoundationsToDisplay] = useState([]);

    useEffect(() => {
        filterFoundations()
    }, [pageCounter])


    const filterFoundations = () => {
        setFoundationsToDisplay([foundations[(pageCounter * 3) - 3]]);
        if (foundations[(pageCounter * 3) - 2]) {
            setFoundationsToDisplay(prevState => {
                return [...prevState, foundations[(pageCounter * 3) - 2]]
            })
        }
        if (foundations[(pageCounter * 3) - 1]) {
            setFoundationsToDisplay(prevState => {
                return [...prevState, foundations[(pageCounter * 3) - 1]]
            })
        }
    }

    const handlePageClick = (e) => {
        setPageCounter(parseInt(e.target.id))
    }

    const displayFoundations = () => {
        return (
            foundationsToDisplay.map(e => {
                return (
                    <div key={e.id} className="homeFoundations--list--item">
                        <div className="homeFoundations--list--name--container">
                            <h2 className="homeFoundations--list--name">
                                {e.name}
                            </h2>
                            <p className="homeFoundations--list--aim">
                                {e.aim}
                            </p>
                        </div>
                        <p className="homeFoundations--list--needs">
                            {e.needs}
                        </p>
                    </div>
                )
            }, 0)
        )
    }

    const pagination = () => {
        let amountOfPages = Math.ceil(foundations.length / 3);
        let pages = [];
        for (let i = 0; i < amountOfPages; i++) {
            pages.push(i + 1)
        }
        return (
            pages.map(e => {
                return (
                    <button className="homeFoundations--list--page" id={e} onClick={e => handlePageClick(e)}
                            key={e}>{e}</button>
                )
            })
        )
    };


    return (
        <div className="homeFoundations--container">
            <div className="homeFoundations--info">W naszej bazie znajdziesz listę zweryfikowanych fundacji, z
                którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </div>
            <div className="homeFoundations--list--container">
                <div className="homeFoundations--list">
                    {(foundations.length > 0) && displayFoundations()}
                </div>

                {foundations.length > 3 &&
                <div className="pagination">
                    {pagination()}

                </div>
                }

            </div>
        </div>


    );
}

export default HomeFoundations;