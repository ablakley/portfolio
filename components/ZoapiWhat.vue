<template>
   <section id="zoapi" class="zoapi">
       <div v-for="(zoapi, z) in zoapi" :key="z">
            <div class="zoapi__content"> 
                <p>{{ zoapi.why }}</p>
                <p>See ZOAPI's Documentation <a :href="docs">here</a>.</p>
            </div>
        </div>
   </section>    
</template>

<script>
import axios from 'axios';
export default {  
   data() {
       return {
           zoapi: {},
           docs: 'https://documenter.getpostman.com/view/6434818/RztoKnYE#eba6c207-a78e-40fd-abf1-56b3c8fa1bf3'
       }
   },
   mounted() {
       axios.get('https://wt-6f56eb896c300f1a8785ffd1215cc522-0.sandbox.auth0-extend.com/home?type=zoapi')
       .then((response) => {
           console.log(response.data);
           this.zoapi = response.data;
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
.zoapi{
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

    a{
        color: $seafoam;
    }
}

</style>

