import axios from "axios";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

function App() {
  return (
    <div className="text-center">
      <div className="h1 border">Card Game</div>
      <Deck />
    </div>
  );
}

function Deck() {
  const { isLoading, error, data } = useQuery("deck", () =>
    axios("http://deckofcardsapi.com/api/deck/new/")
  );

  if (isLoading) return <div>loading deck...</div>;
  if (error) return <div>{JSON.stringify(error)}</div>;

  return (
    data && (
      <div className="bg-secondary m-3">
        <h3>Deck</h3>
        <div>ID : {data.data.deck_id}</div>
        <div>remaining : {data.data.remaining}</div>
        <div>{data.data.shuffled ? "shuffled" : "not shuffled"}</div>
      </div>
    )
  );
}

export default App;
