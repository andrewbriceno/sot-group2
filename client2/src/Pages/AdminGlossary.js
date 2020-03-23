import React from 'react';
// import { Link } from 'react-router';
import { Link } from 'react-router-dom';
import '../App.css';
import AdminViewGlossary from '../components/AdminViewGlossary';

class AdminGlossary extends React.Component {

  state={
    query: ""
  }

  setFilter (e) {
    this.setState({
      query: e.target.value
    });
  }

  render() {
  return (
    <div className="App">

    <div className="site-wrap">

      <h1>Glossary Panel</h1>
      <a href="/admin" className="btn btn-primary text-white px-4">go back</a>
      <p/>

      <input type="text" name="search" placeholder="Search Title Here!" onChange={this.setFilter.bind(this)}/>
      <a className="btn btn-primary text-white px-4" href="/admin/add_glossary?new=true">Add</a>

      <AdminViewGlossary query={this.state.query}/>

    </div>
    </div>
  );
  }
}

export default AdminGlossary;