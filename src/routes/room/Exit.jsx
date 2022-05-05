import { React, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Exit() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setOpen(() => true);
  };

  const cancel = () => {
    setOpen(() => false);
  };

  const exit = () => {
    navigate("/");
  };

  return (
    <>
      <button
        className="btn btn-outline-danger ms-auto my-1"
        onClick={openModal}
      >
        Exit
      </button>
      <Modal centered isOpen={open} toggle={cancel}>
        <ModalHeader>Warning</ModalHeader>
        <ModalBody>
          All your playing data will be lost if you exit the room. Are you sure?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-secondary" onClick={cancel}>
            Cancel
          </button>
          <button className="btn btn-outline-danger" onClick={exit}>
            Exit
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Exit;
