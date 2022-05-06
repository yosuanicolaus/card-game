import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

function WinModal({ openWin, resetGame }) {
  return (
    <Modal isOpen={openWin} centered>
      <ModalHeader>You Win!</ModalHeader>
      <ModalBody>Great job</ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={resetGame}>
          Play again
        </button>
      </ModalFooter>
    </Modal>
  );
}

export default WinModal;
