import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React, {useState, useEffect} from 'react';

const ServicesButton = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <a href="#" onClick={() => setLgShow(true)}>Services</a>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg contained-modal-title-vcenter"
        id="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Services
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Example service 1 <br/>
          Example service 2 <br/>
          Example service 3 <br/>
          Example service 4 <br/>
          Example service 5 <br/>
          Example service 6 <br/>
          Example service 7 <br/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ServicesButton;
