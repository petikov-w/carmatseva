<template lang="pug">
.card
  img(:src="infoCard.image_src" :alt="infoCard.image_alt")
  .title {{ infoCard.title }}
  .description {{ infoCard.description }}
</template>

<script>

export default {
  name: "CardListItem",
  props: {i_card: {type: Object}, default:[]},
  setup(props) {
    const infoCard = props.i_card;
    return {infoCard}
  }
}
</script>

<style scoped>

</style>

