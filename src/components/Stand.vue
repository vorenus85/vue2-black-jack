<template lang="pug">
BJButton.stand-btn(@click.native="$emit('stand')") Stand
</template>
<script>
import BJButton from "./BJButton.vue";
export default {
  name: "Stand",
  components: { BJButton },
};
</script>
