import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import { FaRegUserCircle } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { MdExitToApp } from "react-icons/md";
import "../App.css";

const logOutPopover = (
    <Popover id="popover-basic">
      
      <ListGroup variant="flush">
        <ListGroupItem action href="/">View site <FiEye size={16}/></ListGroupItem>
        <ListGroupItem action>Log out <MdExitToApp size={16}/></ListGroupItem>
     </ListGroup>
     
    </Popover>
  );


const AdminNavBar = () => {
  return (
    <Navbar bg="success" >
      <Navbar.Brand>
          <Image src="images/logo.jpg" width="250" height="55" rounded />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Navbar.Brand>
          <h2 className="text-light">Admin Panel</h2>
        </Navbar.Brand>
      </Nav>     
      
      <OverlayTrigger trigger="click" placement="left" overlay={logOutPopover}>
      
      <Button variant="success">
       <h3 className="text-light" style={{marginBottom:'0em'}}><FaRegUserCircle size={32} color="white" style={{marginBottom:'0.5rem'}}/> Options </h3> 
      </Button>
      </OverlayTrigger>
      
    </Navbar>
  );
};

export default AdminNavBar;
