import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Blackjack({ openBlackjack, bet, resetGame }) {
  return (
    <Modal centered isOpen={openBlackjack}>
      <ModalHeader className="lead">Blackjack!</ModalHeader>
      <ModalBody>
        Amazing! You got ${bet} (1.5x your bet) for BlackJack!
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={resetGame}>
          Play again
        </button>
      </ModalFooter>
    </Modal>
  );
}

export default Blackjack;
