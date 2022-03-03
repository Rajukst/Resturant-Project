import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

import "./Login.css";
const Login = () => {
  const [loginUser, setLoginUser] = useState({});
  const { user, signInUser, error } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleLoginSubmit = (e) => {
    signInUser(loginUser.email, loginUser.Password, location, history);
    e.preventDefault();
    e.target.reset();

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logged In SuccessFully",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const loginOnChange = (e) => {
    const nameField = e.target.name;
    const fieldValue = e.target.value;
    const newData = { ...loginUser };
    newData[nameField] = fieldValue;
    setLoginUser(newData);
  };
  return (
    <div className="my-section">
      <div className="login-continer m-2">
        <h1>User Login</h1>
        <div className="user-container mt-5">
          <form onSubmit={handleLoginSubmit}>
            <input
              type="email"
              id="fname"
              name="email"
              placeholder="User Email"
              onChange={loginOnChange}
              required
            />
            <br />
            <input
              type="password"
              id="fname"
              name="Password"
              placeholder="Password"
              onChange={loginOnChange}
              required
            />
            <br />
            <div className="all-buttons">
              <Button type="submit" className="mt-3">
                Log In
              </Button>
              <Button className="mt-3">Sign With Google</Button>
            </div>
          </form>

          <div className="mt-5 text-light">
            New User? <Link to="/register">Register Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
