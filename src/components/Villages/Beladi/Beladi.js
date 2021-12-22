import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { InitiativeIdentityCard } from "../../InitiativeIdentityCard";
import { IdentityCard } from "../../IdentityCard";
import "../../../css/StudentTeam.css";
import "../../../css/Beladi.css";
import map1 from "../../../images/Initiatives/Beladi/map1.jpg";
import Deepal from "../../../images/StudentTeam/Deepal Tiwari.jpg";
import URADE from "../../../images/StudentTeam/URADE PRATYAY.jpg";
import init1 from "../../../images/Initiatives/Beladi/init1.jpg";
import init2 from "../../../images/Initiatives/Beladi/init2.jpg";
import init3 from "../../../images/Initiatives/Beladi/init3.jpg";
import init4 from "../../../images/Initiatives/Beladi/init4.jpg";
import init5 from "../../../images/Initiatives/Beladi/init5.jpg";
import init6 from "../../../images/Initiatives/Beladi/init6.jpg";
import init7 from "../../../images/Initiatives/Beladi/init7.png";

export const Beladi = () => {
  return (
    <>
      <Row className="tittle">
        <h2 className="text-center my-3">
          Land Use Map & <span>Physical Map</span>
        </h2>
        <p className="text-center">
          Mapped data of land use and area of the village.
        </p>
        <br />
        <p className="text-center">
          <b>Land Use Map</b>
        </p>
      </Row>
      <img className="center video-blog" src={map1} />
      <br />
      <br />

      <section class="don-counter">
        <div class="overlay">
          <Container>
            <Row id="counters">
              <Col md={6}>
                <Row>
                  <li class="col-sm-6">
                    <Row>
                      <Col xs={3}>
                        <i class="far fa-heart"></i>
                      </Col>
                      <Col xs={9}>
                        {/* <span class="count1"></span> */}
                        <span>50+</span>
                        <p>Iniatives Undertaken</p>
                      </Col>
                    </Row>
                  </li>

                  <li class="col-sm-6">
                    <Row>
                      <Col xs={3}>
                        <i class="fa fa-users"></i>
                      </Col>
                      <Col xs={9}>
                        {" "}
                        {/* <span class="count2"></span> */}
                        <span>460+</span>
                        <p>volunteers</p>
                      </Col>
                    </Row>
                  </li>
                </Row>
              </Col>

              <Col md={6}>
                <Row>
                  <li class="col-sm-6">
                    <Row>
                      <Col xs={3}>
                        <i class="far fa-thumbs-up"></i>
                      </Col>
                      <Col xs={9}>
                        {" "}
                        {/* <span class="count3"></span> */}
                        <span>5+</span>
                        <p>years of work</p>
                      </Col>
                    </Row>
                  </li>

                  <li class="col-sm-6">
                    <Row>
                      <Col xs={3}>
                        <i class="far fa-smile"></i>
                      </Col>
                      <Col xs={9}>
                        {" "}
                        {/* <span class="count4"></span> */}
                        <span>5500+</span>
                        <p>people benefitted</p>
                      </Col>
                    </Row>
                  </li>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Initiatives</h1>
        <Row>
          <InitiativeIdentityCard
            initImg={init7}
            villageDate="Beladi | July 31, 2021"
            initiativeName="Book Distribution Drive"
            aboutInitiative="Books Distribution carried out in village Beladi."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init6}
            villageDate="Beladi | October 12, 2019"
            initiativeName="Cycle Donation"
            aboutInitiative="Donating unused cycles at IITR to village students in Beladi."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init5}
            villageDate="Beladi | September 29, 2019"
            initiativeName="Swacchta Hi Seva"
            aboutInitiative="No plastic drive in village Beladi."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init4}
            villageDate="Beladi | September 17, 2019"
            initiativeName="Tree Plantation Drive"
            aboutInitiative="Tree Plantation drive in schools of Beladi."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init3}
            villageDate="Beladi | April 6, 2019"
            initiativeName="Cattle Vaccination Drive"
            aboutInitiative="Cattle Vaccination for FMD diseases carried out in village Beladi."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init2}
            villageDate="Beladi | September 30, 2018"
            initiativeName="Self Defence Workshop"
            aboutInitiative="Self defence training for girl students in Beladi."
            knowMore=""
          />
          <InitiativeIdentityCard
            initImg={init1}
            villageDate="Beladi | September 26, 2017"
            initiativeName="Health Camp"
            aboutInitiative="Free health checkup for parents and children of Beladi."
            knowMore=""
          />
        </Row>
      </Container>
      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Village Team</h1>
        <Row>
          <IdentityCard
            studImg={Deepal}
            name="Deepal Tiwari"
            pos="Village Co-ordinator"
            email="Beladi"
            linkedIn="https://www.linkedin.com/in/deepal-tiwari-531b1a198"
          />
          <IdentityCard
            studImg={URADE}
            name="Pratyay Urade"
            pos="Village Co-ordinator"
            email="Beladi"
            linkedIn="https://www.linkedin.com/in/pratyay-urade-532227191/"
          />
        </Row>
      </Container>
      <Row className="text-center my-4">
        <h2>
          Be the change <i style={{ color: "#ecc731" }} class="fa fa-heart"></i>{" "}
          <strong>You wish to see</strong>.
        </h2>
      </Row>
    </>
  );
};
