<template>
    <div class="newslist container">
        <News/>
    </div>
</template>

<script>
import News from "./News.vue"

export default {
    name: "NewsletterView",
    props: {
        News
    }
}
</script>

<style scoped>

</style>