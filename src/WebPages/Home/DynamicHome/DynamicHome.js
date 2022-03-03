import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const DynamicHome = () => {
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  const { serviceId } = useParams();
  console.log(serviceId._id);
  useEffect(() => {
    fetch(
      `https://shrouded-mountain-85773.herokuapp.com/place-order/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.status = "pending";
    console.log(data);
    fetch("https://shrouded-mountain-85773.herokuapp.com/confirmOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="my-div">
      <Container>
        <Row className="mt-5">
          <Col xs={12} md={4} lg={4}>
            <img src={product.image} alt="" />
            <h1> Total Price: {product?.price}</h1>
            <h4>Product Description: {product.description} </h4>
          </Col>
          <Col xs={12} md={8} lg={8}>
            <h2>To Buy Product Please Fillup this Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                defaultValue={product?.name}
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("date")}
                // placeholder="Name"
                type="date"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("address")}
                placeholder="address"
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("price", { required: true })}
                defaultValue={product?.price}
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("image", { required: true })}
                defaultValue={product?.image}
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Order Now"
                className="btn btn-info w-50"
              />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DynamicHome;
