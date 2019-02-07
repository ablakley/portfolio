<template>
   <section>
       <div v-for="(contact, c) in contactInfo" :key="c" class="resume-contact">
       <h3 class="is-size-5">Contact</h3>
       <div class="resume-contact__wrapper">
           <div class="resume-contact__icon">
               <img :src="location">
           </div>
           <div class="resume-contact__info">
               <p>{{contact.location}}</p>
           </div>
       </div> <div class="resume-contact__wrapper">
           <div class="resume-contact__icon">
               <img :src="envelope">
           </div>
           <div class="resume-contact__info">
               <p><a href="mailto:contact.email">{{contact.email}}</a></p>
           </div>
       </div> 
       <div class="resume-contact__wrapper">
           <div class="resume-contact__icon">
               <img :src="discord">
           </div>
           <div class="resume-contact__info">
               <p>{{contact.discord}}</p>
           </div>
       </div> 
       <div class="resume-contact__wrapper">
           <div class="resume-contact__icon">
               <img :src="linkedin">
           </div>
           <div class="resume-contact__info">
               <p><a href="contact.linkedin">{{contact.linkedin}}</a></p>
           </div>
       </div> 
       <div class="resume-contact__wrapper">
           <div class="resume-contact__icon">
               <img :src="github">
           </div>
           <div class="resume-contact__info">
               <p><a href="contact.git">{{contact.git}}</a></p>
           </div>
       </div> 
       <div class="resume-contact__wrapper">
           <div class="resume-contact__icon">
               <img :src="codepen">
           </div>
           <div class="resume-contact__info">
               <p><a href="contact.codepen"> {{contact.codepen }}</a></p>
           </div>
       </div> 
        </div>
   </section>    
</template>

<script>
import axios from 'axios';
import location from '~/assets/icons/location.svg';
import envelope from '~/assets/icons/envelope.svg';
import discord from '~/assets/icons/discord.svg';
import linkedin from '~/assets/icons/linkedin.svg';
import github from '~/assets/icons/github.svg';
import codepen from '~/assets/icons/codepen.svg';
export default {  
   data() {
       return {
           contactInfo: {},
           location,
           envelope,
           discord,
           linkedin,
           github,
           codepen,
       }
   },
   mounted() {
       axios.get('https://wt-6f56eb896c300f1a8785ffd1215cc522-0.sandbox.auth0-extend.com/resume?type=contacts')
       .then((response) => {
           console.log(response.data);
           this.contactInfo = response.data;
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

