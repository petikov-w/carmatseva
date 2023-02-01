<template lang="pug">
footer(v-if="isDesktop")
  .wrapper.section_bliks_footer
    img.section_bliks_footer__blik-1-desktop(:src="BlickImage" alt="blick")
    img.section_bliks_footer__blik-2-desktop(:src="BlickImage" alt="blick")
    .footer-section.flex_row__s
      .column.flex_col__s
       .column__title {{ Footer.title_1 }}
       img(:src="Footer.icon_instagram" alt="icon_instagram")
      .column.flex_col__s
       .column__title {{ Footer.title_2 }}
       list-telefons(:tel='Header.list_telefons' :is-header="false" )
      .column.flex_col__s
       .column__title {{ Footer.title_3 }}
       .column__content {{ Footer.text_3 }}
       .column__content {{ Header.text_mesto }}

footer(v-if="isTablet")
  .wrapper.section_bliks_footer
    img.section_bliks_footer__blik-1-tablet(:src="BlickImage" alt="blick")
    img.section_bliks_footer__blik-2-tablet(:src="BlickImage" alt="blick")
    .footer-section-t.flex_row__s
      .column.flex_col__s
        .column__title {{ Footer.title_1 }}
        img(:src="Footer.icon_instagram" alt="icon_instagram")
      .column.flex_col__s
        .column__title {{ Footer.title_2 }}
        list-telefons(:tel='Header.list_telefons' :is-header="false" )
      .column.flex_col__s
        .column__title {{ Footer.title_3 }}
        .column__content {{ Footer.text_3 }}
        .column__content {{ Header.text_mesto }}

footer(v-if="isMobile")
  .wrapper
  .footer-section-m.flex_col__c
    .column.flex_col__c
      .column__title {{ Footer.title_2 }}
      list-telefons(:tel='Header.list_telefons' :is-header="false" )
    .column.flex_col__c
      .column__title {{ Footer.title_1 }}
      img(:src="Footer.icon_instagram" alt="icon_instagram")
    .column
      .column__title {{ Footer.title_3 }}
      .column__content {{ Footer.text_3 }}
      .column__content {{ Header.text_mesto }}

</template>

<script>
import {useStore} from 'vuex';
import {computed} from "vue";
import ListTelefons from '@/components/NumberTelefon.vue'
export default {
  name: "footer",
  components: {ListTelefons},
  setup() {
    const store = useStore();
    const BlickImage = computed(()=> store.getters.getBlickImage);
    const Header = computed(()=> store.getters.getHeader);
    const Footer = computed(()=> store.getters.getFooter);
    const isMobile = computed(() => store.getters.getIsMobile);
    const isTablet = computed(() => store.getters.getIsTablet);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    return { isMobile, isTablet, isDesktop, Header, Footer, BlickImage }
  }
}
</script>

<style lang="scss" scoped>

%font {
  font-size: 14px;
  font-weight: 300;
  text-decoration: none;
  color: #000000;
  display: block;
}

:deep(.telefon) {
  @extend %font;
  line-height: 18px;
}

:deep(.telefon-m) {
  @extend %font;
  line-height: 20px;
}

</style>