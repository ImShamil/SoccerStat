import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../img/logo.svg';

function Header() {
  return (
    <header className="header">
      <Container fluid>
        <Navbar expand="lg">
          <Navbar.Brand className="brand">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="SoccerStatApp logo"
            />
            {' '}
            SoccerStat
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link className="nav navbar-nav">
              <NavLink
                className={({ isActive }) => `navLink${isActive
                  ? ' active'
                  : ' inactive'}`}
                to="competitions"
              >
                Лиги
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className={({ isActive }) => `navLink${isActive
                  ? ' active'
                  : ' inactive'}`}
                to="teams"
              >
                Команды
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </header>
  );
}
export default Header;
