/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDeck, useBank } from "./Table";
import Exit from "./Exit";
import Card from "./Card";
import StartModal from "./Modals/StartModal";
import LoseModal from "./Modals/LoseModal";
import WinModal from "./Modals/WinModal";
import TieModal from "./Modals/TieModal";

function Room() {
  const { id } = useParams();
  const [openStart, setOpenStart] = useState(true);
  const [bet, setBet] = useState(0);
  const [firstHide, setFirstHide] = useState(true);
  const [disableHit, setDisableHit] = useState(false);
  const { playerBank, dealerBank, playerWin, dealerWin } = useBank(200, 55555);
  const {
    remaining,
    dealer,
    player,
    drawDealer,
    drawPlayer,
    reset,
    playerPoint,
    dealerPoint,
    gameLose,
    gameWin,
    gameTie,
    dealerPhase,
  } = useDeck(id);

  const initialDraw = async (bet) => {
    setBet(() => bet);
    setOpenStart(() => false);
    await drawDealer(2);
    await drawPlayer(2);
  };

  const resetGame = async () => {
    await reset();
    setOpenStart(() => true);
    setFirstHide(() => true);
    setDisableHit(() => false);
  };

  const nextPhase = async () => {
    setFirstHide(() => false);
    setDisableHit(() => true);
    dealerPhase();
  };

  useEffect(() => {
    if (gameLose) dealerWin(bet);
  }, [gameLose]);

  useEffect(() => {
    if (gameWin) playerWin(bet);
  }, [gameWin]);

  return (
    <>
      <StartModal
        initialDraw={initialDraw}
        openStart={openStart}
        playerBank={playerBank}
        dealerBank={dealerBank}
      />
      <LoseModal
        resetGame={resetGame}
        openLose={gameLose}
        playerPoint={playerPoint}
        dealerPoint={dealerPoint}
        bet={bet}
      />
      <WinModal
        openWin={gameWin}
        resetGame={resetGame}
        playerPoint={playerPoint}
        dealerPoint={dealerPoint}
        bet={bet}
      />
      <TieModal
        openTie={gameTie}
        resetGame={resetGame}
        playerPoint={playerPoint}
        dealerPoint={dealerPoint}
      />
      <div className="container-lg bg-secondary min-vh-100 d-flex flex-column">
        <div className="row">
          <div className="col">
            <div className="lead">Deck</div>
            <div>Remaining : {remaining}</div>
          </div>
          <div className="col d-flex">
            <Exit />
          </div>
        </div>
        <div className="row">
          <div className="col border-bottom border-3 pb-2 d-flex justify-content-center gap-2">
            {dealer.map((card, idx) => (
              <Card
                image={card.image}
                key={card.code}
                hidden={idx === 0 ? firstHide : false}
              />
            ))}
          </div>
        </div>
        <div className="row my-auto">
          <div className="col text-center bg-dark py-2 shadow">loading...</div>
        </div>
        <div className="row">
          <div className="col border-top border-3 pt-2 d-flex justify-content-center gap-2">
            {player.map((card) => (
              <Card image={card.image} key={card.code} />
            ))}
          </div>
        </div>
        <div className="row py-2 justify-content-center">
          <button
            className="col-lg-2 col-md-3 col-4 btn btn-outline-warning"
            onClick={() => drawPlayer(1)}
            disabled={disableHit}
          >
            Hit
          </button>
          <button
            className="col-lg-2 col-md-3 col-4 btn btn-outline-success"
            onClick={nextPhase}
            disabled={disableHit}
          >
            Stand
          </button>
          <button
            className="col-lg-2 col-md-3 col-4 btn btn-outline-danger"
            onClick={resetGame}
            disabled={disableHit}
          >
            Forfeit
          </button>
        </div>
      </div>
    </>
  );
}

export default Room;
