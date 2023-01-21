<template lang="pug">
h1 {{ Footer.title_1 }}

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
.footer {
  position: relative;
  margin-bottom: 100px;
}

.blik-2 {
  position: absolute;
  top: 10px;
  right: -20px;
  @media (min-width: 768px) and (max-width: 1200px) {
    width: 45px;
    height: 45px;
    left: 690px;
    top: 125px;
  }
}
.blik-3 {
  position: absolute;
  top: 82px;
  left: -70px;
  @media (min-width: 768px) and (max-width: 1200px) {
    width: 85px;
    height: 97px;
    left: 100px;
    top: 110px;
  }
}

.footer-box {
  display: flex;
  justify-content: space-around;
  @media (min-width: 768px) and (max-width: 1200px) {
    width: 100vw;
    left: 0;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 0;
  }

}

.box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 130px;
  @media screen and (max-width: 500px) {
    margin-top: 20px;
  }
  h4 {
    font-size: 14px;
  }
  p {
    max-width: 220px;
    margin: 0!important;
   // @include font(14px, 300, 16px);
  }
  .img-m {
    text-align: center!important;
  }
}

.social {
  width: 33px;
  height: 33px;
}

:deep(.telefon) {
  color: #000000;
  font-size: 14px;
}
</style>