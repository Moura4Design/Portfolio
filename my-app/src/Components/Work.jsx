import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
    const calculateYearsAgo = (startYear) => {
      const currentYear = new Date().getFullYear();
      const difference = currentYear - startYear;
      return `${difference} years ago`; // Return in the format "X years ago"
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
          <div className='card d-flex'>
            <div className='card-header'>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  JukeBox
                  <span className="badge small-badge ms-1">HTML5</span>
                  <span className="badge ms-1">CSS</span>
                  <span className="badge ms-1">Javascript</span>
                </h5>
                <small>{calculateYearsAgo(2018)}</small>
              </div>       
            </div>
            <div className='card-body'>
              <p>Project Overview: This project was built during my studies at New York Code + Academy. It is an assignment where I was tasked with creating a Jukebox music player. The project features a simple web-based jukebox/music player that allows users to control playback with the following actions: Play, Pause, Stop, Preview, Next, Previous</p>
              <div className='d-flex justify-content-end'>
                <Link className={"nav-link"} target="_blank" rel="noopener noreferrer" to={"https://github.com/Moura4Design/My_JukeBox"}>Github <i className={'bi bi-github'} /></Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>

    </React.Fragment>
  )
}

export default Work;