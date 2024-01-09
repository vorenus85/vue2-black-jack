<template lang="pug">
section.player-side
  .row.align-items-center.justify-content-center
    Card(:card="`C10`")
    Card(:card="`HA`")
</template>
<script>
import Card from "../Card.vue";

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
