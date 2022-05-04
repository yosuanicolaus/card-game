import React from "react";
import { useQuery } from "react-query";
import { deckAPI } from "./App";

export function Deck({ deckId }) {
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
    </div>
  );
}
