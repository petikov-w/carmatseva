<template lang="pug">
Header
router-view
Footer

</template>

<script>
//import Header from "@/components/header_not_fixed.vue";
import Home from "@/pages/HomePage.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import {useStore} from 'vuex';
import {computed, onMounted} from "vue";

export default {
  name: "App",
  components: {Header, Home, Footer},
  setup() {

    const store = useStore();
    const isMobile = computed(() => store.getters.getIsMobile);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    const isTablet = computed(() => store.getters.getIsTablet);
    onMounted(() => { window.addEventListener('resize', function () {
      if (window.innerWidth>800) {
        store.dispatch("setDesktop")
      } else if (window.innerWidth>400 && window.innerWidth<800) {
        store.dispatch("setTablet")
      }
      else if (window.innerWidth<400) {
        store.dispatch("setMobile")
      }
    })
    })
    return { isMobile, isDesktop, isTablet}
  }

}
</script>

<style scoped lang="scss">

</style>