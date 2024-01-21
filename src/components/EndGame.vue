<template lang="pug">
.game-result-wrapper
  .game-result
    .row
      .col-1
      .col-5
        .dealer-points-wrapper Dealer points:
      .col-5
        .dealer-points 
          span {{ dealerPoints }}
      .col-1
    
    .row 
      .col-1 
      .col-5 
        .player-points-wrapper Player points:
      .col-5 
        .player-points 
          span {{ playerPoints }}
      .col-1 
    
    .row 
      .col-1 
      .col-5 
        .winner-is-wrapper The winner is:
      .col-5 
        .winner-is 
          b {{ theWinnerIs }}
      .col-1
    .row.align-items-center.justify-content-center.mt-3
      NewGame.animation-wiggle.col-auto.mx-1(ref="new-game-btn" :btnType="'btn-outline-success'" @newGame="handleNewGame")
</template>
<script>
import mixins from "@/mixins";
import NewGame from "@/components/Buttons/NewGame.vue";
import { deck, shuffle } from "@/utils/cardLogic";

const shuffledDeck = shuffle(deck());
export default {
  name: "GameResult",
  mixins: [mixins],
  components: { NewGame },
  props: {
    dealerPoints: {
      type: Number,
      default: 0,
    },
    playerPoints: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    theWinnerIs() {
      if (
        this.dealerPoints === 21 ||
        (this.playerPoints > 21 && this.dealerPoints <= 21)
      ) {
        return "Dealer";
      } else if (
        this.playerPoints === 21 ||
        (this.dealerPoints > 21 && this.playerPoints <= 21)
      ) {
        return "Player";
      } else {
        return this.dealerPoints > this.playerPoints ? "Dealer" : "Player";
      }
    },
  },
  methods: {
    handleNewGame() {
      this.initNewGame(shuffledDeck);
    },
  },
};
</script>
<style lang="scss">
.game-result-wrapper {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: start;
  justify-self: center;
  z-index: 100;
}

.game-result {
  background: #fff;
  border-radius: 4px;
  width: 320px;
  max-width: 90%;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.animation-wiggle {
  animation: wiggle 2s linear infinite;
}

/* Keyframes */
@keyframes wiggle {
  0%,
  7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-10deg);
  }
  20% {
    transform: rotateZ(5deg);
  }
  25% {
    transform: rotateZ(-5deg);
  }
  30% {
    transform: rotateZ(3deg);
  }
  35% {
    transform: rotateZ(-2deg);
  }
  40%,
  100% {
    transform: rotateZ(0);
  }
}
</style>
