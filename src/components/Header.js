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
  Carousel,
} from "react-bootstrap";
import logo from "../images/logo.png";
import slider1 from "../images/1.png";
import slider2 from "../images/2.png";
import slider3 from "../images/3.jpeg";
import slider4 from "../images/4.jpg";
import slider5 from "../images/5.jpg";
import slider6 from "../images/6.jpg";
import slider7 from "../images/7.jpeg";
import slider8 from "../images/8.jpeg";
import slider9 from "../images/9.jpeg";
import slider10 from "../images/10.jpeg";
import slider11 from "../images/11.jpeg";
import slider12 from "../images/12.jpg";
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
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="mx-3" href="#home">
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
                  <NavDropdown.Item href="#action/3.1">Beladi</NavDropdown.Item>
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
                  <NavDropdown.Item href="#action/3.2">
                    Students
                  </NavDropdown.Item>
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
        </Navbar>
      </header>

      {/* Head Carousel starts here */}
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider5} alt="Fifth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider6} alt="Sixth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider7} alt="Seventh slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider8} alt="Eighth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider9} alt="Ninth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider10} alt="Tenth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider11} alt="Eleventh slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider12} alt="Twelfth slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
