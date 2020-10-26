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
        }
        // },
        // {
        //     id: 5,
        //     name: "Fundacja “Lorem Ipsum 6”",
        //     aim: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
        //     needs: "Egestas, sed, tempus"
        // }

        ]

    );
    const [pageCounter, setPageCounter] = useState(1);


    const handlePageClick = (e)=>{
        setPageCounter(parseInt(e.target.id))
    }



    const pagination = ()=>{
        let amountOfPages = Math.ceil(foundations.length/3);
        let pages=[];
        for (let i=0; i<amountOfPages; i++){
            pages.push(i+1)
        }
        return(
            pages.map(e=>{
               return(
                   <p id={e} onClick={e=>handlePageClick(e)} key={e}>{e}</p>
               )
            })
        )

    };


    return (
        <div className="homeFoundations--container">



            <div className="homeFoundations--list">

                <div key={foundations[(pageCounter * 3)-3].id} className="homeFoundations--list--item">
                    <div className="homeFoundations--list--name--container">
                        <h2 className="homeFoundations--list--name">
                            {foundations[(pageCounter * 3)-3].name}
                        </h2>
                        <p className="homeFoundations--list--aim">
                            {foundations[(pageCounter * 3)-3].aim}
                        </p>
                    </div>
                    <p className="homeFoundations--list--needs">
                        {foundations[(pageCounter * 3)-3].needs}
                    </p>
                </div>
                {foundations[(pageCounter * 3)-2]&&<div key={foundations[(pageCounter * 3)-2].id} className="homeFoundations--list--item">
                    <div className="homeFoundations--list--name--container">
                        <h2 className="homeFoundations--list--name">
                            {foundations[(pageCounter * 3)-2].name}
                        </h2>
                        <p className="homeFoundations--list--aim">
                            {foundations[(pageCounter * 3)-2].aim}
                        </p>
                    </div>
                    <p className="homeFoundations--list--needs">
                        {foundations[(pageCounter * 3)-2].needs}
                    </p>
                </div>}
                {foundations[(pageCounter * 3)-1]&&<div key={foundations[(pageCounter * 3)-1].id} className="homeFoundations--list--item">
                    <div className="homeFoundations--list--name--container">
                        <h2 className="homeFoundations--list--name">
                            {foundations[(pageCounter * 3)-1].name}
                        </h2>
                        <p className="homeFoundations--list--aim">
                            {foundations[(pageCounter * 3)-1].aim}
                        </p>
                    </div>
                    <p className="homeFoundations--list--needs">
                        {foundations[(pageCounter * 3)-1].needs}
                    </p>
                </div>}





            </div>
            {foundations.length > 3 &&
            <div className="pagination">
                {pagination()}

            </div>
            }







        </div>
    );

}

export default HomeFoundations;