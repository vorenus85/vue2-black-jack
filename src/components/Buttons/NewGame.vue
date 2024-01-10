<template lang="pug">
BlackJackButton.new-game-btn(@click.native="$emit('newGame')") New Game
</template>
<script>
import BlackJackButton from "./BlackJackButton.vue";
export default {
  name: "NewGame",
  components: { BlackJackButton },
};
</script>
