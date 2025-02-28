import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({scrollToAbout }) => {
  return (
    <React.Fragment>
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
        <div className={"container-fluid"}>
          {/* <a className={"navbar-brand"} href={"/"}>Navbar</a> */}
          <button 
            className={"navbar-toggler"} 
            type={"button"} 
            data-bs-toggle={"collapse"} 
            data-bs-target={"#navbarNavAltMarkup"} 
            aria-controls={"navbarNavAltMarkup"} 
            aria-expanded={"false"} 
            aria-label={"Toggle navigation"}
          >
            <span className={"navbar-toggler-icon"}></span>
          </button>
          <div className={"collapse navbar-collapse justify-content-center"} id={"navbarNavAltMarkup"}>
            <div className={"navbar-nav mx-auto fs-4"}>
              <Link className={"nav-link active"} aria-current={"page"} to={"/"}>Home</Link>
              <button className={"nav-link btn btn-link"} onClick={scrollToAbout}>About</button>
              {/* <Link className={"nav-link"} to={"/about"}>About</Link> */}
              <a className={"nav-link"} href={"/"}>Expertise</a>
              <a className={"nav-link"} href={"/"}>Work</a>
              <a className={"nav-link"} href={"/"}>Contact</a>
            </div>
            <div className={'navbar-nav ms-auto fs-4'}>
              <a className={"nav-link"} href={"/"}><i className={'bi bi-github'} /></a>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar;