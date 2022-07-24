import React, { useState } from 'react'

export default function About() {
    const [text, changeText] = useState("Toogle Dark mode")
    const [style, setStyle] = useState({
        color: "black",
        backgroundColor: "white"
    });

    const toogleMode = () => {
        if (style.color === "black") {
            setStyle({
                color: "white",
                backgroundColor: "black"
            })
            changeText("Toogle Light mode")
        } else {
            setStyle({
                color: "black",
                backgroundColor: "white"
            })
            changeText("Toogle Dark mode");
        }
    }
    return (
        <>
            <h1 style={style}>About</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item" style={style} >
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button style={style} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non velit provident maxime maiores, corporis dolores enim officiis earum. Suscipit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button style={style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi possimus ullam dolore eveniet dicta! Quae possimus voluptates explicabo ea unde.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button style={style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate obcaecati voluptas quo incidunt inventore deserunt repellendus, dolorum assumenda pariatur cumque?
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="form-check form-switch my-2">
                    <input onChange={toogleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{text}</label>
                </div>
            </div>
        </>
    )
}
