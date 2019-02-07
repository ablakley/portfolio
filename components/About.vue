<template>
   <section id="about" class="about-me">
       <div v-for="(about, a) in about" :key="a">
            <div class="about-me__bio"> 
                <h3 class="is-size-3">About Me</h3>
                <p>{{ about.bio }}</p>
            </div>
        </div>
   </section>    
</template>

<script>
import axios from 'axios';
export default {  
   data() {
       return {
           about: {},
       }
   },
   mounted() {
       axios.get('https://wt-6f56eb896c300f1a8785ffd1215cc522-0.sandbox.auth0-extend.com/home?type=about')
       .then((response) => {
           console.log(response.data);
           this.about = response.data;
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
.about-me{
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
}

</style>

