export const convertValues = (player) => {
  let value = 0;
  let chance = 0;
  for (let i = 0; i < player.length; i++) {
    const card = player[i];
    switch (card.value) {
      case "JACK":
      case "QUEEN":
      case "KING":
        value += 10;
        break;
      case "ACE":
        value += 11;
        chance += 1;
        break;
      default:
        value += Number(card.value);
    }
  }
  if (value > 21) {
    while (chance > 0) {
      chance -= 1;
      value -= 10;
    }
  }
  return value;
};
