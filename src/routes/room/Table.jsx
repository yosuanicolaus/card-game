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
  const [gameForfeit, setGameForfeit] = useState(false);
  const [blackjack, setBlackjack] = useState(false);
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
  };

  const dealerPhase = () => {
    if (dealerPoint > playerPoint) {
      setGameLose(() => true);
      return;
    }
    if (playerPoint === 21) {
      setBlackjack(() => true);
      return;
    }
    setDealerActive(() => true);
  };

  const dealerAction = () => {
    if (dealerPoint < 17) {
      drawDealer(1);
    } else if (dealerPoint < playerPoint) {
      setGameWin(() => true);
    } else if (dealerPoint > playerPoint) {
      setGameLose(() => true);
    } else {
      setGameTie(() => true);
    }
  };

  const forfeit = () => {
    setGameForfeit(() => true);
  };

  useEffect(() => {
    setPlayerPoint(() => convertValues(player));
  }, [player]);

  useEffect(() => {
    setDealerPoint(() => convertValues(dealer));
  }, [dealer]);

  useEffect(() => {
    if (playerPoint > 21) setGameLose(() => true);
  }, [playerPoint]);

  useEffect(() => {
    if (dealerPoint > 21) {
      setGameWin(() => true);
    } else if (dealerActive) {
      dealerAction();
    }
  }, [dealerPoint]);

  useEffect(() => {
    if (dealerActive) {
      dealerAction();
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
    setGameForfeit(() => false);
    setBlackjack(() => false);
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
    gameForfeit,
    blackjack,
    reset,
    forfeit,
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
