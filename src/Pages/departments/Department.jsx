import styles from "./Departments.module.css";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
export const Department = () => {
  return (
    <div id="department">
      <SectionTitle
        title="Departments"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit"
      />
      <Container className="my-5">
        <Row>
          <Col md={3}>
            <ul className={styles.menu}>
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Hepatology</li>
              <li>Pediatrics</li>
              <li className={styles.select}>Ophthalmologists</li>
            </ul>
          </Col>
          <Col md={6}>
            <h4 className={styles.header}>Ophthalmologists</h4>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              ea consequatur, nisi amet temporibus consequuntur incidunt, nulla
              minus eius ex magni. Natus, necessitatibus. Eveniet, dicta
              incidunt suscipit iusto ipsa rem?
            </p>
          </Col>
          <Col md={3}>
            <img
              className="w-100 h-100"
              src="/imgs/departments-5.jpg"
              alt="depertments"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
