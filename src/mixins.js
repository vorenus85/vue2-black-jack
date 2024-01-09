export default {
  methods: {
    getCardValue(card) {
      const splittedCard = card.split("");
      return card.length > 2
        ? splittedCard[1] + splittedCard[2]
        : splittedCard[1];
    },
    calcDeckValue(deck) {
      const deckValues = [];
      let sumOfDeckValues = 0;

      for (let index = 0; index < deck.length; index++) {
        const originalElement = this.getCardValue(deck[index]);
        let transformedElement =
          parseInt(originalElement, 10) || originalElement;
        if (typeof transformedElement === "string") {
          transformedElement = 10;
        }
        if (originalElement === "A") {
          transformedElement = 1; // todo ace values logic
        }

        deckValues.push(transformedElement);
      }

      deckValues.forEach((num) => {
        sumOfDeckValues += num;
      });

      return sumOfDeckValues;
    },
  },
};
