import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function StartModal({ dealerBank, playerBank }) {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Modal isOpen={open} centered>
        <ModalHeader>Initial bet</ModalHeader>
        <ModalBody>
          <div>Place your bet!</div>
          <div>Dealer Bank : {dealerBank}</div>
          <div>Your Bank : {playerBank}</div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-info" onClick={() => setOpen(false)}>
            Start Game
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default StartModal;
