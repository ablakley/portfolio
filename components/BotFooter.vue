<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="footer__content">
          <div class="footer__socials">
              <a :href="githubLink">
                  <img :src="github">
              </a>
              <a :href="codepenLink">
                  <img :src="codepen">
              </a>
              <a :href="linkedinLink">
                  <img :src="linkedin">
              </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import linkedin from '~/assets/icons/linkedin.svg';
import github from '~/assets/icons/github.svg';
import codepen from '~/assets/icons/codepen.svg';
export default {
    data() {
        return {
            githubLink: 'https://github.com/ablakley',
            codepenLink: 'https://codepen.io/Zeppi/',
            linkedinLink: 'https://www.linkedin.com/in/amandablakley/',
            linkedin,
            github,
            codepen,
        }
    }
}
</script>
  
<style lang="scss" scoped>
@import "~/scss/_variables.scss";
@import "~/scss/_overrides.scss";

.footer{
    background: #320670;
    padding: 1rem;
    position: relative;
    z-index: 50;
    &__content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
    }
    &__socials {
        img {
            width: 20px;
        }
        a{
            padding: 1rem;
        }
    }
    .container {
    min-height: 50px;
    }
}
@media screen and (max-width: 768px){
    .footer{
        &__content{
            padding: 0 2rem;
        }
    }

}
</style>


