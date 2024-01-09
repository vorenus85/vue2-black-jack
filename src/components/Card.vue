<template lang="pug">
.card.m-2
  .back(v-if="back")
  .front(v-else :class="[symbolName, cardColor]")
    .card-value 
      span {{ cardValue }}
    .card-symbol
      span(v-html="symbol")
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
  data: function () {
    return {
      symbol: "",
      symbolName: "",
    };
  },
  computed: {
    cardColor() {
      const symbol = this.cardSymbol;
      let color = "";
      if (symbol === "H" || symbol === "D") {
        color = "red";
      } else {
        color = "black";
      }
      return color;
    },
    cardSymbol() {
      const card = this.card;
      const splittedCard = card.split("");
      return splittedCard[0];
    },
    cardValue() {
      const card = this.card;
      const splittedCard = card.split("");
      return card.length > 2
        ? splittedCard[1] + splittedCard[2]
        : splittedCard[1];
    },
  },
  mounted() {
    this.getSymbolName();
  },
  methods: {
    getSymbolName() {
      const symbol = this.cardSymbol;
      if (symbol === "H") {
        this.symbol = "&hearts;";
        this.symbolName = "hearts";
      }
      if (symbol === "S") {
        this.symbol = "&spades;";
        this.symbolName = "spades";
      }
      if (symbol === "C") {
        this.symbol = "&clubs;";
        this.symbolName = "clubs";
      }
      if (symbol === "D") {
        this.symbol = "&diams;";
        this.symbolName = "diamonds";
      }
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
