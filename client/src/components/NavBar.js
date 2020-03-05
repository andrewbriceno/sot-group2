import React from 'react';
import logo from '../considerherbs2500x579.jpg';
import { Menu } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import '../App.css';

function NavBar() {
  return (
    <nav>
        <Menu>
            <Link className="item" to="/"> Log in/Sign Up </Link>
            <Link className="item" to="/"> Did You Know? </Link>
            <Link className="item" to="/"> Forum </Link>
            <Link className="item" to="/"> <img src={logo} alt="logo"/></Link>
            <Link className="item" to="/"> Glossary</Link>
            <Link className="item" to="./about"> About</Link>
            <Link className="item" to="/"> Schedule </Link>
        </Menu>
    </nav>
  );
}

export default NavBar;
