<template lang="pug">
div(v-if="isDesktop")
 .wrapper
  img(:src="Home.img_mats.image" :alt="Home.img_mats.alt")

//home(v-if="isTablet")
//  .wrapper
//    img(:src="Home.img_mats.image")

//home(v-if="isMobile")
//  .wrapper
//    img(:src="Home.img_mats.image")
</template>

<script>
import {useStore} from 'vuex';
import {computed} from "vue";
export default {
  name: "home",
  components: {},
  setup() {
    const store = useStore();
    const Home = computed(()=> store.getters.getHome);
    const isMobile = computed(() => store.getters.getIsMobile);
    const isTablet = computed(() => store.getters.getIsTablet);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    return { isMobile, isTablet, isDesktop, Home }
  }
}
</script>

<style lang="scss" scoped>

</style>