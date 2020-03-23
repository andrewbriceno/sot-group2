import '../App.css';
import React from 'react';
import axios from 'axios';
import config from '../config.js';

class AdminEditGlossary extends React.Component {

  state = {
    title: "",
    definition: "",
    usage: "",
    is_published: ""
  }

  componentDidMount() {
    //grab key
    //https://www.sitepoint.com/get-url-parameters-with-javascript/
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const key = urlParams.get("key");
    //var title = urlParams.get("title")

    //check to see if it needs to be redirected
    if(! urlParams.has("key")) {
      window.location.replace(`/admin/glossary_list`);
    } else {
      //grab data from key
      axios.get(`http://localhost:${config.server_port}/api/admin/get_glossary`)
        .then((res) => {
          var data = res.data.filter(g => g._id == key)[0];
          
          //set data one at a time
          this.setState({
            title: data.title,
            definition: data.definition,
            usage: data.usage,
            is_published: data.is_published
          });
      });
    }
  }

  handleInput(e) {
    var name = e.target.id;
    var value = e.target.value;

    switch(name){
      case 'title':
        this.setState({
          title: value,
          definition: this.state.definition,
          usage: this.state.usage,
          is_published: this.state.is_published
        });
        break;
      case 'definition':
        this.setState({
          title: this.state.title,
          definition: value,
          usage: this.state.usage,
          is_published: this.state.is_published
        });
        break;
      case 'usage':
        this.setState({
          title: this.state.title,
          definition: this.state.definition,
          usage: value,
          is_published: this.state.is_published
        });
        break;
      case 'draft':
        this.setState({
          title: this.state.title,
          definition: this.state.definition,
          usage: this.state.usage,
          is_published: (!(e.target.checked))
        });
        break;
    }
  }

  makeIt(e) {
    var toSubmit = this.state;
    if(toSubmit.title && toSubmit.definition && toSubmit.usage) {
      axios.put(`http://localhost:${config.server_port}/api/admin/update_glossary/${toSubmit.title}`, toSubmit);
    } else {
      console.log("not done yet");
    }
  }

  render() {
    return (
      <div className="App">
  
      <div className="site-wrap">
  
        <h1>Editing Glossary</h1>
        <a href="/admin/glossary_list" className="btn btn-primary text-white px-4">go back</a>
        <p/>

        <div>
          <form>
            <label>Title: {this.state.title}</label>
            <p/>
            <label for="definition">Definition: </label>
            <input id="definition" type="text" name="definition" value={this.state.definition} onChange={this.handleInput.bind(this)} required/>
            <p/>
            <label for="usage">Usage: </label>
            <input id="usage" type="text" name="usage" value={this.state.usage} onChange={this.handleInput.bind(this)} required/>
            <p/>
            <input type="checkbox" id="draft" name="draft" checked={!(this.state.is_published)} onChange={this.handleInput.bind(this)}/>
            <label for="draft">Draft</label>
            <p/>
            <input type="submit" value="Save" onClick={this.makeIt.bind(this)}/>
          </form>
        </div>

      </div>
      </div>
    );
    }

};

export default AdminEditGlossary;