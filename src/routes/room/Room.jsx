import { useParams } from "react-router-dom";

function Room() {
  const { id } = useParams();

  const test = () => {
    console.log({ id });
  };

  return (
    <div>
      <div className="display-5">Room {id}</div>

      <div className="container-fluid bg-secondary vh-100 d-flex flex-column">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-1 bg-primary">Deck</div>
          <div className="col-3"></div>
          <div className="col-1 bg-primary">Card</div>
          <div className="col-1 bg-primary">Card</div>
          <div className="col"></div>
        </div>
        <div className="row my-auto">
          <div className="col text-center">loading...</div>
        </div>
        <div className="row">
          <div className="col-5"></div>
          <div className="col-1 bg-primary">Card</div>
          <div className="col-1 bg-primary">Card</div>
          <div className="col-1"></div>
          <div className="col-1 d-grid gap-2">
            <button className="btn btn-outline-warning">Hit</button>
            <button className="btn btn-outline-danger">Stand</button>
          </div>
        </div>
      </div>

      {/* test */}
      <button className="btn btn-outline-info" onClick={test}>
        Test
      </button>
    </div>
  );
}

export default Room;
