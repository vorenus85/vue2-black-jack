export default {
  methods: {
    initNewGame(shuffledDeck) {
      this.$store.dispatch("changeGameMode", "player");
      this.$store.dispatch("emptyDealerDeck");
      this.$store.dispatch("setDealerDeckSum", 0);
      this.$store.dispatch("emptyPlayerDeck");
      this.$store.dispatch("setPlayerDeckSum", 0);
      this.$store.dispatch("createDeck", shuffledDeck);

      setTimeout(() => {
        this.$store.dispatch("pullCardToDealer");
      }, 125);
      setTimeout(() => {
        this.$store.dispatch("pullCardToPlayer");
      }, 250);
      setTimeout(() => {
        this.$store.dispatch("pullCardToDealer");
      }, 375);
      setTimeout(() => {
        this.$store.dispatch("pullCardToPlayer");
      }, 500);
    },
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
