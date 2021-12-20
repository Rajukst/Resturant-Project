import React from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import slide1 from "../../Images/slide1.png";
import "animate.css";
import "./TopBanner.css";
const TopBanner = () => {
  return (
    <>
      <div className="top-div">
        <Carousel fade>
          <Carousel.Item>
            <Container>
              <Row>
                <Col xs={12} md={7}>
                  This is Left
                </Col>
                <Col xs={12} md={5}>
                  <img
                    className="img-fluid mt-5 animate__animated animate__backInRight"
                    src={slide1}
                    alt="Third slide"
                  />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col xs={12} md={7}>
                  This is Left
                </Col>
                <Col xs={12} md={5}>
                  <img
                    className="img-fluid mt-5 animate__animated animate__flip"
                    src={slide1}
                    alt="Third slide"
                  />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col xs={12} md={7}>
                  This is Left
                </Col>
                <Col xs={12} md={5}>
                  <img
                    className="img-fluid mt-5 animate__animated animate__rotateIn"
                    src={slide1}
                    alt="Third slide"
                  />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default TopBanner;
