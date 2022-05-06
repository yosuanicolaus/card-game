import { useState, useEffect } from "react";
import { drawFromDeck, reshuffleDeck } from "../../helper/API";
import { convertValues } from "../../helper/Calculator";

export function useDeck(id) {
  const [remaining, setRemaining] = useState(0);
  const [player, setPlayer] = useState([]);
  const [dealer, setDealer] = useState([]);
  const [playerPoint, setPlayerPoint] = useState(0);
  const [dealerPoint, setDealerPoint] = useState(0);
  const [playerBank, setPlayerBank] = useState(200);
  const [dealerBank, setDealerBank] = useState(10000);

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

  useEffect(() => {
    setPlayerPoint(() => convertValues(player));
  }, [player]);

  useEffect(() => {
    setDealerPoint(() => convertValues(dealer));
  }, [dealer]);

  useEffect(() => {
    console.log({ playerPoint, dealerPoint });
  }, [playerPoint, dealerPoint]);

  const reset = async () => {
    const data = await reshuffleDeck(id);
    setRemaining(() => data.remaining);
    setPlayer(() => []);
    setDealer(() => []);
    setPlayerPoint(() => 0);
    setDealerPoint(() => 0);
  };

  return { remaining, dealer, player, drawDealer, drawPlayer, reset };
}
