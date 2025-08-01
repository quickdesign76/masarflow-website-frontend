import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/masarflow_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="MasarFlow Logo" className="logo" />
        </Link>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <div className="hamburger"></div>
        </button>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-button ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                من نحن
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={`nav-button ${location.pathname === '/services' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                خدماتنا
              </Link>
            </li>
            <li>
              <Link 
                to="/portfolio" 
                className={`nav-button ${location.pathname === '/portfolio' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                أعمالنا
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`nav-button ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                اتصل بنا
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;