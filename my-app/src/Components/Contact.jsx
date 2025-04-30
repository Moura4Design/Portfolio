import React from 'react';

const Contact = () => {
  return(
    <React.Fragment>
      <div className={"title-wrapper"}>
        <h2 className={'text-center title'}>Contact</h2>
      </div>
      <div className='container d-flex justify-content-center mt-5'>
        <div className='card mt-4' style={{ width: "33rem" }}>
          <div className='card-header text-center'>You can contact me</div>
          <div className='card-body'>
            <p>You can download my CV below.</p>
            <button type="button" className='btn btn-sm mb-3 btn-color'>Download</button>
            <p><i className="bi bi-envelope-fill me-2" />Email: <a className='nav-link link-hover' href='malito:moura4design@gmail.com'>moura4design@gmail.com</a></p>
            <p><b>On in internet:</b></p>
            <p><i className="bi bi-linkedin me-2" /><a className='nav-link link-hover' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/tania-moura/'>linkedin</a></p>
            <p><i className="bi bi-github me-2" /><a className='nav-link link-hover' target="_blank" rel="noopener noreferrer" href='https://github.com/Moura4Design'>github</a></p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Contact;