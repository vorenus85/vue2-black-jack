<template lang="pug">
BlackJackButton.hit-btn(@click.native="$emit('hit')" :btnType="btnType") Hit
</template>
<script>
import BlackJackButton from "./BlackJackButton.vue";
export default {
  name: "Hit",
  components: { BlackJackButton },
  props: {
    btnType: {
      type: String,
      default: "btn-light",
    },
  },
};
</script>
