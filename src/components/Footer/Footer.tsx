import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Codex Coder.</span></strong> All Rights Reserved
        </div>
        <div className="credits">
          <b>Designed by RUDHRESH</b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
