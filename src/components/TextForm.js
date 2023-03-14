import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleUpClick = () =>{
        setText(text.toUpperCase());
        props.showAlert('Converted to uppercase','success');
    }

    const handleLowerClick = () =>{
        setText(text.toLowerCase());
        props.showAlert('Converted to lowercase','success');

    }

    const handleSpeakClick = () =>{
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }

    const handleCopyClick = () =>{
        var copyText = document.getElementById("myBox");
        copyText.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert('Text copied to clipboard','success');
    }
    
    const handleRemoveExtraSpacesClick = () =>{
        const afterRemoveSpacesText = text.replace(/\s+/g, ' ').trim();
        setText(afterRemoveSpacesText);
        props.showAlert('Extra space removed','success');
    }

    const handleClearClick = () =>{
        setText('');
        window.speechSynthesis.cancel();
    }

  return (
    <>
        <div className={`container text-${(props.mode === 'light')?'dark':'light'}`} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value ={text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor:(props.mode === 'dark')?'gray':'white',color:(props.mode === 'light')?'black':'white'}}></textarea>
            </div>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to Lowercase</button>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleSpeakClick}>Speak</button>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpacesClick}>Remove Extra Spaces</button>
            <button disabled={text.length===0}className="btn btn-danger" onClick={handleClearClick}>Clear</button>
        </div>
        <div className={`container text-${(props.mode === 'light')?'dark':'light'}`}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{(text.length)> 0 ? text:'Nothing to preview'}</p>
        </div>
    </>
  )
}
