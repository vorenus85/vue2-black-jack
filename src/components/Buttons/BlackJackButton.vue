<template lang="pug">
button.btn(:class="btnType")
  slot
</template>
<script>
export default {
  name: "BlackJackButton",
  props: {
    btnType: {
      type: String,
      default: "btn-light",
    },
  },
};
</script>
