import React,{useState} from 'react'


export default function Textarea(props) {
    const handleUpClick=()=>{
        console.log("uppercase"+text);
        let a=text.toUpperCase();
         setText(a);
    }
    const handleMdHashClick=()=>{
        console.log("md5 has");
        let y="";
        setText(y);
    }
    const handleLoClick=()=>{
        console.log("lower case"+text);
        let x=text.toLowerCase();
        setText(x);

    }
    const handleOnChange=(event)=>{
        console.log('onchange');
        setText(event.target.value);

    }
    const[text,setText]=useState('enter text');
    
  return (
    <div>

<div className="mb-3">
<h1>{props.heading}</h1>
  <textarea className="form-control my-4" id="mybox" value={text} onChange={handleOnChange}rows="8"></textarea>
  <button className="btn btn-primary"onClick={handleUpClick}>To UpperCase</button>
  <button className="btn btn-primary  mx-3"onClick={handleLoClick}>To LowerCase</button>
  <button className="btn btn-primary  mx-3"onClick={handleMdHashClick}>Clear</button>
  <h2>character in text box{text.length}</h2>
  <h2>numberof words in text area {text.split(" ").length}</h2>
  <h2>{0.0008 * text.split(" ").length} meanutes to read</h2>

</div>
    </div>
  )
}

