<template lang="pug">
section.action-row
  .row.align-items-center.justify-content-center()
    Split.col-auto.mx-1(@split="handleSplit" :disabled="actionsDisabled")
    Double.col-auto.mx-1(@double="handleDouble" :disabled="actionsDisabled")
    Stand.col-auto.mx-1(@stand="handleStand" :disabled="actionsDisabled")
    Hit.col-auto.mx-1(@hit="handleHit" :disabled="actionsDisabled")
</template>
<script>
import Split from "../Buttons/Split.vue";
import Double from "../Buttons/Double.vue";
import Hit from "../Buttons/Hit.vue";
import Stand from "../Buttons/Stand.vue";
import { mapGetters } from "vuex";

export default {
  name: "ActionRow",
  components: {
    Split,
    Double,
    Hit,
    Stand,
  },
  computed: {
    ...mapGetters(["actualGameMode"]),
    actionsDisabled() {
      const result = this.actualGameMode === "player" ? false : true;
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
  },
};
</script>
