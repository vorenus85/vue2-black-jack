<template lang="pug">
main.game-area
  DealerSide
  PlayerSide
  ActionRow
  EndGame(:dealerPoints="actualDealerDeckSum" :playerPoints="actualPlayerDeckSum" v-if="actualGameMode==='stopGame'")
</template>

<script>
import DealerSide from "@/components/Layout/DealerSide.vue";
import PlayerSide from "@/components/Layout/PlayerSide.vue";
import ActionRow from "@/components/Layout/ActionRow.vue";
import EndGame from "@/components/EndGame.vue";
import { mapGetters } from "vuex";
import mixins from "./mixins";
import { deck, shuffle } from "@/utils/cardLogic";

const shuffledDeck = shuffle(deck());

export default {
  name: "App",
  mixins: [mixins],
  components: {
    ActionRow,
    PlayerSide,
    DealerSide,
    EndGame,
  },
  computed: {
    ...mapGetters([
      "actualDeck",
      "actualDealerDeckSum",
      "actualPlayerDeckSum",
      "actualGameMode",
    ]),
  },
  mounted() {
    console.log(shuffledDeck);
    this.initNewGame(shuffledDeck);
  },
};
</script>
<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;700&display=swap')

html, body

.general-box-shadow
  box-shadow: 0 4px 0 0 rgba(0,0,0,.5)

.game-area
  display: flex
  flex-direction: column
  height: 100vh
  align-items: center
  justify-content: center
  font-family: Dosis, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  background: #28734d
  padding: 2rem
</style>
