<template lang="pug">
BlackJackButton.stand-btn(@click.native="$emit('stand')") Stand
</template>
<script>
import BlackJackButton from "./BlackJackButton.vue";
export default {
  name: "Stand",
  components: { BlackJackButton },
};
</script>
