import React from "react";
import logo from "../considerherbs2500x579.jpg";
// import { Menu } from 'semantic-ui-react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
// import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <nav>
      {/* <Navbar>
     
      </Navbar> */}

      <Navbar bg="light" expand="lg">
        <Image src={logo} alt="logo" href="/" width="20%" fluid rounded />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="item" href="/">
              Did You Know?
            </Nav.Link>
            <Nav.Link className="item" href="/">
              Forum
            </Nav.Link>
            <Nav.Link className="item" href="/">
              Glossary
            </Nav.Link>
            <Nav.Link className="item" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="item" href="/">
              Schedule
            </Nav.Link>
            <Nav.Link className="item" href="/login">
              Log in/Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}

export default NavBar;
