<template lang="pug">
.deck-counter.general-box-shadow {{ deckValue }}
</template>
<script>
export default {
  props: {
    deckValue: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style lang="sass">
.deck-counter
  width: 50px
  height: 50px
  line-height: 50px
  position: absolute
  top: -25px
  right: -25px
  border-radius: 100%
  font-weight: bold
  background: #fff
  z-index: 1
</style>
