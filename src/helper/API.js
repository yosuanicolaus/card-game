import axios from "axios";

export const deckAPI = axios.create({
  baseURL: "http://deckofcardsapi.com/api/deck/",
});

export async function createDeckId() {
  try {
    const data = await deckAPI.get("new/");
    return data.data.deck_id;
  } catch (error) {
    console.log(error);
  }
}
