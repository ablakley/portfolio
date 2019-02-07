<template>
       <div class="resume-languages">
       <h3 class="is-size-5">Languages</h3>
            <div class="resume-languages__wrapper">
                    <ul class="skill-bars">
                        <li v-for="language in languages" :key="language">{{ language.name }}
                            <div class="bar-container">
                                <span ref="'bar-' + ((index % languages) + 1)" :class="'bar-' + ((index % languages) + 1)"></span>
                            </div>
                        </li>
                    </ul>
            </div>
       </div>    
</template>

<script>
import axios from 'axios';

export default {
   data() {
       return {
           languages: {},
           enter: 0,
       }
   },
   mounted() {
       axios.get('https://wt-6f56eb896c300f1a8785ffd1215cc522-0.sandbox.auth0-extend.com/resume?type=languages')
       .then((response) => {
           console.log(response.data);
           this.languages = response.data;
       })
       .catch((error) => {
           console.log(error);
       });
   }
}
</script>

<style lang="scss" scoped>
@import "~/scss/_variables.scss";
@import "~/scss/_overrides.scss";

.resume-contact{
    font-family: $family-sans-serif;
    color: $black;
    h3 {
        font-family: 'Oswald', 'Inter UI', Arial, Helvetica, sans-serif;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        padding-bottom: 0.5rem;
    }
    &__wrapper{
        display: flex;
        align-items: center;
    }

    &__info{
        font-size: .8125rem;
    }
    &__icon{
        width: 13px;
        height: 13px;
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
    }
    a{
        color: $black;
    }
}

</style>

