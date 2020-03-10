import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Axios from "axios";
var config = {
  headers: {'Access-Control-Allow-Origin': '*'},
  crossDomain: true
}

const addGlossary = props => {
  const handleInput = (event) => {
    var name = event.target.id;
    if(name == "is_draft") {
      glossaryMaker["is_published"] = !(event.target.checked);
    } else {
      var value = event.target.value;
      glossaryMaker[name] = value;
    }
  };
  var title = '';
  var glossaryMaker = {title: '', definition: '', usage: '', is_published: false};
  
  const makeIt = (event) => {
    if(glossaryMaker.title && glossaryMaker.definition && glossaryMaker.usage) {
      Axios.post('http://localhost:3001/api/admin/add_glossary', glossaryMaker, config)
    } else {
      console.log("not done yet");
    }
  }


  return (
    <div className="Admin">
      <div class="jumbotron-fluid text-light bg-dark sticky-top admin-head">
        <div class="container">
        <h1 class="display-4 admin-text">GLOSSARY </h1>
        <h3><a class="text-light adminlink" href="/admingloss">cancel</a></h3>
        </div>
      </div>

      <Container>
        <form class="needs-validation">
          <div class="form.group">
            <label for="title">Title</label>
            <input type="string" class="form-control" id="title" placeholder="Enter glossary title" onChange={handleInput} required/>
          </div>
          <div class="form.group">
            <label for="definition">Definition</label>
            <input type="string" class="form-control" id="definition" placeholder="Enter glossary definition" onChange={handleInput} required/>
          </div>
          <div class="form.group">
            <label for="usage">Usage</label>
            <input type="string" class="form-control" id="usage" placeholder="Enter glossary usage" onChange={handleInput} required/>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="is_draft" onChange={handleInput} defaultChecked/>
            <label class="form-check-label" type="is_draft">Draft</label>
          </div>
          <button type="submit" class="btn btn-primary" onClick={makeIt}>Submit</button>
        </form>
      </Container>
    </div>
  );
};

export default addGlossary;