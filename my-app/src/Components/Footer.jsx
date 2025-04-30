import React from 'react';

const Footer  = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Tânia Moura</p>
      </footer>
    </React.Fragment>
  )
}

export default Footer;