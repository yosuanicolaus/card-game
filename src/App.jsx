import axios from "axios";
import React, { useState } from "react";
import { Deck } from "./Deck";

export const deckAPI = axios.create({
  baseURL: "http://deckofcardsapi.com/api/deck/",
});

function App() {
  const [deckIds, setDeckIds] = useState([]);

  const createDeck = async () => {
    const deckId = await createDeckId();
    setDeckIds((deckIds) => [...deckIds, deckId]);
  };

  return (
    <div className="text-center">
      <div className="h1 border">Card Game</div>
      <button className="btn btn-primary" onClick={createDeck}>
        Create Deck
      </button>
      {deckIds.map((deckId) => (
        <Deck key={deckId} deckId={deckId} />
      ))}
    </div>
  );
}

async function createDeckId() {
  try {
    const data = await deckAPI.get("new/");
    return data.data.deck_id;
  } catch (error) {
    console.log(error);
  }
}

export default App;
