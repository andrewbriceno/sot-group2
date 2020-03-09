import React, {useState} from "react";
import logo from "../considerherbs2500x579.jpg";
// import { Menu } from 'semantic-ui-react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
// import { Link } from "react-router-dom";
import "../App.css";



function NavBar() {
  const [redirect, setRedirect] = useState(false);

  function navigateHome(){
    if(true){
      window.location.assign("/");
    }
  }

  return (
    <nav>
      {/* <Navbar>
     
      </Navbar> */}

      <Navbar bg="light" expand="lg">
        <Image src={logo} alt="logo" href="/home" width="20%" fluid rounded onClick={() => navigateHome()}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="item" href="/didyouknow">
              Did You Know?
            </Nav.Link>
            <Nav.Link className="item" href="/forum">
              Forum
            </Nav.Link>
            <Nav.Link className="item" href="/glossary">
              Glossary
            </Nav.Link>
            <Nav.Link className="item" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="item" href="/schedule">
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
