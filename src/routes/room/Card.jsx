const back =
  "https://i.pinimg.com/originals/31/a6/47/31a647160bb8313551a692b796feeb7e.jpg";

function Card({ image = back, code, hidden = false }) {
  return (
    <>
      <img
        src={hidden ? back : image}
        alt={"loading card..."}
        className="img-fluid"
        width={100}
      />
    </>
  );
}

export default Card;
