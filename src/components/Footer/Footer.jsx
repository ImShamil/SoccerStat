import './Footer.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Navbar className="footerNav" expand="lg">

          <Navbar.Brand className="brand">
            Imandinov Shamil
          </Navbar.Brand>
          <Nav>
            Powded by
            <a href="https://www.football-data.org/">
              {' '}
              <img
                className="dataFootbalLogo"
                alt="footbal-data-logo"
                src="https://www.football-data.org/assets/logo.jpg"
              />
              {' '}
            </a>
          </Nav>
        </Navbar>
      </Container>
    </footer>
  );
}
export default Footer;
