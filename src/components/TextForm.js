import React, { useState } from 'react'

export default function TextForm(parms) {

    const [text, setText] = useState("Enter your Text");

    const toUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handelOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <h3>{parms.title}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} id="box" rows="8"></textarea>
                <button className="btn btn-primary my-2" onClick={toUpCase}>To UpperCase</button>
            </div>
        </>
    )
}
