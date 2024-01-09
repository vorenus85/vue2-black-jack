<template lang="pug">
section.action-row
  .row.align-items-center.justify-content-center
    Split.col-auto.mx-1(@split="handleSplit")
    Double.col-auto.mx-1(@double="handleDouble")
    Stand.col-auto.mx-1(@stand="handleStand")
    Hit.col-auto.mx-1(@hit="handleHit")
</template>
<script>
import Split from "../Buttons/Split.vue";
import Double from "../Buttons/Double.vue";
import Hit from "../Buttons/Hit.vue";
import Stand from "../Buttons/Stand.vue";

export default {
  name: "ActionRow",
  components: {
    Split,
    Double,
    Hit,
    Stand,
  },
  methods: {
    handleSplit() {
      console.log("handleSplit");
    },
    handleDouble() {
      console.log("handleDouble");
    },
    handleHit() {
      console.log("handleHit");
    },
    handleStand() {
      console.log("handleStand");
    },
  },
};
</script>
