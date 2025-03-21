import React from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';

const Expertise = () => {
  return(
    <React.Fragment>
      <div className={"title-wrapper"}>
        <h2 className={'text-center title'}>Expertise</h2>
      </div>
      <div className={'pt-3 text-center mt-4'}>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <div className='row justify-content-center'>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center'>
                  <div className='card' style={{width: '18rem'}}>
                    <div className='card-body'>
                      <i className="fab fa-react fa-3x" /> {/* React Icon */}
                      React.js
                      <p className='mt-3'>I have a deep understanding of React&apos;s core principles, including component based architecture.</p>
                    </div>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center'>
                  <div className='card' style={{width: '18rem'}}>
                    <div className='card-body'>
                      <i className="fab fa-js-square fa-3x" /> {/* JS Icon */}
                      Javascript
                      <p className='mt-3'>I have deep expertise in JavaScript, including ES6+ features, asynchronous programming.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <div className='row justify-content-center'>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center'>
                  <div className='card' style={{width: '18rem'}}>
                    <div className='card-body'>
                      <i className="fab fa-node-js fa-3x" />  {/* Node.js Icon */}
                      Node.js
                      <p className='mt-3'>I have a deep understanding of React&apos;s core principles, including component based architecture.</p>
                    </div>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center'>
                  <div className='card' style={{width: '18rem'}}>
                    <div className='card-body'>
                      <i className="fab fa-html5 fa-3x"></i> {/* HTML5 Icon */}
                      HTML5
                      <p className='mt-3'>I have deep expertise in JavaScript, including ES6+ features, asynchronous programming.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <div className='row justify-content-center'>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center'>
                  <div className='card' style={{width: '18rem'}}>
                    <div className='card-body'>
                      <i className="fab fa-bootstrap fa-3x" /> {/* Bootstrap Icon */}
                      Bootstrap
                      <p className='mt-3'>I have a deep understanding of React&apos;s core principles, including component based architecture.</p>
                    </div>
                  </div>
                </div>

                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center'>
                  <div className='card' style={{width: '18rem'}}>
                    <div className='card-body'>
                      <i className="fab fa-css3-alt fa-3x" /> {/* CSS Icon */}
                      CSS
                      <p className='mt-3'>I have deep expertise in JavaScript, including ES6+ features, asynchronous programming.</p>
                    </div>
                  </div>
                </div>
              </div>
          
          </div>
          <div className="carousel-item" data-bs-interval="4000">
              <div className='row justify-content-center'>
                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center'>
                  <div className='card' style={{width: '18rem'}}>
                    <div className='card-body'>
                      <i className="fas fa-database fa-3x" /> {/* SQL Icon */}
                      SQL
                      <p className='mt-3'>I have a deep understanding of React&apos;s core principles, including component based architecture.</p>
                    </div>
                  </div>
                </div>

                <div className='col-xs-12 col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center'>
                  <div className='card' style={{width: '18rem'}}>
                    <div className='card-body'>
                      <i className="fab fa-git-alt fa-3x" /> {/* Git Icon */}
                      Git
                      <p className='mt-3'>I have deep expertise in JavaScript, including ES6+ features, asynchronous programming.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
         
      </div>
    </React.Fragment>
  )
}

export default Expertise;