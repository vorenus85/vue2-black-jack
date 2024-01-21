<template lang="pug">
section.dealer-side.my-3
  DeckValue(:deckValue="deckValue" v-if="actualDealerDeck.length > 2")
  .row.align-items-center.justify-content-center
    template(v-for="(card, index) in actualDealerDeck")
      Card(:card="card" :key="card" :back="index === 0 && isFirstCardDowned ? true : false")
</template>
<script>
import { mapGetters } from "vuex";
import Card from "../Card.vue";
import mixins from "@/mixins";
import DeckValue from "../DeckValue.vue";

export default {
  name: "DealerSide",
  mixins: [mixins],
  components: { Card, DeckValue },
  computed: {
    ...mapGetters([
      "actualDealerDeck",
      "actualGameMode",
      "actualDPlayerDeckSum",
    ]),
    isFirstCardDowned() {
      return this.actualDealerDeck.length === 2;
    },
    deckValue() {
      return this.calcDeckValue(this.actualDealerDeck);
    },
  },
  watch: {
    deckValue(value) {
      this.$store.dispatch("setDealerDeckSum", value);
    },
    "$store.state.gameMode": function (value) {
      if (value === "dealer") {
        if (
          this.actualDealerDeckSum === 21 ||
          this.actualDealerDeckSum >= 18 ||
          this.actualDealerDeckSum > this.actualPlayerDeckSum
        ) {
          this.$store.dispatch("changeGameMode", "stopGame");
          return;
        }

        setTimeout(() => {
          this.autoPullForDealer();
        }, 1000);
      }
    },
    "$store.state.dealerDeckSum": function (value) {
      if (value >= 18 && this.actualDealerDeck.length > 2) {
        this.$store.dispatch("changeGameMode", "stopGame");
      }
    },
  },
  methods: {
    autoPullForDealer() {
      if (this.actualGameMode === "dealer") {
        this.$store.dispatch("pullCardToDealer");
        setTimeout(() => {
          this.autoPullForDealer();
        }, 1000);
      }
    },
  },
};
</script>
<style lang="sass">
.dealer-side
  position: relative
  transform: scale(0.9)
</style>
