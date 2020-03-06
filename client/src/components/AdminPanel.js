import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";


const AdminPanel = props => {
  return (
    <div className="Admin">      
        <div class="jumbotron-fluid text-light bg-dark sticky-top admin-head">
          <div class="container">
            <h1 class="display-4">ADMIN PANEL</h1>
            <h3>Welcome back!</h3>
          </div>        
      </div>

      <Container>
        <CardDeck>
          <CardColumns>
            <Card>
              <a class="card-link" href="/admingloss">
                <Card.Img
                  variant="top"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />
                <Card.Body>
                  <Card.Title>Glossary</Card.Title>
                </Card.Body>
              </a>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://react.semantic-ui.com/images/wireframe/image.png"
              />
              <Card.Body>
                <Card.Title>Remedy List</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://react.semantic-ui.com/images/wireframe/image.png"
              />
              <Card.Body>
                <Card.Title>Forum</Card.Title>
              </Card.Body>
            </Card>
          </CardColumns>
          <CardColumns>
            <Card>
              <Card.Img
                variant="top"
                src="https://react.semantic-ui.com/images/wireframe/image.png"
              />
              <Card.Body>
                <Card.Title></Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://react.semantic-ui.com/images/wireframe/image.png"
              />
              <Card.Body>
                <Card.Title></Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://react.semantic-ui.com/images/wireframe/image.png"
              />
              <Card.Body>
                <Card.Title></Card.Title>
              </Card.Body>
            </Card>
          </CardColumns>
        </CardDeck>
      </Container>
    </div>
  );
};

export default AdminPanel;
