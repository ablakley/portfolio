<template>
   <section id="zoapi" class="zoapi">
       <div v-for="(zoapi, z) in zoapi" :key="z">
            <div class="zoapi__content"> 
                <h3 class="is-size-3">ZOAPI</h3>
                <p>{{ zoapi.about }}</p>
                <p>{{ zoapi.why }}</p>
                <p>See ZOAPI's documentation <a :href="docs">here.</a></p>
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
           docs: 'https://documenter.getpostman.com/view/6434818/RztoKnYE#2d9f4190-b949-4c14-9534-276f45aa4ee4',
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
    min-height: 25vh;
}
    h3 {
        font-family: 'Oswald', 'Inter UI', Arial, Helvetica, sans-serif;
        letter-spacing: 0.5px;
        padding-bottom: 0.5rem;
        text-transform: uppercase;
        color: $seafoam;
    }
    p{
        padding-bottom: 1rem;
    }
    a{
        color: $seafoam;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
    }
}

</style>

