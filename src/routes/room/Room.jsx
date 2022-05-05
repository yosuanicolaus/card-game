import { useParams } from "react-router-dom";
import Card from "./Card";

function Room() {
  const { id } = useParams();

  // for testing purposes
  // const test = () => {
  //   console.log({ id });
  // };

  return (
    <div>
      {/* <div className="display-5">Room {id}</div> */}

      <div className="container-lg bg-secondary min-vh-100 d-flex flex-column">
        <div className="row">
          <div className="col">
            <div className="lead">Deck</div>
            <div>Remaining : 52</div>
          </div>
          <div className="col d-flex">
            <button className="btn btn-outline-danger ms-auto my-1">
              Exit
            </button>
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
      {/* <button className="btn btn-outline-info" onClick={test}>
        Test
      </button> */}
    </div>
  );
}

export default Room;
