import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ scrollToMenu }) => {
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
              <button className={"nav-link btn btn-link"} onClick={() => scrollToMenu('about')}>About</button>
              <button className={'nav-link btn btn-link'} onClick={() => scrollToMenu('expertise')}>Expertise</button>
              <button className={'nav-link btn btn-link'} onClick={() => scrollToMenu('work')}>Work</button>
              <button className={'nav-link btn btn-link'} onClick={() => scrollToMenu('contact')}>Contact</button>
            </div>
            <div className={'navbar-nav ms-auto fs-4'}>
              <Link className={"nav-link"} target="_blank" rel="noopener noreferrer" to={"https://www.linkedin.com/in/tania-moura/"}><i className={'bi bi-linkedin'} /></Link>
              <Link className={"nav-link"} target="_blank" rel="noopener noreferrer" to={"https://github.com/Moura4Design"}><i className={'bi bi-github'} /></Link>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar;