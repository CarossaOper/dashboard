<template>
    <div>
        <Nav/>
        <PostView/>
    </div>
</template>

<script>
import Nav from "../components/Nav.vue"
import PostView from "../components/PostView.vue"

export default {
    name: "Dashboard",
    components: {
        Nav,
        PostView
    }
}
</script>

<style scoped>

.m--5 {
    margin-top: 0.5em;
}

</style>