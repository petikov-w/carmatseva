<template>

    <div class="header">
      <div class="t-area">
        <img v-if="res > 500" width="20" height="20" src="../assets/images/i-telefon.png" alt="ico-telefon">
        <span v-for="(telefon, index) in telefons" :key="index">
                <Telefon class="tels" :tel="telefon"></Telefon>
        </span>
      </div>
      <div class="m-area">
        <img  v-if="res > 500" width="15" height="25" src="../assets/images/i-mesto.png" alt="ico-area">
        <div class="mesto">{{ city }}</div>
      </div>
      <div v-if="res > 500" class="s-area">
        <img width="30" height="30" src="../assets/images/instagram-icon-white.png" alt="ico-social">
        <div class="social-text" >{{ text }}</div>
      </div>
    </div>

</template>

<script>
import Telefon from '@/components/UI/NumberTelefon';
import {content, listTelefon} from "@/_headfoot_content";

export default {
  components: {
    Telefon
  },
  name: "Header",
  props: {screen_width: Number},
  data: function () {
    return {
      city: content.city,
      text: content.welcome,
      telefons: listTelefon,
      res: this.screen_width
    }
  },
}
</script>

<style lang="scss" scoped>

 .tels {
  margin-left: 15px;
   @media screen and (max-width: 500px) {
     margin-left: 0;
   }
}

:deep(.telefon) {
  color: #FFFFFF;
}


:deep(fnt) {
  color: #FFFFFF;
}

.header {
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) and (max-width: 1200px) {
  }
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    height: 17vh;
    width: 100vw;
    left: 0;
  }

  .t-area {
    display: flex;
    align-items: center;
    @media screen and (max-width: 500px) {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 15px;
    }
  }
  .m-area {
    display: flex;
    align-items: center;
    @media screen and (max-width: 500px) {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 15px 0;
    }
    .mesto {
      @include font (15px, 500, 20px, #FFFFFF);
      padding-left: 13px;
      text-decoration: none;
      @media screen and (max-width: 500px) {
        padding-left: 0;
        text-transform: uppercase;
      }
    }
  }
  .s-area {
    display: flex;
    align-items: center;
    .social-text {
      font-size: 14px;
      color: #FFFFFF;
      max-width: 97px;
    }
    img {
      margin-right: 10px;
    }
  }

}

/*Адаптивные стили*/
/*----------------*/
@media (min-width: 800px) and (max-width: 1200px) {
  .header {
    width: 80vw;
    margin: 0 auto;
  }
}

@media (min-width: 500px) and (max-width: 768px) {
  .header {
    width: 60vw;
    margin: 0 auto;
  }
  .m-area {
    margin-left: 5vw;
  }
}

</style>
