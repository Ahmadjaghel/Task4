import { TestimonialCard } from "../../components/testimonials/TestimonialCard";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import styles from "./Testimonials.module.css";
export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      name: "Jena Karlis",
      job: "Store Owner",
      img: "/imgs/testimonials/testimonials-1.jpg",
      opinion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque commodi veritatis numquam eum laudantium quis a, sunt recusandae doloribus ex",
    },
    {
      name: "Matt Brandon",
      job: "Enterpreneur",
      img: "/imgs/testimonials/testimonials-2.jpg",
      opinion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque commodi veritatis numquam eum laudantium quis a, sunt recusandae doloribus ex",
    },
    {
      name: "Johan Larson",
      job: "Freelancer",
      img: "/imgs/testimonials/testimonials-3.jpg",
      opinion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque commodi veritatis numquam eum laudantium quis a, sunt recusandae doloribus ex ",
    },
    {
      name: "Johan Larson",
      job: "Freelancer",
      img: "/imgs/testimonials/testimonials-4.jpg",
      opinion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque commodi veritatis numquam eum laudantium quis a, sunt recusandae doloribus ex ",
    },
    {
      name: "Johan Larson",
      job: "Freelancer",
      img: "/imgs/testimonials/testimonials-5.jpg",
      opinion:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque commodi veritatis numquam eum laudantium quis a, sunt recusandae doloribus ex",
    },
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="py-5">
      <Container>
        <SectionTitle
          title="Testimonials"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        />
        <Carousel
          className={` ${styles.cars} overflow-hidden d-none d-lg-block `}
        >
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col xs={12} md={4}>
                <TestimonialCard className="mb-4" item={testimonials[0]} />
              </Col>
              <Col xs={12} md={4}>
                <TestimonialCard className="mb-4" item={testimonials[1]} />
              </Col>
              <Col xs={12} md={4}>
                <TestimonialCard className="mb-4" item={testimonials[2]} />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col xs={12} md={4}>
                <TestimonialCard className="m-0" item={testimonials[3]} />
              </Col>
              <Col xs={12} md={4}>
                <TestimonialCard className="mb-4" item={testimonials[4]} />
              </Col>
              <Col xs={12} md={4}>
                <TestimonialCard className="mb-4" item={testimonials[1]} />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
        <Carousel
          className={` ${styles.cars} overflow-hidden d-lg-none d-block `}
        >
          <Carousel.Item className="mx-auto">
            <TestimonialCard className="mb-4" item={testimonials[0]} />
          </Carousel.Item>
          <Carousel.Item>
            <TestimonialCard className="mb-4" item={testimonials[1]} />
          </Carousel.Item>
          <Carousel.Item>
            <TestimonialCard className="mb-4" item={testimonials[2]} />
          </Carousel.Item>
          <Carousel.Item>
            <TestimonialCard className="mb-4" item={testimonials[3]} />
          </Carousel.Item>
          <Carousel.Item>
            <TestimonialCard className="mb-4" item={testimonials[4]} />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};
