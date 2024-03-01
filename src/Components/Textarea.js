import React from 'react'

export default function Textarea(props) {
  return (
      <div className = "container my-3">
        <h2>{props.heading}</h2>
        <textarea className="form-control my-3" id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
  )
}
