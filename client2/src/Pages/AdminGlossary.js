import React from 'react';
// import { Link } from 'react-router';
import { Link } from 'react-router-dom';
import '../App.css';
import AdminViewGlossary from '../components/AdminViewGlossary';

class Admin extends React.Component {
  render() {
  return (
    <div className="App">

    <div className="site-wrap">

      <h1>Glossary Panel</h1>
      <a href="/admin" className="btn btn-primary text-white px-4">go back</a>
      <p/>

      <a className="btn btn-primary text-white px-4" href="/admin/add_glossary?new=true">Add</a>

      <AdminViewGlossary/>

    </div>
    </div>
  );
  }
}

export default Admin;