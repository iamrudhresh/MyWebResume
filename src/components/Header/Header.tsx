import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className="logo me-auto me-lg-0"><a href="/">RUDHRESH</a></h1>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li><a href="tel:+91 7358258860"><i className="bi bi-telephone-fill"></i> &nbsp +91 7358258860 </a></li>
            <li><a href="mailto:officialrudhresh@gmail.com"><i className="bi bi-envelope-fill"></i> &nbsp officialrudhresh@gmail.com</a></li>
            <li><a href="https://drive.google.com/file/d/1GEJoiXK_QQAzvN4ny7jil2ldGf0Obbev/view?usp=sharing" target="_blank" rel="noopener noreferrer"><b>Download</b></a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <div className="header-social-links">
          <a href="https://github.com/iamrudhresh" target="_blank" className="github"><i className="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/iamrudhresh/" target="_blank" className="linkedin"><i className="bi bi-linkedin"></i></a>
          <a href="https://twitter.com/iamrudhresh" className="twitter"><i className="bi bi-twitter"></i></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
