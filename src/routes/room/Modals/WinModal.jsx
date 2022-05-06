import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

function WinModal({ openWin, resetGame, playerPoint, dealerPoint, bet }) {
  return (
    <Modal isOpen={openWin} centered>
      <ModalHeader>You Win!</ModalHeader>
      <ModalBody>
        <div>Great Job! You won ${bet}</div>
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

export default WinModal;
