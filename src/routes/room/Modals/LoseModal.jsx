import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

function LoseModal({ openLose, resetGame, playerPoint, dealerPoint, bet }) {
  return (
    <Modal isOpen={openLose} centered>
      <ModalHeader>You Lose</ModalHeader>
      <ModalBody>
        <div>Oops! You lost ${bet}</div>
        <div>player's point: {playerPoint}</div>
        <div>dealer's point: {dealerPoint}</div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={resetGame}>
          Play again
        </button>
      </ModalFooter>
    </Modal>
  );
}

export default LoseModal;
