import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

function LoseModal({ openBust, resetGame }) {
  return (
    <Modal isOpen={openBust} centered>
      <ModalHeader>You Lose</ModalHeader>
      <ModalBody>Busted</ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={resetGame}>
          Play again
        </button>
      </ModalFooter>
    </Modal>
  );
}

export default LoseModal;
