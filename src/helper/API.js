import axios from "axios";

export const deckAPI = axios.create({
  baseURL: "http://deckofcardsapi.com/api/deck/",
});

export async function createDeckId(shuffled, deckCount) {
  try {
    let key = "new/";
    if (shuffled) key += "shuffle/";
    key += "?deck_count=" + deckCount;
    const data = await deckAPI.get(key);
    return data.data.deck_id;
  } catch (error) {
    console.log(error);
  }
}

export async function drawFromDeck(deckId, drawCount) {
  try {
    const key = `${deckId}/draw/?count=${drawCount}`;
    const data = await deckAPI.get(key);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function reshuffleDeck(deckId) {
  try {
    const key = `${deckId}/shuffle/`;
    const data = await deckAPI.get(key);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}
