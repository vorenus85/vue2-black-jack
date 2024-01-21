<template lang="pug">
section.player-side.my-3
  DeckValue(:deckValue="deckValue")
  .row.align-items-center.justify-content-center
    template(v-for="card in actualPlayerDeck")
      Card(:card="card" :key="card")
</template>
<script>
import { mapGetters } from "vuex";
import Card from "../Card.vue";
import mixins from "@/mixins";
import DeckValue from "../DeckValue.vue";

export default {
  name: "PlayerSide",
  mixins: [mixins],
  components: { Card, DeckValue },
  computed: {
    ...mapGetters(["actualPlayerDeck"]),
    deckValue() {
      return this.calcDeckValue(this.actualPlayerDeck);
    },
  },
  watch: {
    deckValue(value) {
      this.$store.dispatch("setPlayerDeckSum", value);
      if (value === 21 && this.actualPlayerDeck.length === 2) {
        this.$store.dispatch("changeGameMode", "dealer");
      }

      if (value >= 21) {
        this.$store.dispatch("changeGameMode", "dealer");
      }
    },
  },
};
</script>
<style lang="sass">
.player-side
  position: relative
  transform: scale(1.1)
</style>
