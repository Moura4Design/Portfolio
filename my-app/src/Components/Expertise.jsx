import React from 'react';

const Expertise = () => {
  return(
    <React.Fragment>
      <div className={"title-wrapper"}>
        <h2 className={'text-center title'}>Expertise</h2>
      </div>
      
      <div className={'pt-3 text-center mt-4'}>
        <i className="fab fa-react fa-3x me-3"></i>  {/* React Icon */}
        <i className="fab fa-js-square fa-3x me-3"></i>  {/* JavaScript Icon */}
        <i className="fab fa-node-js fa-3x me-3"></i>  {/* Node.js Icon */}
        <i class="fab fa-html5 fa-3x me-3"></i> {/* HTML5 Icon */}
        <i class="fab fa-bootstrap fa-3x me-3"></i> {/* Bootstrap Icon */}
        <i class="fab fa-css3-alt fa-3x me-3"></i> {/* CSS Icon */}
        <i class="fas fa-database fa-3x me-3"></i> {/* SQL Icon */}
        <i class="fab fa-git-alt fa-3x"></i> {/* Git Icon */}
      </div>
    </React.Fragment>
  )
}

export default Expertise;