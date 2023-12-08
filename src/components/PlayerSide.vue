<template lang="pug">
section.player-side
  .row.align-items-center.justify-content-center
    Card
    Card
</template>
<script>
import Card from "./Card.vue";

export default {
  name: "PlayerSide",
  components: { Card },
};
</script>
<style lang="sass">
.player-side
  display: flex
  align-items: center
  justify-content: center
</style>
