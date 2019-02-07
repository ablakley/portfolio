<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
            <object type="image/svg+xml" :data="smJellyLeft" class="pink-jelly one"></object>
            <object type="image/svg+xml" :data="smJellyPurpOne" class="purp-jelly one"></object>
            <object type="image/svg+xml" :data="lgJelly" class="main-jelly"></object>
            <object type="image/svg+xml" :data="smJellyPurpOne" class="purp-jelly two"></object>
            <object type="image/svg+xml" :data="smJellyRight" class="pink-jelly two"></object>
            <object type="image/svg+xml" :data="smJellyPurpOne" class="purp-jelly three"></object>
            <object type="image/svg+xml" :data="smJellyPurpOne" class="purp-jelly four"></object>
            <object type="image/svg+xml" :data="smJellyPurpOne" class="purp-jelly five"></object>
            <object type="image/svg+xml" :data="smJellyLeft" class="pink-jelly three"></object>
            <object type="image/svg+xml" :data="smJellyLeft" class="pink-jelly four"></object>
      </div>
    </div>
  </section>
</template>

<script>
import lgJelly from "~/assets/images/jelly-fish__lg.svg";
import smJellyLeft from "~/assets/images/jelly-fish__sm.svg";
import smJellyRight from "~/assets/images/jelly-fish__sm.svg";
import smJellyPurpOne from "~/assets/images/jelly-fish-purp__sm.svg";
//:style="{ backgroundImage: `url(${backgroundUrl})` }"
export default {
    data() {
        return {
            lgJelly,
            smJellyRight,
            smJellyLeft,
            smJellyPurpOne,
        }
    }
}
</script>


<style lang="scss" scoped>
@import "~/scss/_variables.scss";
@import "~/scss/_overrides.scss";
.hero {
  width: 100%;
    margin-top: -55px;
    position: relative;
    z-index: 1;
    .container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

    .main-jelly{
       width: 500px;
        margin-left: -100px;
    }
    
    .pink-jelly{
      height: auto;
      opacity: 0.5;
      position: absolute;
    }
    .pink-jelly.one{
      width: 50px;
      margin-left: 100px;
        margin-top: 200px;
      transform: rotate(20deg);
      opacity: 0.25;
    }
    .pink-jelly.two{
      margin-left: -75px;
        margin-top: 150px;
        width:25px;
      transform: rotate(-20deg);
    }
    .pink-jelly.three{
      margin-left: -200px;
        margin-top: -50px;
        width: 25px;
      transform: rotate(-10deg);
      opacity: 0.25;
    }
    .pink-jelly.four{
        width: 50px;
         margin-left: 10px;
         margin-top: -365px;
       opacity: 0.25;
    }
    .purp-jelly{
      position: absolute;
      height: auto;
      opacity: 0.5;
      animation: jelly-bob 10s infinite ease-in-out;
    }
    @keyframes jelly-bob {  
      0%, 100% {
        transform: translate(0,0);
      }
       50% {
    transform: translate(0, 20px);
  }
}
    .purp-jelly.one{
      width: 300px;
        opacity: 0.5;
      margin-left: -100px;
      margin-top: -300px;
    }

    .purp-jelly.two{
      width: 100px;
        margin-left: 125px;
        margin-top: 100px;
      opacity: 1;

    }
    .purp-jelly.three{
     width: 50px;
      margin-left: 125px;
      margin-top: -300px;
      opacity:  0.5;
    transform: rotate(-30deg);
  }
    .purp-jelly.four{
      width: 250px;
         margin-left: -100px;
         margin-top: 350px;
      opacity: 1;
       transform: rotate(20deg);
        @include touch{
        opacity: 0.25;
      }
    }
    .purp-jelly.five{
      width: 75px;
        margin-left: 75px;
        margin-top: 475px;
      opacity: 1;
      @include touch{
        opacity: 0.25;
      }
    }
}

</style>

