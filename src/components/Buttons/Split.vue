<template lang="pug">
BlackJackButton.split-btn(@click.native="$emit('split')") Split
</template>
<script>
import BlackJackButton from "./BlackJackButton.vue";
export default {
  name: "Split",
  components: { BlackJackButton },
};
</script>
