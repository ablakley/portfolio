<template>
   <section id="social" class="socials">
       <div v-for="(social, s) in socials" :key="s">
            <div class="socials__content"> 
                <h3 class="is-size-3">Connect</h3>
                <ul>
                    <li><img :src="codepen"><a :href="social.codepen">Codepen</a></li>
                    <li><img :src="git"><a :href="social.git">Github</a></li>
                    <li><img :src="discord"><a :href="social.discord">Zeppi</a></li>
                
                </ul>
            </div>
        </div>
   </section>    
</template>

<script>
import axios from 'axios';
import codepen from '~/assets/icons/codepen.svg';
import git from '~/assets/icons/github.svg';
import discord from '~/assets/icons/discord.svg';
export default {  
   data() {
       return {
           socials: {},
           codepen,
           git,
           discord,
       }
   },
   mounted() {
       axios.get('https://wt-6f56eb896c300f1a8785ffd1215cc522-0.sandbox.auth0-extend.com/home?type=socials')
       .then((response) => {
           console.log(response.data);
           this.socials = response.data;
       })
       .catch((error) => {
           console.log(error);
       });
   },
}
</script>

<style lang="scss" scoped>
@import "~/scss/_variables.scss";
@import "~/scss/_overrides.scss";
.socials{
    font-family: $family-sans-serif;
    color: $white;
    font-size: 0.875rem;
    .container {
    min-height: 150px;
}
    h3 {
        font-family: 'Oswald', 'Inter UI', Arial, Helvetica, sans-serif;
        letter-spacing: 0.5px;
        padding-bottom: 0.5rem;
        text-transform: uppercase;
        color: $seafoam;
    }

    li {
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
    img {
        width: 20px;
    }
    a{
        color: $seafoam;
        padding-left: 0.5rem;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
    }
    
    }
}

</style>

