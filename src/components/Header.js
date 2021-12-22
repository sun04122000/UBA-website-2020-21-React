import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Row,
  Image,
  Button,
} from "react-bootstrap";
import logo from "../images/logo.png";
import "../css/Header.css";

export const Header = () => {
  return (
    <>
      {/* Navbar part starts here */}
      <header>
        <Container fluid>
          <Row
            className="header-part"
            style={{ background: "#03506f", height: "1.3rem" }}
          ></Row>
          <Row>
            <Image src={logo} alt="logo.png" fluid />
          </Row>
        </Container>
        <Navbar
          className="navBar"
          style={{ background: "#fbe58a" }}
          expand="lg"
        >
          <Container className="navContainer">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="mx-3" href="/home">
                  Home
                </Nav.Link>
                <NavDropdown
                  className="mx-3"
                  title="Initiatives"
                  id="basic-nav-dropdown"
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item href="#action/3.1">
                    Education
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Health</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Technology
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Awareness
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.5">Other</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  className="mx-3"
                  title="Villages"
                  id="basic-nav-dropdown"
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item href="/beladi">Beladi</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Chharba
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Chandpur
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Meerpur
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.5">
                    Puranpur
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link className="mx-3" href="#events">
                  Events
                </Nav.Link>

                <NavDropdown
                  className="mx-3"
                  title="Teams"
                  id="basic-nav-dropdown"
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item href="#action/3.1">
                    Faculty
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/students">Students</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link className="mx-3" href="#gallery">
                  Gallery
                </Nav.Link>

                <Nav.Link className="mx-3" href="#contact">
                  Contact
                </Nav.Link>

                <Nav.Link className="mx-1" href="#donate">
                  <Button
                    className="subscribeBtn"
                    id="subsc1"
                    variant="secondary"
                    size="sm"
                  >
                    <i className="fa fa-envelope mx-2"></i>
                    SUBSCRIBE TO OUR NEWSLETTER
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <Button
            className="subscribeBtn"
            id="subsc2"
            variant="secondary"
            size="sm"
          >
            <i className="fa fa-envelope mx-2"></i>
            SUBSCRIBE TO OUR NEWSLETTER
          </Button>
        </Navbar>
      </header>
    </>
  );
};
