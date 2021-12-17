import React from "react";
import { Card, Col } from "react-bootstrap";
import "../css/StudentTeam.css";
export const IdentityCard = (props) => {
  return (
    <Col xs={12} sm={12} md={4}>
      <Card className="studCard">
        <Card.Body className="text-center cardBody">
          <Card.Img src={props.studImg} />
          <Card.Title>
            <br />
            {props.name}
            <br />
          </Card.Title>
          <Card.Text className="cardText">
            {props.pos} <br /> {props.email}
          </Card.Text>
        </Card.Body>
        <Card.Link
          className="text-center profileWord"
          href={props.linkedIn}
          target="_blank"
        >
          Profile
        </Card.Link>
      </Card>
    </Col>
  );
};
