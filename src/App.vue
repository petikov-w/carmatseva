<template lang="pug">
Header
.wrapper
</template>

<script>
import Header from "@/components/header_fixed.vue";
export default {
  name: "App",
  components: { Header },
  setup() {
    const store = useStore();
    const isMobile = computed(() => store.getters.getIsMobile);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    onMounted(() => { window.addEventListener('resize', function () {
      if (window.innerWidth>400) {
        store.dispatch("setDesktop")
      } else {
        store.dispatch("setMobile")
      }
    })
    })
    return { isMobile, isDesktop}
  }

}
</script>

<style scoped>

</style>