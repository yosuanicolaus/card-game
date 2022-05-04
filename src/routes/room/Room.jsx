import { useParams } from "react-router-dom";

function Room() {
  const { id } = useParams();

  const test = () => {
    console.log({ id });
  };

  return (
    <div>
      <div className="display-5">Room {id}</div>
      <button className="btn btn-outline-info" onClick={test}>
        Test
      </button>
    </div>
  );
}

export default Room;
