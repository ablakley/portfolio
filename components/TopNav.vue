<template>
  <nav id="nav" class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <nuxt-link to="/">
            <img :src="logo">
        </nuxt-link>
        <div
          @click="showNav = !showNav" :class="{ 'is-active': showNav }"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        <!--Nav drawer-->  
          <transition name="slide-fade">
            <div :class="{ 'is-active': showNav }" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item" href="#about">About</a>
                <a class="navbar-item" :href="git">Github</a>
                
                <a class="navbar-item" href="mailto:ablakley.designs@gmail.com">Contact Me</a>
              </div>
            </div>
          </transition>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "~/assets/images/ab-logo-abr.svg";
export default {
  data() {
    return {
      showNav: false,
      logo,
      git: 'https://github.com/ablakley'
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/scss/_variables.scss";
@import "~/scss/_overrides.scss";

.navbar{
    display: block;
    background: #262277;
    min-height: 0px;
    height: 50px;
    position: relative;
    width: 100%;
    z-index: 200;
}
.navbar-burger{
  display: block;
  color: $white;
  position: fixed;
  z-index: 120;
  right: 0;
  span {
    height: 2px;
    width: 20px;
  }
  &:hover {
    background-color: transparent;
    color: #ffffff;
}
}
.navbar-brand, .navbar-tabs{
    min-height: 50px;
}
.navbar-brand img {
      width: 75px;
    display: flex;
    padding: 1rem;
}
.navbar-menu{
display: none;
&.is-active{
    display: block;
    right: 0;
    position: fixed;
    background: transparent;
    top: 3.15rem;
    width: 400px;
    height: 100vh;
    z-index: 100;
    overflow-y: auto;
    @include touch{
  width: 100vw;
  background: #262277;
}
}

}

a.nuxt-link-exact-active.nuxt-link-active {
    width: 100%;
}

@media screen and (max-width: 768px){
    .navbar-menu::-webkit-scrollbar { 
    display: none; 
}
}

.navbar-start{
    display: flex;
    flex-direction: column;
}

a.navbar-item {
    font-family: 'Oswald',  Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: $white;
    font-size: 2rem;
    &:hover{
      background-color: transparent;
      color: #622FB2;
    }
}

.navbar-item, .navbar-link{
    padding: 1rem 2rem;
}


.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>


