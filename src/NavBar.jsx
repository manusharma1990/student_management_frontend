import React from 'react'

const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><b><i> Sharma High School </i></b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="/home"><b> HOME </b></a>
          <a className="nav-link" href="/reg" ><b> REGISTER </b></a>
          <a className="nav-link" href="/show"><b>STUDENTS</b></a>
          <a className="nav-link" href='/contact'>Contact Us</a>
        </div>
      </div>
    </div>
  </nav>
  </>
  )
}

export default NavBar