import { Navbar, Nav, Container } from 'react-bootstrap'
import { navLinks } from '../data/index'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CodeImage from '../image/pplg.svg';

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>
      <Navbar expand="lg fixed-top navbar-scroll" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand className='logo' href="" style={{ color: "#231942" }}><img src={CodeImage} alt="pplg" />
          XI PPLG 2</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-4 text-center">
              {navLinks.map((link) => {
                return (
                  <div className='nav-Link' key={link.id}>
                    <NavLink to={link.path} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end>{link.text}</NavLink>
                  </div>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent