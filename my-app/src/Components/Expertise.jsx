import React, {useState} from 'react';
import skills from './Data/skills';
import ExpertiseModal from './Modal/ExpertiseModal';

const Expertise = () => {
  const [open, setOpen] = useState(false);
  const [sendDescription, setSendDescription] = useState(null);
  const [sendTitle, setSendTitle] = useState(null);

  const handleOpenModal = (description, title) => {
    console.log('description ==>', description)
    setOpen(true);
    setSendDescription(description);
    setSendTitle(title)
  }

  return(
    <React.Fragment>
      <div className={"title-wrapper"}>
        <h2 className={'text-center title'}>Expertise</h2>
      </div>
      <div className={'pt-3 mt-4'}>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <div className='row justify-content-center'>
                {skills.slice(0, 2).map((skill, index) => (
                    <div key={index} className='col-xs-12 col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center'>
                    <div className='card text-center' style={{width: '18rem'}}>
                      <div className='card-body'>
                        <i className={`${skill.icon} fa-3x`} /> 
                        <span className='ms-2'>{skill.title}</span>
                        <div>
                          <button className='btn btn-sm mt-3 btn-color' onClick={() => handleOpenModal(skill.description, skill.title)}>Open</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <div className='row justify-content-center'>
                {skills.slice(2, 4).map((skill, index) => (
                  <div key={index} className='col-xs-12 col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center'>
                    <div className='card text-center' style={{width: '18rem'}}>
                      <div className='card-body'>
                        <i className={`${skill.icon} fa-3x`} />  
                          <span className='ms-2'>{skill.title}</span>
                          <div>
                            <button className='btn btn-sm mt-3 btn-color' onClick={() => handleOpenModal(skill.description, skill.title)}>Open</button>
                          </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <div className='row justify-content-center'>
                {skills.slice(4, 6).map((skill, index) => (
                  <div key={index} className='col-xs-12 col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center'>
                    <div className='card text-center' style={{width: '18rem'}}>
                      <div className='card-body'>
                        <i className={`${skill.icon} fa-3x`} /> 
                          <span className='ms-2'>{skill.title}</span>
                          <div>
                            <button className='btn btn-sm mt-3 btn-color' onClick={() => handleOpenModal(skill.description, skill.title)}>Open</button>
                          </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          
            </div>
            <div className="carousel-item" data-bs-interval="4000">
                <div className='row justify-content-center'>
                  {skills.slice(6, 8).map((skill, index) => (
                    <div key={index} className='col-xs-12 col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center'>
                    <div className='card text-center' style={{width: '18rem'}}>
                      <div className='card-body'>
                        <i className={`${skill.icon} fa-3x`} /> 
                          <span className='ms-2'>{skill.title}</span>
                          <div>
                            <button className='btn btn-sm mt-3 btn-color' onClick={() => handleOpenModal(skill.description, skill.title)}>Open</button>
                          </div>
                      </div>
                    </div>
                  </div>
                  ))}

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
      <ExpertiseModal description={sendDescription} title={sendTitle} show={open} onClose={() => setOpen(false)} />
    </React.Fragment>
  )
}

export default Expertise;