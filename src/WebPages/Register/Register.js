import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
import "./Register.css";

const Register = () => {
  const [registerUser, setRegisterUser] = useState({});
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (registerUser.Password === registerUser.Password2)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully Registred",
        showConfirmButton: false,
        timer: 1500,
      });
    else if (registerUser.Password !== registerUser.Password2)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your Password Was Incorrect!",
      });
  };
  const registerOnChange = (e) => {
    const nameField = e.target.name;
    const fieldValue = e.target.value;
    const newData = { ...registerUser };
    newData[nameField] = fieldValue;
    setRegisterUser(newData);
  };
  return (
    <div className="section">
      <div className="my-continer m-2">
        <h1>User Registration</h1>
        <div className="user-container mt-5">
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              id="fname"
              name="UserName"
              placeholder="UserName"
              onChange={registerOnChange}
            />
            <br />
            <input
              type="email"
              id="fname"
              name="email"
              placeholder="User Email"
              onChange={registerOnChange}
            />
            <br />
            <input
              type="password"
              id="fname"
              name="Password"
              placeholder="Password"
              onChange={registerOnChange}
            />
            <br />
            <input
              type="password"
              id="fname"
              name="Password2"
              placeholder="Retype Password"
              onChange={registerOnChange}
            />
            <br />
            <div className="all-buttons">
              <Button type="submit" className="mt-3">
                Sign Up
              </Button>
              <Button className="mt-3">Sign Up With Google</Button>
            </div>
            <div className="mt-5 text-light">
              Already Registered? <Link to="/login">Login Here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
