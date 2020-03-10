import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Axios from "axios";
import { BrowserRouter } from "react-router-dom";
var config = {
  headers: {'Access-Control-Allow-Origin': '*'},
  crossDomain: true
}

function EditGlossary(props) {
  const handleInput = (event) => {
    var name = event.target.id;
    var value = event.target.value;

    switch(name) {
      case 'title':
        setTitle(value);
        break;
      case 'definition':
        setDefinition(value);
        break;
      case 'usage':
        setUsage(value);
        break;
      case 'is_draft':
        set_is_published(!(event.target.checked));
        break;
    }
  };

  //seperated it out because it doesnt like updating jsons
  const [title, setTitle] = useState('');
  const [definition, setDefinition] = useState('');
  const [usage, setUsage] = useState('');
  const [is_published, set_is_published] = useState(false);
  //const [glossary, setGlossary] = useState({title: '', definition: '', usage: '', is_published: false});

  const makeIt = (event) => {
    var toSubmit = {title: title, definition: definition, usage: usage, is_published: is_published};
    if(title && definition && usage) {
      Axios.put('http://localhost:3001/api/admin/add_glossary'+title, toSubmit, config)
    } else {
      console.log("not done yet");
    }
  }
  
  useEffect(() => {
    //grab key
    //https://www.sitepoint.com/get-url-parameters-with-javascript/
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const key = urlParams.get("key");
    //var title = urlParams.get("title")

    //check to see if it needs to be redirected
    if(! urlParams.has("key")) {
      window.location.replace('http://localhost:3000/admingloss');
    } else {
      //grab data from key
      Axios.get('http://localhost:3001/api/admin/get_glossary', config)
        .then((res) => {
          var data = res.data.filter(g => g._id == key)[0];
          
          //set data one at a time
          setTitle(data.title);
          setDefinition(data.definition);
          setUsage(data.usage);
          set_is_published(data.is_published);
      });
    }
  }, []);

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
            <input type="string" class="form-control" id="title" placeholder="Glossary Title" value={title} onChange={handleInput} required disabled/>
          </div>
          <div class="form.group">
            <label for="definition">Definition</label>
            <input type="string" class="form-control" id="definition" placeholder="Glossary Definition" value={definition} onChange={handleInput} required/>
          </div>
          <div class="form.group">
            <label for="usage">Usage</label>
            <input type="string" class="form-control" id="usage" placeholder="Glossary Usage" value={usage} onChange={handleInput} required/>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="is_draft" checked={!(is_published)} onChange={handleInput}/>
            <label class="form-check-label" type="is_draft">Draft</label>
          </div>
          <button type="submit" class="btn btn-primary" onClick={makeIt}>Submit</button>
        </form>
      </Container>
    </div>
  );
};

export default EditGlossary;