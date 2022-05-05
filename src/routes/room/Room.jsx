import { useParams } from "react-router-dom";
import { useTable } from "./Table";
import Card from "./Card";
import Exit from "./Exit";

function Room() {
  const { id } = useParams();
  const { remaining, player, dealer, drawPlayer, drawDealer } = useTable(id);

  // for testing purposes
  const test = () => {
    drawPlayer(1);
    drawDealer(3);
  };
  const test2 = () => {
    console.table({ player, dealer });
  };

  return (
    <>
      {/* <div className="display-5">Room {id}</div> */}

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
            <Card />
            <Card />
          </div>
        </div>
        <div className="row my-auto">
          <div className="col text-center bg-dark py-2 shadow">loading...</div>
        </div>
        <div className="row">
          <div className="col border-top border-3 pt-2 d-flex justify-content-center gap-2">
            <Card />
            <Card />
          </div>
        </div>
        <div className="row justify-content-center">
          <button className="col-1 btn btn-outline-warning m-2">Hit</button>
          <button className="col-1 btn btn-outline-light m-2">Stand</button>
        </div>
      </div>

      {/* for testing purposes */}
      <button className="btn btn-outline-info w-50" onClick={test}>
        draw and give
      </button>
      <button className="btn btn-outline-info w-50" onClick={test2}>
        log data
      </button>
    </>
  );
}

export default Room;
