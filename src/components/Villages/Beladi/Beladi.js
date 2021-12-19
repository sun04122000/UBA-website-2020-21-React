import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import "../../../css/Beladi.css";

export const Beladi = () => {
  return (
    <div>
      <Row>
        <div class="container bg-overlay">
          <div className="my-5" style={{ textAlign: "center" }}>
            <h1>BELADI</h1>
          </div>
        </div>
      </Row>
      <Row>
        <section className="how-can-help what-we">
          <div className="container">
            <Row>
              <Col class="col-md-8 with-map">
                <span class="big-text font-lora">
                  <small>About Beladi</small>
                </span>
                <hr />
                <p align="justify">
                  Beladi Salhapur village is located in the Roorkee block of
                  Haridwar district. The village is governed by Beladi Salhapur
                  Gram Panchayat. Its location code or village code No. is
                  056436 (according to census 2011). It is at a distance of 7 km
                  from Roorkee and about 350m from NH-58 which connects Roorkee
                  to Haridwar. The nearest major Railway stations are Roorkee
                  and Haridwar Junction.
                </p>
                <p align="justify">
                  The total geographical area of the village is 248.77 hectares.
                  Beladi Salhapur has a total population of 2500(approx.). The
                  village consists of two sub-villages. The first one, known as
                  ‘Old Beladi Salhapur’ is located on the right-hand side of the
                  main road (Roorkee to Haridwar) and consists of approximately
                  450 households, and the other, known as ‘New Beladi Salhapur’
                  about 200m away.
                </p>
                <p align="justify">
                  Nearly 70 per cent of the villagers are engaged in agriculture
                  or agriculture related work, however the number of big farmers
                  is very less, as majority of the farmers are low scale
                  farmers. 20-25 % people work as agriculture and construction
                  workers and the rest are engaged in either dairy or selling
                  other animal products’ and a very few of them employed in the
                  service sector (private companies etc.).
                </p>
                <p align="justify">
                  There are two Government schools in this village for boys and
                  girls. There is one Co-operative Society (more of a Self Help
                  Group) in this village which provides loan to the villagers,
                  however this society doesn’t function smoothly due to the lack
                  of money within the group. Majority of the population are
                  Scheduled Castes (SCs). The village has mainly two Castes,
                  i.e. “Rhods” and “Sainis”. Apart from the houses of a few
                  Upper Caste people, majority of the houses are made with
                  bricks and have 1-2 rooms. The main source of drinking water
                  are the hand pumps (groundwater) installed almost at every
                  house. Public water taps are also installed by the Government.
                  The number of such taps is around 20-30. But the taps remain
                  dry most of the time as testified by the villagers. The home
                  cleanliness level is decent but the village sanitation,
                  cleanliness of ponds and other water bodies, the public drains
                  and the scattered waste around the village presents a
                  governance issue in the village.
                </p>
                <p></p>
              </Col>

              <Col className="col-md-4 ">
                <div className="program">
                  <div className="inner">
                    <h3>
                      CATTLE VACCINATION
                      <br />
                      <span>
                        APRIL 6, 2019 <br />
                        1695 cattle vaccinated
                      </span>
                    </h3>
                    <a href="docs/Newsletter2.pdf" class="btn btn-1">
                      Know More
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Row>
      <Row>
        <Row>
          <div style={{ textAlign: "center" }}>
            <h2>Village Details</h2>
            Comprehensive data about the village.
          </div>
        </Row>
        <Col className="my-5" md={{ span: 4, offset: 2 }}>
          <div className="my-2" style={{ textAlign: "center" }}>
            <h4> Location</h4>
          </div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Level</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>State</td>
                <td>Uttarakhand</td>
              </tr>
              <tr>
                <td>District</td>
                <td>Haridwar</td>
              </tr>
              <tr>
                <td>Gram Panchayat</td>
                <td>Beladi Salhapur</td>
              </tr>
              <tr>
                <td>Village Head/Pradhan</td>
                <td>Pinki</td>
              </tr>
              <tr>
                <td>Block</td>
                <td>Roorkee</td>
              </tr>
              <tr>
                <td>Block Officer</td>
                <td></td>
              </tr>
              <tr>
                <td>Polica Station</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col className="my-5" md={{ span: 4 }}>
          <div className="my-2" style={{ textAlign: "center" }}>
            <h4> Demography</h4>
          </div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Particular</th>
                <th>Total</th>
                <th>Male</th>
                <th>Female</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total no. of Houses</td>
                <td>340</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Population</td>
                <td>1860</td>
                <td>1001</td>
                <td>859</td>
              </tr>
              <tr>
                <td>Child (0-6)</td>
                <td>309</td>
                <td>172</td>
                <td>137</td>
              </tr>
              <tr>
                <td>Schedule Caste</td>
                <td>1263</td>
                <td>675</td>
                <td>588</td>
              </tr>
              <tr>
                <td>Schedule Tribes</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Literacy</td>
                <td>60.16%</td>
                <td>68.03%</td>
                <td>50.98%</td>
              </tr>
              <tr>
                <td>Total Workers</td>
                <td>504</td>
                <td>469</td>
                <td>35</td>
              </tr>
              <tr>
                <td>Main Workers</td>
                <td>479</td>
                <td>449</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Marginal Workers</td>
                <td>25</td>
                <td>20</td>
                <td>5</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};
