<template lang="pug">

.header(v-if="isDesktop")
.header(v-if="isMobile")


</template>

<script>
import {useStore} from 'vuex';
import {computed} from "vue";
export default {
  name: "header_fixed",

    setup() {
      const store = useStore();
      // const telefon = computed(()=> store.getters.getTelefon);
      const isMobile = computed(() => store.getters.getIsMobile);
      const isDesktop = computed(() => store.getters.getIsDesktop);
      return { isMobile, isDesktop }
    }

}
</script>

<style scoped>

</style>