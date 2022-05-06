import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Forfeit({ openForfeit, bet, resetGame }) {
  return (
    <Modal centered isOpen={openForfeit}>
      <ModalHeader>Forfeited!</ModalHeader>
      <ModalBody>
        You lost ${bet} (half of your bet) because you forfeited.
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={resetGame}>
          Play again
        </button>
      </ModalFooter>
    </Modal>
  );
}

export default Forfeit;
