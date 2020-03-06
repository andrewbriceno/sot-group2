import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const AdminGlossary = props => {

 
  return (
    <div className="Admin">
      <div class="jumbotron-fluid text-light bg-dark sticky-top admin-head">
        <div class="container">
          <h1 class="display-4 admin-text">GLOSSARY </h1>
          <a class="text-light adminlink" href="/">
            <h3 class="link-h3"><i>see page</i></h3>
          </a>
          
          <h3><a class="text-light adminlink" href="/admin">go back</a></h3>
          
          
          
        </div>
      </div>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <Form>
              <Form.Control
                type="text"
                placeholder="Search Glossary"                
              />
            </Form>
          </Col>

          <Col xs={6} md={4}>
            <Button variant="secondary">Add Term</Button>
          </Col>
        </Row>
      </Container>
      <div class="glossary-list">
      <Container>
          {/* A list would be here, of terms and their definitions */}
          <h4>Lorem</h4>
          <p>Ipsum dolor and all that.</p>
      </Container>
      </div>
    </div>
  );
};

export default AdminGlossary;
