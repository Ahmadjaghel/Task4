import React from "react";
import "./AboutCard.css";
import Card from "react-bootstrap/Card";
const AboutCard = ({ icon, title, text }) => {
  return (
    <>
      <Card className=" py-1 px-4 shadow w-aboutcard d-flex flex-row justify-content-center align-items-center">
        {icon()}
        <Card.Body>
          <Card.Title className="fw-bolder fs-1">{title}</Card.Title>
          <Card.Text className="fs-5">{text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default AboutCard;
