import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { createDeckId } from "../../helper/API";
import { useNavigate } from "react-router-dom";

function PlayModal() {
  const [open, setOpen] = useState(false);
  const [deckCount, setDeckCount] = useState(1);
  const [shuffled, setShuffled] = useState(true);
  const navigate = useNavigate();

  const openModal = () => {
    setOpen(() => true);
    setDeckCount(() => 1);
    setShuffled(() => true);
  };

  const updateDeckCount = (e) => {
    let newValue = Number(e.target.value);
    if (newValue < 1) newValue = 1;
    setDeckCount(() => newValue);
  };

  const createRoom = () => {
    createDeckId(shuffled, deckCount).then((data) => {
      navigate(`/room/${data}`);
    });
  };

  return (
    <>
      <button
        className="btn btn-outline-light btn-lg m-4 px-4"
        onClick={openModal}
      >
        Play
      </button>
      <Modal centered toggle={() => setOpen(false)} isOpen={open}>
        <ModalHeader toggle={() => setOpen(false)}>Create Room</ModalHeader>
        <ModalBody>
          <div className="d-flex">
            <label htmlFor="deckCount">Deck Count: </label>
            <input
              type="number"
              name="deckCount"
              id="deckCount"
              className="ms-auto px-1"
              defaultValue={1}
              min={1}
              onChange={updateDeckCount}
            />
          </div>
          <div>
            <input
              type="checkbox"
              name="shuffled"
              id="shuffled"
              onChange={() => setShuffled((shuffled) => !shuffled)}
              checked={shuffled}
            />
            <label htmlFor="shuffled" className="ms-2">
              Shuffled
            </label>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={createRoom}>
            Create Room
          </button>{" "}
          <button className="btn btn-secondary" onClick={() => setOpen(false)}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default PlayModal;
