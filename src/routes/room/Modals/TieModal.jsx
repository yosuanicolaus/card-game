import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

function TieModal({ openTie, resetGame, playerPoint, dealerPoint }) {
  return (
    <Modal isOpen={openTie} centered>
      <ModalHeader>It's a tie!</ModalHeader>
      <ModalBody>
        <div>You and the dealer scored the same point</div>
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

export default TieModal;
