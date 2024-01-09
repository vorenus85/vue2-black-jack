<template lang="pug">
section.dealer-side.my-3
  DeckValue(:deckValue="deckValue")
  .row.align-items-center.justify-content-center
    template(v-for="(card, index) in actualDealerDeck")
      // Card(:card="card" :key="card" :back="index === 0 && isFirstCardDowned ? true : false")
      Card(:card="card" :key="card")
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
    ...mapGetters(["actualDealerDeck"]),
    isFirstCardDowned() {
      return this.actualDealerDeck.length === 2;
    },
    deckValue() {
      return this.calcDeckValue(this.actualDealerDeck);
    },
  },
};
</script>
<style lang="sass">
.dealer-side
  position: relative
</style>
