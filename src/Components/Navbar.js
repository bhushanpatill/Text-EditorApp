import React from 'react'

export default function Navbar(props) {
  return (
    <div>
            <nav className = {`navbar bg-${props.mode} border-bottom border-body`} data-bs-theme={`${props.mode}`}>
        {/* <nav className="navbar navbar-expand-lg navbar-warning bg-warning"> */}
  
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.text}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
      </ul>
      <div className="form-check form-switch" onClick={props.toggleMode}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className={`form-check-label text-${props.mode === "dark" ? "light" : "dark"}`} htmlFor="flexSwitchCheckDefault" >Enable dark mode</label>
</div>
    </div>
  </div>
</nav>
      
    </div>
  )
}
