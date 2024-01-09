<template lang="pug">
BlackJackButton.hit-btn(@click.native="$emit('hit')") Hit
</template>
<script>
import BlackJackButton from "./BlackJackButton.vue";
export default {
  name: "Hit",
  components: { BlackJackButton },
};
</script>
