import '../App.css';
import React from 'react';
import axios from 'axios';
import config from '../config.js';

class AdminEditProducts extends React.Component {

  state = {
    name: "",
    ailment: "",
    body_part: "",
    is_published: "",
    is_premium: "",
    description: "",
    createdAt: ""
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
            name: data.name,
            ailment: data.ailment,
            body_part: data.body_part,
            is_published: data.is_published,
            is_premium: data.is_premium,
            description: data.description,
            createdAt: data.createdAt
          });
      });
    }
  }

  handleInput(e) {
    var nam = e.target.id;
    var value = e.target.value;

    switch(nam){
      case 'name':
        this.setState({
          name: value,
          ailment: this.state.ailment,
          body_part: this.state.ailment,
          is_published: this.state.is_published,
          is_premium: this.state.is_premium,
          description: this.state.description,
          createdAt: this.state.createdAt
        });
        break;
      case 'ailment':
        this.setState({
            name: this.state.name,
            ailment: value,
            body_part: this.state.ailment,
            is_published: this.state.is_published,
            is_premium: this.state.is_premium,
            description: this.state.description,
            createdAt: this.state.createdAt
        });
        break;
      case 'body_part':
        this.setState({
            name: this.state.name,
            ailment: this.state.ailment,
            body_part: value,
            is_published: this.state.is_published,
            is_premium: this.state.is_premium,
            description: this.state.description,
            createdAt: this.state.createdAt
        });
        break;
      case 'draft':
        this.setState({
            name: this.state.name,
            ailment: this.state.ailment,
            body_part: this.state.body_part,
            is_published: (!(e.target.checked)),
            is_premium: this.state.is_premium,
            description: this.state.description,
            createdAt: this.state.createdAt
          
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
  
        <h1>Editing Products</h1>
        <a href="/admin/glossary_list" className="btn btn-primary text-white px-4">go back</a>
        <p/>

        <div>
          <form>
            <label>Name: {this.state.name}</label>
            <p/>
            <label for="ailment">Ailment: </label>
            <input id="ailment" type="text" name="Ailment" value={this.state.ailment} onChange={this.handleInput.bind(this)} required/>
            <p/>
            <label for="body_part">Body Part: </label>
            <input id="body_part" type="text" name="body_part" value={this.state.body_part} onChange={this.handleInput.bind(this)} required/>
            <p/>
            <input type="checkbox" id="draft" name="draft" checked={!(this.state.is_published)} onChange={this.handleInput.bind(this)}/>
            <label for="draft">Draft</label>
            <p/>
            <input type="checkbox" id="premium" name="premium" checked={!(this.state.is_premium)} onChange={this.handleInput.bind(this)}/>
            <label for="draft">Is it premium?</label>
            <p/>
            <label for="description">Description: </label>
            <input id="description" type="text" name="description" value={this.state.description} onChange={this.handleInput.bind(this)} required/>
            <p/>
            <label for="created_at">Created At: </label>
            <input id="created_at" type="text" name="dcreated_at" value={this.state.created_at} onChange={this.handleInput.bind(this)} required/>
            <p/>
            <input type="submit" value="Save" onClick={this.makeIt.bind(this)}/>
          </form>
        </div>

      </div>
      </div>
    );
    }

};

export default AdminEditProducts;
