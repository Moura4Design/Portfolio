import React, {useRef} from 'react';
import Navbar from './Navbar';
import About from './About';
import Expertise from './Expertise';

const Home = () => {
  const aboutRef = useRef(null);
  const expertiseRef = useRef(null)

  const scrollToMenu = (navbar) => {
    if(navbar === 'about') {
      console.log('navbar ==>', navbar)
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } 
    if (navbar === 'expertise') {
      expertiseRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    
  };

  return (
    <div className={'App'}>
    <Navbar scrollToMenu={scrollToMenu} />
    <div className={'container'}>
      <div className={'row justify-content-center align-items-center vh-100'}>
        <div className={'col-md-6 justify-content-center align-items-center'}>
          <div className={'square_wrapper'}>
            <div className={'square_outside'}>
              <div className={'square_inside'}>
                <p className={'text_inside_square'}>
                  Throughout my life, I have faced many challenges and have always persevered, approaching each obstacle 
                  with determination and a solutions-driven mindset.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={'col-md-6'}>
          <p>This is the second column where you can add more content.</p>
        </div>
      </div>
    </div>
    <section ref={aboutRef} className={'section'}>
      <About />
    </section>
    <section ref={expertiseRef} className={'section'}>
      <Expertise />
    </section>
  </div>
  )
}

export default Home;