import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/icons8-twitter.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {

  const linkedinLink = "https://www.linkedin.com/in/mohamed-mustafa-9b038073/";
  const facebookLink = "https://www.facebook.com/profile.php?id=637926445";
  const twitterLink = "https://www.twitter.com/el_sdiek";

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const onProjectsClick = () => {
    // Get the scroll position of the project section
    const projectSectionTop = document.getElementById("projects").offsetTop;

    // Scroll to the project section
    window.scrollTo({
      top: projectSectionTop,
      behavior: "smooth"
    });
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" smooth className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" smooth className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" smooth className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={onProjectsClick}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon"/></a>
              <a href={facebookLink} target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon"/></a>
              <a href={twitterLink} target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Icon"/></a>
              </div>
              <HashLink to='#connect' smooth>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
