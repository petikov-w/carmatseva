<template lang="pug">

.header(v-if="isDesktop")
  .t-area
    //img(:src='HeaderNotFixed.icon_telefon' alt="ico-telefon")



  //<div class="t-area">
  //<img v-if="res > 500" width="20" height="20" src="../assets/images/i-telefon.png" alt="ico-telefon">
  //<span v-for="(telefon, index) in telefons" :key="index">
  //<Telefon class="tels" :tel="telefon"></Telefon>
  //</span>
  //</div>
  //<div class="m-area">
  //<img  v-if="res > 500" width="15" height="25" src="../assets/images/i-mesto.png" alt="ico-area">
  //<div class="mesto">{{ city }}</div>
  //</div>
  //<div v-if="res > 500" class="s-area">
  //<img width="30" height="30" src="../assets/images/instagram-icon-white.png" alt="ico-social">
  //<div class="social-text" >{{ text }}</div>
  //</div>
.header(v-if="isMobile")


</template>

<script>
import {useStore} from 'vuex';
import {computed} from "vue";
export default {
  name: "header",

    setup() {
      const store = useStore();
      const HeaderNotFixed = computed(()=> store.getters.getHeaderNotFixed);
      // const iconTelefon = computed(()=> store.getters.getHeaderNotFixed.icon_telefon);
      // const iconTelefon = computed(()=> store.getters.getHeaderNotFixed.icon_telefon);
      // const iconMesto = computed(()=> store.getters.getHeaderNotFixed.icon_mesto);
      // const iconInstagram = computed(()=> store.getters.getHeaderNotFixed.icon_instagram);
      // const textMesto = computed(()=> store.getters.getHeaderNotFixed.text_mesto);
      // const textInstagram = computed(()=> store.getters.getHeaderNotFixed.text_instagram);
      const isMobile = computed(() => store.getters.getIsMobile);
      const isDesktop = computed(() => store.getters.getIsDesktop);
      return { isMobile, isDesktop, HeaderNotFixed }
      // return { isMobile, isDesktop, iconInstagram, iconMesto, iconTelefon, textMesto, textInstagram }
    }

}
</script>

<style scoped>

</style>