import React from 'react'

export default function About(parms) {
    // const [style, setStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // });
    let myStyle = {
        color: parms.mode==='dark' ? 'white' : 'black',
        backgroundColor: parms.mode==='dark' ? 'rgb(3 39 67)' : 'white'
    }
    
    return (
        <>
            <h1 style={myStyle}>About</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <strong>Analyze Your text </strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                        Free software utility which allows you to find the most frequent phrases and frequencies of words. Non-English language texts are supported. It also counts number of words, characters, sentences and syllables. Also calculates lexical density.
                         </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                        This web app is free to use , you can use it for free. also you can use all the code for your own project. all features are available for free.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                           <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                           This website are browser compatible. all browser like chrome, firefox, opera, safari, edge, ie11, ie10, ie9, ie8, ie7, ie6, ie5, ie4, ie3, ie2, ie1 are supported.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
