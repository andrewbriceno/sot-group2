import React, { useState } from "react";
import {Redirect} from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table"

import axios from 'axios';
var config = {
  headers: {'Access-Control-Allow-Origin': '*'},
  crossDomain: true
}

function deleteGloss(title) {
  axios.delete('http://localhost:3001/api/admin/delete_glossary/' + title, config)
    .then(console.log('successfully deleted ' + title));
}

class AdminGlossary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: ['Hello']
    };
  }

  //https://reactjs.org/docs/faq-ajax.html
  componentDidMount() {
    axios.get('http://localhost:3001/api/admin/get_glossary', config)
      .then((res) => {
        console.log(res.data);
        this.setState({
          isLoaded: true,
          items: res.data
        });
      });
  };
  

  render() {
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
              <Button variant="secondary" href="/addGloss">Add Term</Button>
            </Col>
          </Row>
        </Container>
        <div class="glossary-list">
        <Container>
            {/* A list would be here, of terms and their definitions */}
            <h4>Lorem</h4>
            <p>Ipsum dolor and all that.</p>
            <div>
            <Table striped bordered hover>
            <thead>
              <tr>
                <td>Title</td>
                <td>Usage</td>
              </tr>
              </thead>
              
              {this.state.items.map(g => {
                return(
                  <tr class="adglossary_item" key={g._id} name={g.title}>
                    <td class="adgloss_col">{g.title}</td>
                    <td class="adgloss_col">{g.usage}</td>
                    <td><a class="btn btn-success editButton" href={"/editGloss"+'?key='+g._id+"&title="+g.title}>EDIT</a>
                    <button class="btn btn-danger" onClick={() => deleteGloss(g.title)}>DELETE</button></td>
                  </tr>
                )
              })}
              </Table>
            </div>
        </Container>
        </div>
      </div>
    );
  }
}

export default AdminGlossary;
