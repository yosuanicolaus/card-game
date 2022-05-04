import React, { useState } from "react";
import { useQuery } from "react-query";
import { deckAPI } from "./helper/API";

export function Deck({ deckId }) {
  // const [table, setTable] = useState([]);
  // const [discard, setDiscard] = useState([]);
  const [table, addCards] = useTable();
  const [discard, discardCard] = useDiscard();

  const drawCard = async () => {
    const data = await deckAPI.get(`${deckId}/draw/`);
    console.log(data.data);
    // setTable(table.concat(data.data.cards));
    addCards(data.data.cards);
  };

  const { data, isLoading, error } = useQuery("deck", () =>
    deckAPI.get(`${deckId}/`)
  );

  if (isLoading) return <div>loading deck...</div>;
  if (error) return <div className="text-danger">{error.message}</div>;

  return (
    <div className="bg-secondary m-3">
      <h3>Deck</h3>
      <div>ID : {deckId}</div>
      <div>remaining : {data.data.remaining}</div>
      <div>{data.data.shuffled ? "shuffled" : "not shuffled"}</div>
      <div>
        table :
        {table.map((card) => (
          <img src={card.image} alt="card" width={100} />
        ))}
      </div>
      <div>
        discard :
        {discard.map((card) => (
          <button>{card.code}</button>
        ))}
      </div>
      <button className="btn btn-primary" onClick={drawCard}>
        Draw card
      </button>
    </div>
  );
}

function useTable() {
  const [table, setTable] = useState([]);

  const addCards = (cards) => {
    setTable((table) => table.concat(cards));
  };

  return [table, addCards];
}

function useDiscard() {
  const [discard, setDiscard] = useState([]);

  const discardCard = (cards) => {
    setDiscard((discard) => discard.concat(cards));
  };

  return [discard, discardCard];
}
