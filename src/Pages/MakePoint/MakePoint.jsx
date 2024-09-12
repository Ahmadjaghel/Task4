import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "./MakePoint.module.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Apointment from "../../components/Apointment/Apointment";
const MakePoint = () => {
  return (
    <div className={styles.bgf7f}>
      <div className="container pb-3">
        <SectionTitle
          title="MAKE AN APPOINTMENT"
          text="Necessitatibus eius consequatur ex aliquid fuge eum quidem sint consectetur velit"
        />
        <div>
          <div className="container text-center">
            <div className="row gap-3">
              <div className="col-12 col-md">
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Your Name"
                    aria-label="text"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <div className="col-12 col-md">
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Your Email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <div className="col-12 col-md">
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Your Phone"
                    aria-label="text"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
            </div>
          </div>

          <div className="container text-center mt-3">
            <div className="row gap-3">
              <div className="col-12 col-md">
                <InputGroup className="mb-3">
                  <Form.Control type="date" aria-describedby="basic-addon1" />
                </InputGroup>
              </div>
              <div className="col-12 col-md">
                <Form.Select>
                  <option value="">Select Department</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Form.Select>
              </div>
              <div className="col-12 col-md">
                <Form.Select>
                  <option value="">Select Doctor</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Form.Select>
              </div>
            </div>
          </div>

          <div className="container text-center mt-3">
            <div className="row">
              <div className="col">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Message(Optional)"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Apointment />
        </div>
      </div>
    </div>
  );
};

export default MakePoint;
