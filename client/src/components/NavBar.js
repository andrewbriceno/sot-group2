import React from 'react';
import logo from '../considerherbs2500x579.jpg';
import { Menu } from 'semantic-ui-react';
import '../App.css';

function NavBar() {
  return (
    <div className="Nav">
        <Menu>
            <div className="item"> Log in/Sign Up </div>
            <div className="item"> Did You Know? </div>
            <div className="item"> Forum </div>
            <img src={logo} alt="logo" width="20%"/>
            <div className="item"> Glossary </div>
            <div className="item"> About </div>
            <div className="item"> Schedule </div>
        </Menu>
    </div>
  );
}

export default NavBar;
