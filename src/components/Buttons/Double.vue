<template lang="pug">
BlackJackButton.double-btn(@click.native="$emit('double')" :btnType="btnType") Double
</template>
<script>
import BlackJackButton from "./BlackJackButton.vue";
export default {
  name: "Double",
  components: { BlackJackButton },
  props: {
    btnType: {
      type: String,
      default: "btn-light",
    },
  },
};
</script>
