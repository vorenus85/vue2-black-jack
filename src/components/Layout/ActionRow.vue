<template lang="pug">
section.action-row
  .row.align-items-center.justify-content-center()
    Split.col-auto.mx-1(ref="split-btn" @split="handleSplit" :disabled="actionsDisabled")
    Double.col-auto.mx-1(ref="double-btn" @double="handleDouble" :disabled="actionsDisabled")
    Stand.col-auto.mx-1(ref="stand-btn" @stand="handleStand" :disabled="actionsDisabled")
    Hit.col-auto.mx-1(ref="hit-btn" @hit="handleHit" :disabled="actionsDisabled")
  .row.align-items-center.justify-content-center.mt-3
    NewGame.col-auto.mx-1(ref="new-game-btn" @newGame="handleNewGame" :disabled="actualGameMode === 'dealer' ? true : false")
</template>
<script>
import Split from "../Buttons/Split.vue";
import Double from "../Buttons/Double.vue";
import Hit from "../Buttons/Hit.vue";
import Stand from "../Buttons/Stand.vue";
import NewGame from "../Buttons/NewGame.vue";
import { mapGetters } from "vuex";
import mixins from "@/mixins";
import { deck, shuffle } from "@/utils/cardLogic";

const shuffledDeck = shuffle(deck());

export default {
  name: "ActionRow",
  mixins: [mixins],
  components: {
    Split,
    Double,
    Hit,
    Stand,
    NewGame,
  },
  computed: {
    ...mapGetters(["actualGameMode"]),
    actionsDisabled() {
      const result = this.actualGameMode !== "player";
      return result;
    },
  },
  methods: {
    handleSplit() {
      console.log("handleSplit");
    },
    handleDouble() {
      console.log("handleDouble");
    },
    handleHit() {
      this.$store.dispatch("pullCardToPlayer");
    },
    handleStand() {
      this.$store.dispatch("changeGameMode", "dealer");
    },
    handleNewGame() {
      this.initNewGame(shuffledDeck);
    },
  },
};
</script>
