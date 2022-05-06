import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { useNavigate } from "react-router-dom";

function GameOver() {
  const navigate = useNavigate();

  return (
    <Modal isOpen centered>
      <ModalHeader>Game Over</ModalHeader>
      <ModalBody>
        <div className="text-danger text-center">
          The dealer took all your money!
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </ModalFooter>
    </Modal>
  );
}

export default GameOver;
