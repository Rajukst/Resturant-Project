import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import useFirebase from "../../../Hooks/useFirebase";
const NavBars = () => {
  const { user, logOut } = useFirebase();
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <h4 className="text-light me-5">Diana</h4>
            <Nav className="me-auto responsiveUi">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/dashboard">Dashboard</Link>
            </Nav>
            <Nav>
              <div className="font">
                <FontAwesomeIcon
                  className="text-light me-5"
                  icon={faCartPlus}
                  size="2x"
                />
                <div className="text-light me-2">Logged: {user.email} </div>
                {user.email ? (
                  <Button onClick={logOut}>LogOut</Button>
                ) : (
                  <Link className="class-link" to="/login">
                    Login
                  </Link>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBars;
