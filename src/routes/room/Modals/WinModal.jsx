import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

function WinModal({ openWin, resetGame, playerPoint, dealerPoint }) {
  return (
    <Modal isOpen={openWin} centered>
      <ModalHeader>You Win!</ModalHeader>
      <ModalBody>
        <div>Great Job!</div>
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
