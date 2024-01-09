<template lang="pug">
main.game-area
  DealerSide
  PlayerSide
  ActionRow
</template>

<script>
import DealerSide from "./components/Layout/DealerSide.vue";
import PlayerSide from "./components/Layout/PlayerSide.vue";
import ActionRow from "./components/Layout/ActionRow.vue";

export default {
  name: "App",
  components: {
    ActionRow,
    PlayerSide,
    DealerSide,
  },
  methods: {
    shuffleDeck() {},
  },
};
</script>
<style lang="sass">
.game-area
  display: flex
  flex-direction: column
  height: 100vh
  align-items: center
  justify-content: center
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  background: #28734d
  padding: 2rem
</style>
