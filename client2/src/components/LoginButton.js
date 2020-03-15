import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, {useState, useEffect} from 'react';

const LoginButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // render() {
    return (
      <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Let's get the extra credit</Modal.Title>
      </Modal.Header>
      <Modal.Body>Put login here</Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Let's go!
      </Button>
      </Modal.Footer>
      </Modal>
      </>
    );
  // }
}

export default LoginButton;
