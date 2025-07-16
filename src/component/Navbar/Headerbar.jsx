import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoIcons from './LogoIcons';
import Iconmoon from '../../assets/images/icon-moon.svg'
import Iconsun from '../../assets/images/icon-sun.svg'
import { useEffect, useState } from 'react';

function Headerbar() {
  const [darkMode, setDarkMode] = useState(true)


  // applied the useEffect
  useEffect(() => {
    // Apply/remove class from <body>
    if (darkMode) {
      document.body.classList.add('dark-mode')
      document.body.classList.remove('light-mode')
    }
    else {
      document.body.classList.add('light-mode')
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode])

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <Container className='header-nav-margin'>
      <Navbar expand="lg" className="bg-body-dark">
        <Container fluid>
          <Navbar.Brand href="#">
            {/* this is svgIcons */}
            <LogoIcons />
            {/* this is logoIcon ends */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="">
              <div className='icons-theme' onClick={toggleTheme} style={{ cursor: 'pointer' }}>
                {darkMode ? (
                  <img src={Iconmoon} alt="Moon Icon" width={22} height={22} />
                ) : (
                  <img src={Iconsun} alt="Sun Icon" width={22} height={22} />
                )}
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Headerbar;