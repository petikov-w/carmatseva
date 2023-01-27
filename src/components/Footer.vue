<template lang="pug">
footer(v-if="isDesktop")
  .wrapper
    img.blik-3(:src="Footer.blick" alt="blick")
    img.blik-2(:src="Footer.blick" alt="blick")
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
  .wrapper
    img.blik-3-t(:src="Footer.blick" alt="blick")
    img.blik-2-t(:src="Footer.blick" alt="blick")
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
    const Header = computed(()=> store.getters.getHeader);
    const Footer = computed(()=> store.getters.getFooter);
    const isMobile = computed(() => store.getters.getIsMobile);
    const isTablet = computed(() => store.getters.getIsTablet);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    return { isMobile, isTablet, isDesktop, Header, Footer }
  }
}
</script>

<style lang="scss" scoped>

:deep(.telefon) {
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
  text-decoration: none;
  color: #000000;
  display: block;
}

:deep(.telefon-m) {
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  text-decoration: none;
  color: #000000;
  display: block;
}

</style>