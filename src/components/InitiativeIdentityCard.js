import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import "../css/StudentTeam.css";
export const InitiativeIdentityCard = (props) => {
  return (
    <Col xs={12} sm={12} md={4}>
      <Card className="initCard my-2">
        <Card.Img src={props.initImg} />
        <Card.Body className="text-center initBody">
          <Card.Text className="cardText">{props.villageDate}</Card.Text>
          <Card.Text className="cardText">{props.initiativeName}</Card.Text>
          <hr style={{ width: "10%", margin: "9px auto" }} />
          <Card.Text style={{ color: "#777777" }}>
            {props.aboutInitiative}
          </Card.Text>
        </Card.Body>
        <Card.Link
          className="text-center initLink"
          href={props.knowMore}
          target="_blank"
        >
          <Button className="initButton" variant="warning">
            Know More
          </Button>
        </Card.Link>
      </Card>
    </Col>
  );
};
