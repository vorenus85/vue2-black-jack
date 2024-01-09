<template lang="pug">
section.dealer-side
  .row.align-items-center.justify-content-center
    Card(:back="true")
    Card(:card="`C10`")
</template>
<script>
import Card from "../Card.vue";

export default {
  name: "DealerSide",
  components: { Card },
};
</script>
