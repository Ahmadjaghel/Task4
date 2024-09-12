import styles from "./Doctors.module.css";
import { Col, Container, Row } from "react-bootstrap";

import { DoctorCard } from "../../components/doctors/DoctorCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const doctors = [
  {
    name: "Walter White",
    specialty: "Chief Medical Officer",
    img: "/imgs/doctors/doctors-1.jpg",
  },
  {
    name: "Sarah Jhonson",
    specialty: "Anesthesiologist",
    img: "/imgs/doctors/doctors-2.jpg",
  },
  {
    name: "William Anderson",
    specialty: "Cardialogy",
    img: "/imgs/doctors/doctors-3.jpg",
  },
  {
    name: "Amanda Jepson",
    specialty: "Neursurgeon",
    img: "/imgs/doctors/doctors-4.jpg",
  },
];

export const Doctors = () => {
  return (
    <div className={`${styles.doctors} py-5`} id="doctors">
      <SectionTitle
        title="Doctors"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
      />
      <Container>
        <Row>
          {doctors.map((item, index) => {
            return (
              <Col key={index} className="mt-3" md={4} lg={3}>
                <DoctorCard doctor={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
