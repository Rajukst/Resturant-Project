import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCoffee } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
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
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
