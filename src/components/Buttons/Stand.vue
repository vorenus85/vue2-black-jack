<template lang="pug">
BlackJackButton.stand-btn(@click.native="$emit('stand')" :btnType="btnType") Stand
</template>
<script>
import BlackJackButton from "./BlackJackButton.vue";
export default {
  name: "Stand",
  components: { BlackJackButton },
  props: {
    btnType: {
      type: String,
      default: "btn-light",
    },
  },
};
</script>
