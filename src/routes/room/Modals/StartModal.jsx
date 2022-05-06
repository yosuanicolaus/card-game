import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function StartModal({ dealerBank, playerBank, initialDraw, openStart }) {
  return (
    <>
      <Modal isOpen={openStart} centered>
        <ModalHeader>Initial bet</ModalHeader>
        <ModalBody>
          <div>Place your bet!</div>
          <div>Dealer Bank : {dealerBank}</div>
          <div>Your Bank : {playerBank}</div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-info" onClick={initialDraw}>
            Start Game
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default StartModal;
