<template>
    <div>
        <Nav/>
    </div>
</template>

<script>
import Nav from "../components/Nav.vue"

export default {
    name: "Dashboard",
    components: {
        Nav,
    }
}
</script>

<style scoped>

.m--5 {
    margin-top: 0.5em;
}

</style>