import React, { useEffect } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { AnimationWrapper } from "react-hover-animation";
import "./Explore.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Explore = ({ exploreProducts }) => {
  useEffect(() => {
    AOS.init();
  });
  const { _id, name, image, description, price } = exploreProducts;
  return (
    <div className="div-left" data-aos="zoom-in">
      <AnimationWrapper style={{ opacity: false }}>
        <Col className="my-card">
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Title>{price}</Card.Title>
              <Card.Text className="description">
                {description.slice(0, 200)}
              </Card.Text>
              <div className="button-div">
                <Button variant="outline-primary">
                  {" "}
                  <FontAwesomeIcon
                    className="font-div "
                    icon={faCartPlus}
                  />{" "}
                  Add To Cart
                </Button>
                <Link to={`/order-page/${_id}`}>
                  {" "}
                  <Button variant="outline-info">Food Details</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </AnimationWrapper>
    </div>
  );
};

export default Explore;
