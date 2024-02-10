import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css'

function Footer() {
  return (
    <footer className='fixed-bottom'>
      <nav className="navbar navbar-light bg-blue">
        <div className="container-fluid d-flex justify-content-center">
          <p className='fs-5 bolded pt-1'>Copyright &#169; All Rights Reserved </p>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
