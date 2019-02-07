<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <about></about>
            </div>
            <div class="column">
                <resume-contact></resume-contact>
            </div>
        </div>
    </div>
</template>

<script>
import ResumeAbout from '~/components/About';
import ResumeContact from "~/components/resume/ResumeContact.vue";
export default {
    components: {
        ResumeAbout,
        ResumeContact
    } 
}
</script>

