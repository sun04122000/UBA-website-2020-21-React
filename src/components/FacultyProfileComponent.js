import React from 'react'
import { Container, Image, Row } from "react-bootstrap";
import "../css/FacultyTeam.css";

export const FacultyProfileComponent = (props) => {
    return (
        <Row className="member-content">
            <div class="col-sm-3 col-sm-offset-1 member-thumb  fade-right in">
              <Image
                id="pic"
                className="img-responsive img-center img-thumbnail img-circle"
                src={props.FacultyImage}
                roundedCircle
              />
              <h4>{props.Name}</h4>
              <p class="title">{props.Title}</p>
            </div>
            <Container className="col-sm-7 mt-4">
              <div class="details">
                <p>
                  {props.About}
                </p>
                <ul class="social-content">
                  <li>
                    <a href={props.email}>
                      <i class="fa fa-envelope fa-fw"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.twitter}>
                    <i class="fa fa-twitter fa-fw"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.facebook}>
                      <i class="fa fa-facebook fa-fw"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.linkedin}>
                      <i class="fa fa-linkedin fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Container>
          </Row>
    )
}

