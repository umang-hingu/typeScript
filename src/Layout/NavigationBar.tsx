import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="me-auto">
          <Nav className="me-auto">
            <Navbar.Brand>React</Navbar.Brand>
            <Nav.Link>
              <NavLink to="/homepage">Homepage</NavLink>
            </Nav.Link>

            {token ? (
              <Nav.Link>
                <NavLink
                  to="/"
                  onClick={() => localStorage.removeItem("token")}
                >
                  Logout
                </NavLink>
              </Nav.Link>
            ) : (
              <>
                <Nav.Link>
                  <NavLink to="/">Login Page</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/registration">Registration Page</NavLink>
                </Nav.Link>
              </>
            )}
            <Nav.Link>
              <NavLink to="/about-us">About Us</NavLink>
            </Nav.Link>
          </Nav>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavigationBar;
