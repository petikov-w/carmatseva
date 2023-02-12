<template lang="pug">
CardListItem(v-for="(item, index) in infoCards" :key="index" :i_card="item")
</template>

<script>
import CardListItem from "@/components/CardListItem.vue";
import {useStore} from "vuex";
import {computed} from "vue";
export default {
  name: "CardList",
  components: {CardListItem},
  props: {card_info: {type: Object}, default: []},
  setup(props) {
    const store = useStore();
    const infoCards  = props.card_info;
    const isMobile = computed(() => store.getters.getIsMobile);
    const isTablet = computed(() => store.getters.getIsTablet);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    return { isMobile, isTablet, isDesktop, infoCards }
  }
}
</script>

<style scoped>

</style>
