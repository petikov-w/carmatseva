<template lang="pug">
- var hero = ['section_hero','flex_row__sb']
div(v-if="isDesktop")
 .wrapper
   .section_logo_nav.flex_row__sb
     .section_logo_nav__logo.flex_row__cc
       img.logo(:src="Home.img_logo.image" :alt="Home.img_logo.alt")
       .logo-text {{ Home.logo }}
     .section_logo_nav__nav
       ul.flex_row__sb
        div(v-for="(item, index) in Home.nav_menu" :key="index")
         li
          a(:href="item.link") {{ item.item }}
   a(id="whatisit")
   div(class=hero)
     .section_hero__info
       .title {{ Home.title }}
       .subtitle {{ Home.subtitle }}
       button.btn-order {{ Home.button_text }}
       include ../assets/pug/blik_desktop
     .section_hero__img
       img(:src="Home.img_mats.image" :alt="Home.img_mats.alt")
   .titleCards(v-html="cardsTitle" )
   .section_card.flex_row__sb
     card-list(:card_info="cards")
 a(id="otziv")
 .section_slider
 a(id="contacts")
div(v-if="isTablet")
 .wrapper-tablet
   .section_hero-tablet.flex_row__sb
     .section_hero-tablet__info
       .section_hero-tablet__logo.flex_row__cc
         img.logo(:src="Home.img_logo.image" :alt="Home.img_logo.alt")
         .logo-text {{ Home.logo }}
       .title {{ Home.title }}
       .subtitle {{ Home.subtitle }}
       button.btn-order {{ Home.button_text }}
       include ../assets/pug/blik_tablet
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
import CardList from "@/components/CardList.vue";
export default {
  name: "home",
  components: {CardList},
  setup() {
    const store = useStore();
    const Home = computed(()=> store.getters.getHome);
    const cards = computed(() => store.getters.getCards);
    const cardsTitle = computed(() => store.getters.getCardsTitle);
    const BlickImage = computed(()=> store.getters.getBlickImage);
    const isMobile = computed(() => store.getters.getIsMobile);
    const isTablet = computed(() => store.getters.getIsTablet);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    return { isMobile, isTablet, isDesktop, Home, BlickImage, cards, cardsTitle }
  }
}
</script>

<style lang="scss" scoped>

</style>