import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import config from './config.js';
import React, {useState, useEffect} from 'react';

const LoginButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const handleSubmit = (event) => {
    // event.preventDefault();
    let data = {
      "email": email,
      "password": pw
    }

    axios.post(`http://localhost:${config.server_port}/api/users/signin`, data)
      .then(res => {
        const token = res.data.token;
        localStorage.setItem(`user-token-${email}`, token);
        console.log("token => ", token);
      })

  };

  // render() {
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Login
    </Button>
    <Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" id="emailinput" onChange = {(event) => setEmail(event.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" id="pwinput" onChange = {(event) => setPw(event.target.value)} />
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Login
          </Button>

        </Modal.Footer>
      </Modal>
    </Form>

    </>
);
// }
}

export default LoginButton;
