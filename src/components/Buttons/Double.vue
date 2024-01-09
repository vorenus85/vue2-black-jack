<template lang="pug">
BlackJackButton.double-btn(@click.native="$emit('double')") Double
</template>
<script>
import BlackJackButton from "./BlackJackButton.vue";
export default {
  name: "Double",
  components: { BlackJackButton },
};
</script>
