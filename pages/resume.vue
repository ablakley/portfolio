<template>
    <section>
        <top-nav></top-nav>
        <resume-header></resume-header>
        <resume-top-section></resume-top-section>
        <resume-languages></resume-languages>
        <bot-footer></bot-footer>
    </section>
</template>

<script>
import TopNav from "~/components/TopNav.vue";
import BotFooter from "~/components/BotFooter.vue";
import ResumeHeader from "~/components/resume/ResumeHeader.vue";
import ResumeTopSection from "~/components/resume/ResumeTopSection.vue";
import ResumeLanguages from "~/components/resume/ResumeLanguages.vue";
export default {
    components: {
    TopNav,
    BotFooter,
    ResumeHeader,
    ResumeTopSection,
    ResumeLanguages,

  },
}
</script>

<style lang="scss" scoped>

</style>


