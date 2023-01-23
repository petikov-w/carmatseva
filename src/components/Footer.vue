<template lang="pug">
footer(v-if="isDesktop")
  img.blik-2(:src="Footer.blick_2" alt="blick")
  img.blik-3(:src="Footer.blick_3" alt="blick")

footer(v-if="isTablet")
  img.blik-3-t(:src="Footer.blick_3" alt="blick")
  img.blik-2-t(:src="Footer.blick_2" alt="blick")

footer(v-if="isMobile")

<!--    <div class="footer">-->
<!--      <img v-if="res > 500" class="blik-2" src="../assets/images/blik-eva-m.png" alt="blik">-->
<!--      <img v-if="res > 500" class="blik-3" src="../assets/images/blik-eva-s.png" alt="blik">-->
<!--      <div class="wrapper">-->
<!--        <div class="footer-box">-->
<!--          <div v-if="res > 500" class="box">-->
<!--              <h4>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h4>-->
<!--              <img class="social" src="../assets/images/instagram-icon.png" alt="instagram">-->
<!--          </div>-->

<!--          <div class="box">-->
<!--              <h4>КОНТАКТНЫЕ ТЕЛЕФОНЫ</h4>-->
<!--              <span v-for="(telefon, index) in telefons" :key="index">-->
<!--                <Telefon class="tels" :tel="telefon"></Telefon>-->
<!--              </span>-->
<!--          </div>-->
<!--          <div v-if="res < 500" class="box">-->
<!--            <h4>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h4>-->
<!--            <div class="img-m">-->
<!--              <img class="social" src="../assets/images/instagram-icon.png" alt="instagram">-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="box">-->
<!--              <h4>О НАС</h4>-->
<!--              <p>{{ text }}<br><br>{{ city }}</p>-->
<!--          </div>-->
<!--        </div>-->
<!--    </div>-->
<!--    </div>-->
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

//:deep(.telefon) {
//  color: #000000;
//  font-size: 14px;
//}

</style>