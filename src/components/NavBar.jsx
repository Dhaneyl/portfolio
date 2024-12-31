import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) =>{
    setActiveLink(value)
  }
  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
         <span className='logo'>Dhanyel</span>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active' : ''} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active' : ''} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active' : ''} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/dhanibel-reyes-a7b231212/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/DhanibelRR/"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/dhanibelr/"><img src={navIcon3} alt="" /></a>
              </div>
              {/* <HashLink to='#connect'> */}
              <a href='#connect' alt=" connect">
              <button className="vvd"><span>Let’s Connect</span></button>
              </a>
                
              {/* </HashLink> */}
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;