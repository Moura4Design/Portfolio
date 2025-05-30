import React, {useRef, useState, useEffect} from 'react';
import Navbar from './Navbar';
import About from './About';
import Expertise from './Expertise';
import Work from './Work';
import Footer from './Footer';
import Contact from './Contact';
import MouseFollower from './MouseFollower';
import BackToHome from './BackToHome ';

const Home = () => {
  const aboutRef = useRef(null);
  const expertiseRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const [showBackToHome, setShowBackToHome] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the top of the viewport
      const scrollTop = window.scrollY;
  
      // Show BackToHome if scrolled down more than 100px
      setShowBackToHome(scrollTop > 100);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToMenu = (navbar) => {
    if(navbar === 'about') {
      console.log('navbar ==>', navbar)
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } 
    if(navbar === 'expertise') {
      expertiseRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if(navbar === 'work') {
      workRef.current?.scrollIntoView({ behavior: 'smooth' });
    } 
    if(navbar === 'contact') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    
  };

  return (
    <div className={'App'}>
    <MouseFollower />
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
        <div className={'col-md-6 p-4 text-center'}>
          <h2>Hi, I'm Tânia Moura <span className='wave'>&#128075;</span></h2>
          <p>Frontend Developer with 5+ years of international experience. Specialized in React.js, JavaScript, HTML/CSS, and API integrations. 
            <br />Always evolving committed to continuous learning and keeping up to date with the latest in web development.
          </p>
          {/* <h2>Hi, I'm Tânia Moura <span className='wave'>👋&#128075;</span></h2> */}
          {/* <button type="button" className='btn btn-warning'>DownLoad C.V.</button> */}
        </div>
      </div>
    </div>
    <section ref={aboutRef} className={'section w-100 min-vh-100'}>
      <About />
    </section>
    <section ref={expertiseRef} className={'section w-100 min-vh-100'}>
      <Expertise />
    </section>
    <section ref={workRef} className={'section w-100 min-vh-100'}>
      <Work />
    </section>
    <section ref={contactRef} className={'section w-100 min-vh-100'}>
      <Contact />
    </section>
    <Footer />
    {showBackToHome && <BackToHome />}
  </div>
  )
}

export default Home;