import { useState } from "react";
import { drawFromDeck, reshuffleDeck } from "../../helper/API";

export function useTable(id) {
  const [remaining, setRemaining] = useState(0);
  const [player, setPlayer] = useState([]);
  const [dealer, setDealer] = useState([]);

  const drawPlayer = async (drawCount = 1) => {
    const data = await drawFromDeck(id, drawCount);
    setRemaining(() => data.remaining);
    setPlayer((player) => player.concat([...data.cards]));
  };

  const drawDealer = async (drawCount = 1) => {
    const data = await drawFromDeck(id, drawCount);
    setRemaining(() => data.remaining);
    setDealer((dealer) => dealer.concat([...data.cards]));
  };

  const reset = async () => {
    const data = await reshuffleDeck(id);
    setRemaining(() => data.remaining);
    setPlayer(() => []);
    setDealer(() => []);
  };

  return { remaining, dealer, player, drawDealer, drawPlayer, reset };
}
