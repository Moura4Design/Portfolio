import React from 'react';

const About = () => {
  return(
    <React.Fragment>
      <div className='container'>
        <div className={'row'}>
          <div className={'col-lg-6'}>
            <div className={'title-wrapper'}>
              <h2 className={'text-center title'}>About</h2>
            </div>
            
            <div className={'p-3'}>
              <p>I am a Frontend Developer with over 5 years of experience, known for my responsibility, honesty, and 
                unwavering commitment to problem-solving. Throughout my life, I have faced many challenges and have always 
                persevered, approaching each obstacle with determination and a solutions-driven mindset.
              </p>
              <p>This same resilience defines my professional journey. Whenever a challenge arises, I take pride in 
                finding creative and effective solutions to overcome it. My passion for frontend development drives me to 
                consistently deliver high-quality work, and I take immense pride in the projects I contribute to and the 
                impact they create.
              </p>
            </div>
          </div>
          <div className={'col-lg-6'}>
            <div className={"container"}>
              <div className={"row mb-4"}>
                <div className={"col-7 order-last"} style={{zIndex: 1}}>
                  <div className={"content-image float-end"}>
                    <img className={"img-fluid"} src={"images/snow_spain.jpg"} alt={'Spain'} />
                  </div>
                </div>
                <div className={"col-5"} style={{zIndex: 2}}>
                  <div style={{ marginTop: '65%', marginRight: '-65%'}}>
                    <img className={"img-fluid"} src={"images/snow_bansko.jpg"} alt={'Bansko'} />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </React.Fragment>
  )
}

export default About;