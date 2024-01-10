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
import { mapGetters } from "vuex";
import mixins from "./mixins";

export default {
  name: "App",
  mixins: [mixins],
  components: {
    ActionRow,
    PlayerSide,
    DealerSide,
  },
  computed: {
    ...mapGetters(["actualDeck"]),
  },
  mounted() {
    this.initNewGame();
  },
};
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed')

html, body
  font-family: Roboto, sans-serif

.general-box-shadow
  box-shadow: 0 4px 0 0 rgba(0,0,0,.25)

.game-area
  display: flex
  flex-direction: column
  height: 100vh
  align-items: center
  justify-content: center
  font-family: Roboto, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  background: #28734d
  padding: 2rem
</style>
