import React from "react";
import "../App.css";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Jumbotron, Container } from "react-bootstrap";

function LoginPage() {
  return (
    <div className="LoginPage">
      <NavBar />
      <Container>
          <h2>Log In</h2>
        <Jumbotron>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button href="/admin">Log In</Button>
          </Form>
        </Jumbotron>
      </Container>      
    </div>
  );
}

export default LoginPage;
