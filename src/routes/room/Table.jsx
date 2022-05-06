/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { drawFromDeck, reshuffleDeck } from "../../helper/API";
import { convertValues } from "../../helper/Calculator";

export function useDeck(id) {
  const [remaining, setRemaining] = useState(0);
  const [player, setPlayer] = useState([]);
  const [dealer, setDealer] = useState([]);
  const [playerPoint, setPlayerPoint] = useState(0);
  const [dealerPoint, setDealerPoint] = useState(0);
  const [gameWin, setGameWin] = useState(false);
  const [gameLose, setGameLose] = useState(false);
  const [gameTie, setGameTie] = useState(false);
  const [dealerActive, setDealerActive] = useState(false);

  const drawPlayer = async (drawCount = 1) => {
    const data = await drawFromDeck(id, drawCount);
    setRemaining(() => data.remaining);
    setPlayer((player) => player.concat([...data.cards]));
  };

  const drawDealer = async (drawCount = 1) => {
    const data = await drawFromDeck(id, drawCount);
    setRemaining(() => data.remaining);
    setDealer((dealer) => dealer.concat([...data.cards]));
    console.log("drawing cards for dealer");
  };

  const dealerPhase = () => {
    if (dealerPoint > playerPoint) {
      setGameLose(() => true);
      return;
    }
    setDealerActive(() => true);
  };

  useEffect(() => {
    setPlayerPoint(() => convertValues(player));
  }, [player]);

  useEffect(() => {
    setDealerPoint(() => convertValues(dealer));
    console.log("setting dealer points");
  }, [dealer]);

  useEffect(() => {
    if (playerPoint > 21) setGameLose(() => true);
  }, [playerPoint]);

  useEffect(() => {
    if (dealerPoint > 21) {
      setGameWin(() => true);
    } else if (dealerActive) {
      if (dealerPoint < 17) {
        console.log(`dealerpoint is ${dealerPoint}, drawing dealer 1 card`);
        drawDealer(1);
      } else if (dealerPoint > playerPoint) {
        console.log("dealer point higher than player, we lose");
        setGameLose(() => true);
      } else if (dealerPoint < playerPoint) {
        console.log("dealer point lower than player, we win");
        setGameWin(() => true);
      } else {
        console.log("tie");
        setGameTie(() => true);
      }
    }
  }, [dealerPoint]);

  useEffect(() => {
    console.log("uef dealer active...");
    if (dealerActive) {
      if (dealerPoint < 17) {
        drawDealer(1);
        console.log("drawing dealer");
      } else if (dealerPoint < playerPoint) {
        setGameWin(() => true);
      } else if (dealerPoint > playerPoint) {
        setGameLose(() => true);
      } else {
        setGameTie(() => true);
      }
    }
  }, [dealerActive]);

  const reset = async () => {
    const data = await reshuffleDeck(id);
    setRemaining(() => data.remaining);
    setPlayer(() => []);
    setDealer(() => []);
    setPlayerPoint(() => 0);
    setDealerPoint(() => 0);
    setGameWin(() => false);
    setGameLose(() => false);
    setGameTie(() => false);
    setDealerActive(() => false);
  };

  return {
    remaining,
    dealer,
    player,
    drawDealer,
    drawPlayer,
    playerPoint,
    dealerPoint,
    gameWin,
    gameLose,
    gameTie,
    reset,
    dealerPhase,
  };
}

export const useBank = (playerStart = 200, dealerStart = 10000) => {
  const [playerBank, setPlayerBank] = useState(playerStart);
  const [dealerBank, setDealerBank] = useState(dealerStart);

  const playerWin = (bet) => {
    setPlayerBank((playerBank) => playerBank + bet);
    setDealerBank((dealerBank) => dealerBank - bet);
  };

  const dealerWin = (bet) => {
    setPlayerBank((playerBank) => playerBank - bet);
    setDealerBank((dealerBank) => dealerBank + bet);
  };

  return { playerBank, dealerBank, playerWin, dealerWin };
};
