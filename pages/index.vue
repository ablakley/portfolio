<template>
  <div>
    <top-nav></top-nav>
  <main>
    <hero></hero>
    <div class="container">
      <div class="columns">
        <div class="column" id="about">
          <about/>
        </div>
        <div class="column arrow-contacts">
          <img :src="arrow">
        </div>
      </div>
      <div class="columns">
         <div class="column arrow-zoapi">
           <img :src="arrowTwo">
        </div>
        <div class="column">
          <socials/>
        </div>
      </div>
      <div class="columns">
        <div class="column">
           <zoapi-about/>
        </div>
      </div>
    </div>  
    </main>
    <bot-footer></bot-footer>
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import TopNav from "~/components/TopNav.vue";
import About from '~/components/About.vue';
import Socials from '~/components/Socials.vue';
import ZoapiAbout from '~/components/ZoapiAbout.vue';
import BotFooter from "~/components/BotFooter.vue";
import arrow from '~/assets/images/arrow.svg';
import arrowTwo from '~/assets/images/arrow-2.svg';

export default {
  data() {
    return {
      scrollOff: false,
      arrow,
      arrowTwo
    }
  },
  components: {
    Hero,
    TopNav,
    BotFooter,
    About,
    Socials,
    ZoapiAbout,
    
  }
};
</script>

<style lang="scss">
@import "~/scss/_overrides.scss";
main {
  background-color: #230F56;
      background: linear-gradient(180deg,#262277 15%, #320670 65%, #622FB2 150%);
      overflow: hidden;
      @include touch{
        margin-top: -2px;
      }
}
.container{
  min-height: 35vh;
}
.column{
  padding: 2rem;
}
.arrow-contacts{
  img {
     width: 150px;
  margin-top: 100px;
  }
  @include touch{
      display: none;
    }
}
.arrow-zoapi {
  img{
    width: 550px;
    margin: auto;
    display: block;
  }
    @include touch{
      display: none;
    }
}
</style>
