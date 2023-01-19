<template lang="pug">

header(v-if="isDesktop")
 .gradient-line
   .wrapper-top
     .t-area
        img(:src='HeaderNotFixed.icon_telefon' alt="ico-telefon")
        list-telefons(:tel='HeaderNotFixed.list_telefons' :is-header="true")
     .m-area
        img(:src='HeaderNotFixed.icon_mesto' alt="ico-mesto")
        span {{ HeaderNotFixed.text_mesto }}
     .s-area
        img(:src='HeaderNotFixed.icon_instagram' alt="ico-instagram")
        span.social-text {{HeaderNotFixed.text_instagram}}

header(v-if="isTablet")
  .gradient-line
    .wrapper-top
      .t-area
      .m-area-m
        img(:src='HeaderNotFixed.icon_mesto' alt="ico-mesto")
        span.font-header {{ HeaderNotFixed.text_mesto }}
      .s-area
        img(:src='HeaderNotFixed.icon_instagram' alt="ico-instagram")
        span.social-text {{HeaderNotFixed.text_instagram}}

header(v-if="isMobile")
  .gradient-line
    .wrapper-top-m
      .t-area-m
        list-telefons.font-header(:tel='HeaderNotFixed.list_telefons' :is-header="true")
      .m-area-m
        span.font-header {{ HeaderNotFixed.text_mesto }}





</template>

<script>
import {useStore} from 'vuex';
import {computed} from "vue";
import ListTelefons from '@/components/NumberTelefon.vue'
export default {
  name: "header_not_fixed",
  components: {ListTelefons},
    setup() {
      const store = useStore();
      const HeaderNotFixed = computed(()=> store.getters.getHeaderNotFixed);
      const isMobile = computed(() => store.getters.getIsMobile);
      const isTablet = computed(() => store.getters.getIsTablet);
      const isDesktop = computed(() => store.getters.getIsDesktop);
      return { isMobile, isTablet, isDesktop, HeaderNotFixed }
    }

}
</script>

<style scoped lang="scss">
:deep(.telefon) {
  font-size: 15px;
  font-weight: 500;
  line-height: 27px;
  text-decoration: none;
  color: #FFFFFF;
  margin-left: 15px;
}

:deep(.telefon-m) {
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
  color: #FFFFFF;
}

//:deep(.telefon-mf) {
//  font-size: 12px;
//  font-weight: 600;
//  line-height: 20px;
//  letter-spacing: 0.5px;
//  text-decoration: none;
//  color: #ffffff;
//}


</style>