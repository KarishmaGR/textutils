import React, { useState } from 'react'
import copy from "copy-to-clipboard";




export default function TextForm(props) {


    const handleUpClick = () => {
        console.log("Uppercase was clicked" + Text);
        let Newtext = Text.toUpperCase();
        setText(Newtext)
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const handleUpdbClick = (e) => {
        setText(e.target.value)
        let dbText = Text.toLowerCase();
        setText(dbText)
        props.showAlert("text converted to uppercase","success")
        

    }
    const handleclearClick = (e) => {
        
        let clText ="";
        setText(clText)
        props.showAlert("text cleared","success")
        
    }
    const handlecopyClick = (c) => {
        copy(Text);
        props.showAlert("copied successfully","success")
        
    }

    const [Text, setText] = useState('');

    //    text = "new text"  //wrong way to change state text
    //   setText("muje nhi pta");// right way to set the state
    return (
        <>
        
        <div className= "container" style={{color: props.mode==='dark'?'white':'#042743'}}>

            <h1>{props.Heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="20"  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick} onDoubleClick={handleUpdbClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-4' onClick={handlecopyClick}>Copy the above text</button>
            <button className='btn btn-primary mx-4' onClick={handleclearClick}>Clear Text</button>
        </div>

        <div className= "container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text summary</h1>
            <p>{Text.split(" ").length} words,{Text.length} characters</p>
            <p>{0.008 *  Text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{Text.length>0?Text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>

    )
}
