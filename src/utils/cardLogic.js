/**
 * S - means Spades
 * H - means Hearts
 * D - means Diamonds
 * C - means Clubs
 */
const symbols = ["S", "H", "D", "C"];

const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "K", "Q"];

const deck = function () {
  const deckArray = [];
  for (let index = 0; index < symbols.length; index++) {
    const symbolElement = symbols[index];
    for (let index = 0; index < values.length; index++) {
      const valueElement = values[index];
      deckArray.push(symbolElement + valueElement);
    }
  }
  return deckArray;
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

module.exports = { symbols, values, deck, shuffle };
