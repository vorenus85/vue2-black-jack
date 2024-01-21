<template lang="pug">
BlackJackButton.new-game-btn(@click.native="$emit('newGame')" :btnType="btnType") New Game
</template>
<script>
import BlackJackButton from "./BlackJackButton.vue";
export default {
  name: "NewGame",
  components: { BlackJackButton },
  props: {
    btnType: {
      type: String,
      default: "btn-light",
    },
  },
};
</script>
