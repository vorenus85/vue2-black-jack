<template lang="pug">
.card.m-2
  .back(v-if="back")
  .front(v-else :class="[symbolClass, color]")
    .card-value 
      span {{ cardValue }}
    .card-symbol
      span(v-html="symbolHTML")
</template>
<script>
export default {
  name: "Card",
  props: {
    back: {
      type: Boolean,
      default: false,
    },
    card: {
      type: String,
      default: "",
    },
  },
  computed: {
    color() {
      const symbol = this.getSymbol(this.card);
      let color;
      if (symbol === "H" || symbol === "D") {
        color = "red";
      } else {
        color = "black";
      }
      return color;
    },
    cardValue() {
      return this.getCardValue(this.card);
    },
    symbolHTML() {
      return this.getSymbolHTML(this.card);
    },
    symbolClass() {
      return this.getSymbolClass(this.card);
    },
  },
  methods: {
    getSymbol(card) {
      const splittedCard = card.split("");
      return splittedCard[0];
    },
    getCardValue(card) {
      const splittedCard = card.split("");
      return card.length > 2
        ? splittedCard[1] + splittedCard[2]
        : splittedCard[1];
    },
    getSymbolHTML(card) {
      const symbol = this.getSymbol(card);
      let symbolHTML;
      if (symbol === "H") {
        symbolHTML = "&hearts;";
      }
      if (symbol === "S") {
        symbolHTML = "&spades;";
      }
      if (symbol === "C") {
        symbolHTML = "&clubs;";
      }
      if (symbol === "D") {
        symbolHTML = "&diams;";
      }
      return symbolHTML;
    },
    getSymbolClass(card) {
      const symbol = this.getSymbol(card);
      let symbolClass;
      if (symbol === "H") {
        symbolClass = "hearts";
      }
      if (symbol === "S") {
        symbolClass = "spades";
      }
      if (symbol === "C") {
        symbolClass = "clubs";
      }
      if (symbol === "D") {
        symbolClass = "diamonds";
      }
      return symbolClass;
    },
  },
};
</script>
<style lang="css">
.back {
  background: white;
  background-image: linear-gradient(
      90deg,
      rgba(200, 0, 0, 0.5) 50%,
      transparent 0
    ),
    linear-gradient(rgba(200, 0, 0, 0.5) 50%, transparent 0);
  background-size: 10px 10px;
}
</style>
<style lang="sass">
.card
  height: 12rem
  width: 8rem
  padding: .25rem
  line-height: 1
  font-size: 3rem
  text-align: left
.card-symbol
  font-size: 4rem
.front,
.back
  height: 100%
  border-radius: .25rem
  overflow: hidden
.front
  &.red
    color: #f63001
  &.black
    color: #171717
</style>
