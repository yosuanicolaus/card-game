import { useParams } from "react-router-dom";
import { useTable } from "./Table";
import Card from "./Card";
import Exit from "./Exit";
import { useEffect } from "react";

function Room() {
  const { id } = useParams();
  const { remaining, player, dealer, drawPlayer, drawDealer } = useTable(id);

  const initialDraw = async () => {
    await drawDealer(2);
    await drawPlayer(2);
  };

  useEffect(() => {
    initialDraw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // for testing purposes
  const test = () => {
    initialDraw();
  };
  const test2 = () => {
    drawPlayer(1);
  };

  return (
    <>
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
        <div className="row justify-content-center">
          <button
            className="col-1 btn btn-outline-warning m-2"
            onClick={() => drawPlayer(1)}
          >
            Hit
          </button>
          <button className="col-1 btn btn-outline-light m-2">Stand</button>
        </div>
      </div>

      {/* for testing purposes */}
      <button className="btn btn-outline-info w-50" onClick={test}>
        test
      </button>
      <button className="btn btn-outline-info w-50" onClick={test2}>
        test 2
      </button>
    </>
  );
}

export default Room;
