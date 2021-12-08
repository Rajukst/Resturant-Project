import React from "react";
import { Carousel, Button } from "react-bootstrap";
import slide1 from "../../Images/slide1.jpg";
import slide2 from "../../Images/slide2.jpg";
import slide3 from "../../Images/slide3.jpg";
import "animate.css";
import "./TopBanner.css";
const TopBanner = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h1 className="animate__animated animate__bounceInDown">
              First slide label
            </h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button
              className="animate__animated animate__fadeInLeftBig"
              variant="outline-warning"
            >
              Order Now
            </Button>
            <Button
              className="animate__animated animate__fadeInRightBig ms-3"
              variant="outline-warning"
            >
              View
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />

          <Carousel.Caption>
            <h1 className="animate__animated animate__slideInDown">
              Second slide label
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button
              className="animate__animated animate__fadeInLeftBig"
              variant="outline-warning"
            >
              Order Now
            </Button>
            <Button
              className="animate__animated animate__fadeInRightBig ms-3"
              variant="outline-warning"
            >
              View
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default TopBanner;
