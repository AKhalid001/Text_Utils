import React from 'react'
import { useState } from 'react'


export default function TextUtil(props) {

    const [text, setText] = useState("")

    const handleUpClick = () => {
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleLowClick = () => {
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted to LowerCase", "success")

    }

    const handleClear = () => {
        setText("")
        props.showAlert("Text Clear", "danger")

    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges()
        props.showAlert("Copied", "success")

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className={`container my-3 text-${props.mode === 'light' ? "dark" : "light"} `}>
                <div className='container my-3'>
                    <div className="mb-3">
                        <h2>Enter Text</h2>
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myTextarea" rows="10" style={{ backgroundColor: props.mode === 'light' ? "white" : "#313233", color: props.mode === 'light' ? "Black" : "White" }}></textarea>
                    </div>
                    <button disabled = {text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UpperCase</button>
                    <button disabled = {text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>LowerCase</button>
                    <button disabled = {text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
                    <button disabled = {text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
                    <button disabled = {text.length === 0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>ExtraSpaces</button>
                </div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <h3>Words & Charachters</h3>
                            <p>This text have {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} charachters</p>
                        </div>
                        <div className="col">
                            <h3>Reading Time</h3>
                            <p>This text takes {text.split(" ").filter((element) => { return element.length !== 0 }).length * 0.25} seconds to read {text.split(" ").filter((element) => { return element.length !== 0 }).length} words</p>
                        </div>
                        <div className="col">
                            <h3>Preview</h3>
                            <p>{text.length > 0 ? text : "Nothing to preview"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
