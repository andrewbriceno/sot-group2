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
    // localStorage.setItem("user_logged", false)
    this.setState({nav: true})
  }

  render() {
    const {nav} = this.state;

    if (this.props.loginData) {
      console.log("LOGIN DATA ====");
      this.props.loginData()
    }

    if (nav) {
      return <a href="/" onClick={this.logout}>Logout</a>
    }

    return <a href="/" onClick={this.logout}>Logout</a>
  }
}

export default Logout;
