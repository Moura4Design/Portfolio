import React from 'react';
import { Link } from 'react-router-dom';
import projects from './Data/projects';

const Work = () => {
    const calculateYearsAgo = (startYear) => {
      const currentYear = new Date().getFullYear();
      const difference = currentYear - startYear;
      if (difference === 0) {
        return currentYear;
      }
    
      return `${difference} year${difference !== 1 ? "s" : ""} ago`;
      
      // return `${difference} years ago`; // Return in the format "X years ago"
    };

  return (
    <React.Fragment>
      <div className={"title-wrapper"}>
        <h2 className={'text-center title'}>Work</h2>
      </div>
      <div className='text-center mt-4'>
        <div className="spinner-border" role="status">
          <span className='sr-only'>Loading...</span>
        </div>
        <span className='ms-2'>More projects are comings</span>
      </div>
      <div>
        <div className='container mt-5'>
          {projects.map((project, index) => (
            <div key={index} className='card d-flex'>
              <div className='card-header'>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className='mb-0'>
                    {project.title}
                    {project.technologies.map((tec, index) => (
                      <span key={index} className='badge ms-1'>{tec}</span>
                    ))}
                  </h5>
                  <small>{calculateYearsAgo(project.data)}</small>
                </div>
              </div>
              <div className='card-body'>
                <p><b>Project Overview: </b>{project.description}</p>
                <div className='d-flex justify-content-end'>
                  {project.link2 ? <Link className={"nav-link link-hover me-3"} target="_blank" rel="noopener noreferrer" to={project.link2}>Online</Link>  : null}
                  <Link className={"nav-link link-hover"} target="_blank" rel="noopener noreferrer" to={project.link}>Github <i className={'bi bi-github'} /></Link>
                </div>
              </div>
            </div>
          ))}
        
        </div> 
      </div>

    </React.Fragment>
  )
}

export default Work;