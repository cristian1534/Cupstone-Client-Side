import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Custom_Modal = ({
  id,
  name_one,
  title,
  description,
  name_two,
  add_to_cart,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    add_to_cart(id);
    setShowModal(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleOpenModal}>
        {name_one}
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title className="text-uppercase">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center text-danger text-uppercase">
            {description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowModal(false)}>
            Cancel
          </Button>

          <Button variant="primary" onClick={handleCloseModal}>
            {name_two}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Custom_Modal;
