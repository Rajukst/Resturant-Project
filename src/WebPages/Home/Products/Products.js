import React, { useEffect, useState } from "react";
import { Row, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import Explore from "./Explore";

const Products = () => {
  const [explore, setExplore] = useState([]);
  const [visible, setVisible] = useState(4);
  const showMore = () => {
    setVisible((prevValue) => prevValue + 4);
    if (visible > explore.length) {
      Swal.fire({
        title: "You Reached The end of Data",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };
  useEffect(() => {
    fetch("http://localhost:5000/home-product")
      .then((res) => res.json())
      .then((data) => setExplore(data));
  }, []);
  return (
    <div>
      <Row xs={1} md={3} lg={4} className="g-5 m-2">
        {explore.slice(0, visible).map((getExploreProducts) => (
          <Explore
            key={getExploreProducts._id}
            exploreProducts={getExploreProducts}
          ></Explore>
        ))}
      </Row>
      <Button
        variant="outline-primary"
        className="mt-5 mb-5"
        onClick={showMore}
      >
        Load More Data
      </Button>
    </div>
  );
};

export default Products;
