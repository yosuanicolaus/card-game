import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Exit from "../Exit";
import GameOver from "./GameOver";

function StartModal({ dealerBank, playerBank, initialDraw, openStart }) {
  const [bet, setBet] = useState(5);
  const [checked, setChecked] = useState(false);
  const [warning, setWarning] = useState("");

  const startClick = () => {
    if (bet < 5) {
      setWarning("Minimum betting amount is $5!");
      return;
    } else if (bet > playerBank) {
      setWarning("Your betting amount is higher than your balance!");
      return;
    }
    setWarning("");
    setChecked(false);
    initialDraw(bet);
  };

  useEffect(() => {
    if (checked) setBet(() => playerBank);
    else setBet(() => 5);
  }, [checked, playerBank]);

  if (playerBank === 0) return <GameOver />;

  return (
    <>
      <Modal isOpen={openStart} centered>
        <ModalHeader>Place your bet</ModalHeader>
        <ModalBody>
          <div>Dealer Bank : {dealerBank}</div>
          <div>Your Bank : {playerBank}</div>
          <label htmlFor="yourBet">Your Bet:</label>
          <input
            type="number"
            name="yourBet"
            id="yourBet"
            className="w-100 text-center"
            min={5}
            max={playerBank}
            value={bet}
            onChange={(e) => setBet(Number(e.target.value))}
          />
          <div>
            <input
              type="checkbox"
              name="allIn"
              id="allIn"
              onClick={() => setChecked((checked) => !checked)}
              value={checked}
            />
            <label htmlFor="allIn" className="ms-2">
              All in
            </label>
          </div>
          <div className="text-danger">{warning}</div>
        </ModalBody>
        <ModalFooter>
          <Exit />
          <button className="btn btn-info" onClick={startClick}>
            Start Game
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default StartModal;
