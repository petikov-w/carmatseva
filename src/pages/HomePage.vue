<template lang="pug">
div(v-if="isDesktop")
 .wrapper
   .section_hero.flex_row__sb
     .section_hero__info
       .title {{ Home.title }}
       .subtitle {{ Home.subtitle }}
       button.btn-order {{ Home.button_text }}
       img.section_hero__blik-1-desktop(:src="BlickImage" alt="blick")
       img.section_hero__blik-2-desktop(:src="BlickImage" alt="blick")
       img.section_hero__blik-3-desktop(:src="BlickImage" alt="blick")
       img.section_hero__blik-4-desktop(:src="BlickImage" alt="blick")
       img.section_hero__blik-5-desktop(:src="BlickImage" alt="blick")
     .section_hero__img
       img(:src="Home.img_mats.image" :alt="Home.img_mats.alt")

div(v-if="isTablet")
 .wrapper-tablet
   .section_hero-tablet.flex_row__sb
   .section_hero-tablet__info
     .title {{ Home.title }}
     .subtitle {{ Home.subtitle }}
     button.btn-order {{ Home.button_text }}
     //img.section_hero__blik-1-desktop(:src="BlickImage" alt="blick")
     //img.section_hero__blik-2-desktop(:src="BlickImage" alt="blick")
     //img.section_hero__blik-3-desktop(:src="BlickImage" alt="blick")
     //img.section_hero__blik-4-desktop(:src="BlickImage" alt="blick")
     //img.section_hero__blik-5-desktop(:src="BlickImage" alt="blick")
   .section_hero-tablet__img
     img(:src="Home.img_mats.image" :alt="Home.img_mats.alt")

div(v-if="isMobile")
 .section_hero-mobile
  .section_hero-mobile__info.flex_col__c
   .section_logo.flex_row__cc
    img.logo(:src="Home.img_logo.image" :alt="Home.img_logo.alt")
    .logo-text {{ Home.logo }}
   img(:src="Home.img_background.image" :alt="Home.img_background.alt")
   .title {{ Home.title }}
   .subtitle {{ Home.subtitle }}
   button.btn-order {{ Home.button_text }}
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
    const BlickImage = computed(()=> store.getters.getBlickImage);
    const isMobile = computed(() => store.getters.getIsMobile);
    const isTablet = computed(() => store.getters.getIsTablet);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    return { isMobile, isTablet, isDesktop, Home, BlickImage }
  }
}
</script>

<style lang="scss" scoped>

</style>