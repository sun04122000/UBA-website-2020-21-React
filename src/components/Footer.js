import React from "react";
import "../css/Footer.css";

import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  Card,
  Image,
} from "react-bootstrap";

import logo from "../images/recog1.png";
import logom from "../images/recog2.png";

export const Footer = () => {
  return (
    <Row className="w-100">
      <Container id="footer">
        <div>
          <div>
            <Row className="my-3" style={{ backgroundColor: "black" }}>
              <Col sx={12} sm={12} md={6}>
                <div id="myModal" class="modal fade">
                  <div class="modal-dialog modal-newsletter">
                    <div class="modal-content">
                      <form
                        action="/examples/actions/confirmation.php"
                        method="post"
                      >
                        <div class="modal-header">
                          <h4>Subscribe to our newsletter</h4>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <span>
                            Signup for our weekly newsletter to get the latest
                            news, updates delivered directly in your inbox.
                          </span>
                          <div class="input-group">
                            <Col>
                              <Row>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Enter your Name"
                                />
                              </Row>

                              <Row className="my-2">
                                <input
                                  type="email"
                                  class="form-control"
                                  placeholder="Enter your Email"
                                  required
                                />
                              </Row>
                              <Row className="text-center">
                                <div class="input-group-append">
                                  <input
                                    type="submit"
                                    class="btn btn-primary "
                                    value="Subscribe"
                                  />
                                </div>
                              </Row>
                            </Col>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <Button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                  className="mx-5"
                  variant="outline-warning"
                  style={{ color: "white", marginTop: "10px" }}
                >
                  <i class="fa fa-envelope mx-2"></i>
                  Subscribe Newsletter
                </Button>
              </Col>

              <Col sx={12} sm={12} md={6}>
                <ul class="social_footer_ul">
                  <li>
                    <a href="https://www.facebook.com/uba.iitroorkee/">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/uba_iitr">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/ubaiitr/">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/uba.iitr/">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="mx-2" id="card">
                  <Card.Header id="cardheader">ABOUT US</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item id="listgroup">
                      Unnat Bharat Abhiyan is inspired by the vision of
                      transformational change in rural development processes by
                      leveraging knowledge institutions to help build the
                      architecture of an Inclusive India.
                    </ListGroup.Item>
                  </ListGroup>

                  <Card.Header id="cardheader">CONTACT US</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item id="listgroup">
                      <i class="fa fa-location-arrow"></i> Unnat Bharat
                      Abhiyan,IIT Roorkee,Uttarakhand
                    </ListGroup.Item>
                    <ListGroup.Item id="listgroup">
                      <i class="fa fa-phone"></i> +91-8112283593
                    </ListGroup.Item>
                    <ListGroup.Item id="listgroup">
                      <i class="fa fa fa-envelope"></i> uba@iitr.ac.in
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>

              <Col>
                <Card id="card">
                  <Card.Header id="cardheader">USEFUL LINK</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item id="listgroup">
                      <a id="link-tag" href="https://iitr.ac.in/">
                        IIT-Roorkee
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item id="listgroup">
                      <a id="link-tag" href="http://unnatbharatabhiyan.gov.in/">
                        UBA IIT Delhi
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item id="listgroup">
                      <a
                        id="link-tag"
                        href="https://uba.iitr.ac.in/FacultyTeam.html"
                      >
                        Faculty
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item id="listgroup">
                      <a
                        id="link-tag"
                        href="https://uba.iitr.ac.in/StudentTeam.html"
                      >
                        Student Team
                      </a>
                    </ListGroup.Item>
                  </ListGroup>

                  <Card.Header className="mt-5" id="cardheader">
                    IITR-SOCIAL MEDIA
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item id="listgroup">
                      <a
                        id="link-tag"
                        href="https://www.facebook.com/IITRoorkee.ICC/"
                      >
                        Facebook
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item id="listgroup">
                      <a
                        id="link-tag"
                        href="https://twitter.com/iitroorkee?lang=en"
                      >
                        Twitter
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item id="listgroup">
                      <a
                        id="link-tag"
                        href="https://www.linkedin.com/school/indian-institute-of-technology-roorkee/"
                      >
                        LinkedIn
                      </a>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>

              <Col>
                <Card className="mx-2" id="card">
                  <Card.Header id="cardheader">RECENT EVENTS</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item id="listgroup">
                      <a
                        id="link-tag"
                        href="https://www.facebook.com/winterschool.ubaiitr/"
                      >
                        <strong>Talk-Show</strong>
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item id="listgroup">
                      On the 75th Independence Day, Team UBA IIT Roorkee brings
                      to you this one-of-its-kind talk by Mr Swapnil Tewari on
                      the topic- 'O Yuva! - Unleash your superpower'.
                    </ListGroup.Item>
                    <ListGroup.Item id="listgroup">
                      <a
                        id="link-tag"
                        href="https://m.facebook.com/story.php?story_fbid=2044083149076556&id=700887566729461&sfnsn=wiwspwa"
                      >
                        <strong>Spandan</strong>
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item id="listgroup">
                      UBA IITR organised "SPANDAN" on December 20, 2020 to
                      attend the session and learn how women entrepreneurship
                      will play a vital role in transforming Rural India.
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>

              <Col>
                <Card id="card">
                  <Card.Header className="mx-3" id="cardheader">
                    RECOGNITIONS
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item id="listgroup">
                      <Col>
                        <Image
                          style={{ height: "317px", width: "245px" }}
                          src={logom}
                        />
                      </Col>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>

              <Col>
                <Card id="card">
                  <Card.Header id="cardheader"> .</Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item id="listgroup">
                      <Col>
                        <Image
                          style={{ height: "317px", width: "245px" }}
                          src={logo}
                        />
                      </Col>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        <Row
          className="w-100"
          style={{ backgroundColor: "black", marginLeft: "12px" }}
        >
          <p class="text-center" style={{ paddingTop: "8px" }}>
            Website Developed by:
            <a id="link-tag-1" href="https://www.linkedin.com/in/amanydv2112">
              Aman
            </a>
            |
            <a
              id="link-tag-1"
              href="https://www.linkedin.com/in/dev-srivastava-07abb220a/"
            >
              Dev
            </a>
            |
            <a id="link-tag-1" href="https://www.linkedin.com/in/masoob">
              Masoob
            </a>
            |
            <a
              id="link-tag-1"
              href="https://www.linkedin.com/in/sarveshwar-pandey-9010871b8"
            >
              Sarveshwar
            </a>
            |
            <a
              id="link-tag-1"
              href="https://www.linkedin.com/in/sunidhi-jindal-57921a1b9"
            >
              Sunidhi
            </a>
            <br />
            Copyright © 2021 Social Welfare. All Rights Reserved.
          </p>
        </Row>
      </Container>
    </Row>
  );
};
