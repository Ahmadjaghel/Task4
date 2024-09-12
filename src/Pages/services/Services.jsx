import styles from "./Services.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaHeartbeat } from "react-icons/fa";
import { BsCapsulePill } from "react-icons/bs";
import { BsPersonWheelchair } from "react-icons/bs";
import { TbLibraryPlus } from "react-icons/tb";
import { FaDna } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { ServicCard } from "../../components/ServicesComponent/ServicCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Services = () => {
  const services = [
    {
      title: "Nesciunt Mete",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icon: () => (
        <FaHeartbeat
          className={`${styles.serviceIcon} rounded-circle shadow`}
        />
      ),
    },
    {
      title: "Eosle Commodi",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icon: () => (
        <BsCapsulePill
          className={`${styles.serviceIcon} rounded-circle shadow`}
        />
      ),
    },
    {
      title: "Ledo Markt",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icon: () => (
        <IoPersonAdd
          className={`${styles.serviceIcon} rounded-circle shadow`}
        />
      ),
    },
    {
      title: "Asperiores Commodit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icon: () => (
        <FaDna className={`${styles.serviceIcon} rounded-circle shadow`} />
      ),
    },
    {
      title: "Velit Doloremque",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icon: () => (
        <BsPersonWheelchair
          className={`${styles.serviceIcon} rounded-circle shadow`}
        />
      ),
    },
    {
      title: "Dolori Architecto",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit,Lorem ipsum dolor sit amet consectetur adipisicing elit",
      icon: () => (
        <TbLibraryPlus
          className={`${styles.serviceIcon} rounded-circle shadow`}
        />
      ),
    },
  ];
  return (
    <div className={`${styles.services} py-5`} id="services">
      <Container>
        <SectionTitle
          title="Services"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit"
        />
        <Row>
          {services.map((item, index) => {
            return (
              <Col key={index} className="mt-3" md={4}>
                <ServicCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
export default Services;
