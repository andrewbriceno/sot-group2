import React from "react";
import  { Redirect } from 'react-router-dom'
import "../App.css";
import Button from "react-bootstrap/Button";

class Logout extends React.Component {
  state = {
    nav: false
  }

  logout = () => {
    localStorage.clear();
    this.setState({nav: true})
  }

  render() {
    const {nav} = this.state;

    if (nav) {
      return <a href="/" onClick={this.logout}>Logout</a>
    }

    return <a href="/">Logout</a>
  }
}

export default Logout;
