<template lang="pug">
BJButton.split-btn(@click.native="$emit('split')") Split
</template>
<script>
import BJButton from "./BJButton.vue";
export default {
  name: "Split",
  components: { BJButton },
};
</script>
