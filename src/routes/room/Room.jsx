import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDeck } from "./Table";
import Exit from "./Exit";
import Card from "./Card";
import StartModal from "./Modals/StartModal";
import LoseModal from "./Modals/LoseModal";
import WinModal from "./Modals/WinModal";

function Room() {
  const { id } = useParams();
  const [openStart, setOpenStart] = useState(true);
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
  } = useDeck(id);

  const initialDraw = async () => {
    setOpenStart(() => false);
    await drawDealer(2);
    await drawPlayer(2);
  };

  const resetGame = async () => {
    await reset();
    setOpenStart(() => true);
  };

  // useEffect(() => {
  //   initialDraw();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <>
      <StartModal initialDraw={initialDraw} openStart={openStart} />
      <LoseModal openBust={gameLose} resetGame={resetGame} />
      <WinModal openWin={gameWin} resetGame={resetGame} />
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
                hidden={idx === 0 ? true : false}
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
          >
            Hit
          </button>
          <button className="col-lg-2 col-md-3 col-4 btn btn-outline-success">
            Stand
          </button>
          <button
            className="col-lg-2 col-md-3 col-4 btn btn-outline-danger"
            onClick={resetGame}
          >
            Forfeit
          </button>
        </div>
      </div>
    </>
  );
}

export default Room;
