import React, {useState} from 'react'

export default function Textarea(props) {

    const onChangeFunction = (event) =>{
        console.log("onchnage function occur")
        setText(event.target.value);
    }

    const onClickUp = () =>{
        console.log("Uppercase clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const onClickdown = () =>{
      console.log("Lowercase clicked");
      let newText = text.toLowerCase();
      setText(newText);
  }
    const onClickRemove = () =>{
      console.log("Remove clicked");
      let newText = "";
      setText(newText);
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className = "container my-3" >
        <h2 style = {{color : (props.mode === "dark") ? "white" : "black"}}>{props.heading} </h2>
        <div>
            <textarea className="form-control my-3" style = {{backgroundColor : (props.mode === "dark" ? "#19032F" : "white"),color : (props.mode === "dark" ? "white" : "dark")}} value = {text} onChange = {onChangeFunction} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        
        <button className="btn btn-primary mx-3 " onClick = {onClickUp}>Convert Uppercase</button>
        <button type="button" className="btn btn-warning mx - 3" onClick = {onClickdown}>Convert Lowercase</button>
        <button type="button" className="btn btn-danger mx-3" onClick = {onClickRemove}>Remove Text</button>
        </div>

        <div className = "container my -3" style = {{color : (props.mode === "dark") ? "white" : "black"}}>
          <h2>Text Summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters are present</p>
        </div>
        </>
  )
}
