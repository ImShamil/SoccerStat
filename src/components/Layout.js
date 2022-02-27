import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { Container,Nav } from "react-bootstrap";
import logo from '../logo.svg'


function Layout() {
    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Container fluid="xxl">
                    <Navbar.Brand >
                      <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="SoccerStatApp logo"
                      />
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link className="nav navbar-nav"  >
                            <NavLink  className={({ isActive }) => "navLink" + (isActive ? " active" : " inactive") } to="competitions">Лиги</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className={({ isActive }) => "navLink" + (isActive ? " active" : " inactive")} to="teams">Команды</NavLink>
                        </Nav.Link>
                    </Nav>
              
                </Container>
            </Navbar>
            <Container fluid="xxl">
                <Outlet />
            </Container>
        </div>
    );
}
export default Layout;