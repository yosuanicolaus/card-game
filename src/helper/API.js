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
