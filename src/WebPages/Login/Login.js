import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="my-section">
      <div className="login-continer m-2">
        <h1>User Login</h1>
        <div className="user-container mt-5">
          <input
            type="email"
            id="fname"
            name="email"
            placeholder="User Email"
          />
          <br />
          <input
            type="password"
            id="fname"
            name="Password"
            placeholder="Password"
          />
          <br />
          <div className="all-buttons">
            <Button className="mt-3">Sign Up</Button>
            <Button className="mt-3">Sign With Google</Button>
          </div>
          <div className="mt-5 text-light">
            New User? <Link to="/register">Register Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
