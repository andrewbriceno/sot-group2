import React, {useState, useEffect} from 'react';
import LoginButton from '../components/LoginButton';
import Search from '../components/Search';
import logo from '../logo.svg';

const NavBar = () => {
    return(
    <div className="site-navbar-wrap js-site-navbar bg-white" style={{position: "fixed", boxShadow: "0 5px 5px rgba(0,0,0,0.2)"}}>

        <div className="container">
          <div className="site-navbar bg-light">
            <div className="row align-items-center">
              <div className="col-2">
                <h2 className="mb-0 site-logo"><a href="/"><img src="images/logo.jpg" width="250" height="55"/></a></h2>
              </div>
              <div className="col-10">
                <nav className="site-navigation text-right" role="navigation">
                  <div className="container">
                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>

                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                      <li className="active"><a href="/">Home</a></li>
                      <li className="has-children">
                        <a href="about">About</a>
                        <ul className="dropdown arrow-top">
                          <li><a href="testimonials.html">Testimonials</a></li>
                          <li><a href="gallery.html">Gallery</a></li>
                          <li><a href="faq.html">Forum</a></li>
                          <li><a href="why-choose-us.html">Why Choose Us</a></li>
                        </ul>
                      </li>
                      <li><a href="glossary">Glossary</a></li>
                      <li><a href="services.html">Services</a></li>
                      <li><a href="contact.html">Contact</a></li>
                      <li><LoginButton /></li>
                      <li><Search /></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
}

export default NavBar;
