<template>
    <div class="container">
        <div class="resume-header">
            <div class="portrait" :style="{ backgroundImage: `url(${backgroundUrl})` }">
            </div>
            <div class="resume-header__wrapper">
                <div class="resume-header__name">
                    <h1 class="is-size-1">
                        Amanda Blakley
                    </h1>
                </div>
                <div class="resume-header__print">
                    <img :src="pdf">
                    <h6 class="is-size-6">
                        <a href="#" class="pdf-print">
                        Printable Version
                        </a>
                    </h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import backgroundUrl from '~/assets/images/amanda-portrait.jpg';
import pdf from '~/assets/icons/pdf.svg';
export default {
    data () {
        return {
            backgroundUrl,
            pdf,
        }
    }
}
</script>


<style lang="scss" scoped>
@import "~/scss/_variables.scss";
@import "~/scss/_overrides.scss";
.resume-header{
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 3rem;
    position: relative;
    z-index: 60;
    .portrait{
        border-radius: 50%;
        height: 175px;
        width: 175px;
        background-position: 50% 18%;
        background-size: cover;
        margin-right: 2rem;
    }
    &__name {
        h1{
            text-align: center;
            text-transform: uppercase;
            font-family: 'Oswald', 'Inter UI', Arial, Helvetica, sans-serif;
            color: $black;
        }
    }
    &__print{
        text-decoration: none;
        text-transform: uppercase;
        font-family: $family-sans-serif;
        display: flex;
        align-items: center;
        a {
            color: $black;
        }
        img {
            width: 15px;
            margin-right: 0.5rem;
        }
    }
    
    
    
}

</style>

