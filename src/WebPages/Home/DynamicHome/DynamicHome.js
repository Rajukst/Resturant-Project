import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const DynamicHome = () => {
  const { user } = useAuth();

  const { serviceId } = useParams();
  const [items, setItems] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/order-place/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  // confirm order
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (myData) => {
    console.log(myData);
    fetch("http://localhost:5000/confirm-order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title:
              "Order Confirmed... Please Check your Dashboard for payment Option",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
  };
  return (
    <div>
      <h1>Your Order</h1>
      <Container>
        <Row>
          <Col xs={12} md={5} lg={5}>
            <h3>Product Name: {items.name} </h3>
            <h3>Product Price: {items.price} </h3>
            <h3>Product Details: {items.description} </h3>
            <h3>User: {user.email} </h3>
            <h2>To Buy Product Please Fillup this Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                defaultValue={items?.name}
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
                defaultValue={items?.price}
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("email", { required: true })}
                defaultValue={user?.email}
                className="p-2 m-2"
                className="p-2 m-2 w-100"
              />
              <input
                {...register("image", { required: true })}
                defaultValue={items?.image}
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
          <Col xs={12} md={7} lg={7}>
            <img className="img-fluid" src={items.image} alt="Item Product" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DynamicHome;
