import React from 'react';

const ExpertiseModal = ({title, description, show, onClose}) => {
  if (!show) return null;

  return(
    <React.Fragment>
      <div className="modal d-flex align-items-center justify-content-center">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Expertise Detail {title}</h5>
              {/* <button type="button close" className="btn-close" onClick={onClose} aria-label="Close"></button> */}
            </div>
            <div className="modal-body">
              <p>{description}</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-color" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ExpertiseModal;