import React from 'react';
import ViewProducts from '../components/ViewProducts';
import NavBar from '../components/NavBar';
// import { Link } from 'react-router';
import { Link } from 'react-router-dom';
import '../App.css';
import Footer from '../components/Footer';

class Admin extends React.Component {
  render() {
  return (
    <div className="App">

    <div id="overlayer"></div>
    <div className="loader">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>

    <div className="site-wrap">

      <h1>Admin Panel</h1>


      <div className="row">
        <div className="media-image">
          <img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
          <div className="media-image-body">
            <h2 className="font-secondary text-uppercase">Glossary</h2>
            <p>Add, edit, and delete items.</p>
            <p><a href="#" className="btn btn-primary text-white px-4">GO</a></p>
          </div>
        </div>
        <div className="media-image">
          <img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
          <div className="media-image-body">
            <h2 className="font-secondary text-uppercase">Remedy</h2>
            <p>Add, edit, and delete items.</p>
            <p><a href="#" className="btn btn-primary text-white px-4">Go</a></p>
          </div>
        </div>
        <div className="media-image">
          <img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
          <div className="media-image-body">
            <h2 className="font-secondary text-uppercase">Remedy</h2>
            <p>Add, edit, and delete items.</p>
            <p><a href="#" className="btn btn-primary text-white px-4">Go</a></p>
          </div>
        </div>
        <div className="media-image">
          <img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
          <div className="media-image-body">
            <h2 className="font-secondary text-uppercase">Users</h2>
            <p>Add, edit, and delete items.</p>
            <p><a href="#" className="btn btn-primary text-white px-4">Go</a></p>
          </div>
        </div>
        <div className="media-image">
          <img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
          <div className="media-image-body">
            <h2 className="font-secondary text-uppercase">Forum</h2>
            <p>Add, edit, and delete items.</p>
            <p><a href="#" className="btn btn-primary text-white px-4">Go</a></p>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
  }
}

export default Admin;