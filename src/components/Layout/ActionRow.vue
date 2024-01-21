<template lang="pug">
section.action-row
  .row.align-items-center.justify-content-center()
    // Double.col-auto.mx-1(ref="double-btn" @double="handleDouble" :disabled="actionsDisabled" :btnType="'btn-danger'")
    Stand.col-auto.mx-1(ref="stand-btn" @stand="handleStand" :disabled="actionsDisabled" :btnType="'btn-danger'")
    Hit.col-auto.mx-1(ref="hit-btn" @hit="handleHit" :disabled="actionsDisabled" :btnType="'btn-primary'")
</template>
<script>
import Double from "../Buttons/Double.vue";
import Hit from "../Buttons/Hit.vue";
import Stand from "../Buttons/Stand.vue";
import { mapGetters } from "vuex";

export default {
  name: "ActionRow",
  components: {
    Double,
    Hit,
    Stand,
  },
  computed: {
    ...mapGetters(["actualGameMode"]),
    actionsDisabled() {
      const result = this.actualGameMode !== "player";
      return result;
    },
  },
  methods: {
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
