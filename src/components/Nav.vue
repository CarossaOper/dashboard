<template>
    <div class="nav d-flex flex-row-reverse">
        <a href="" class="icon" @click="logout">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
        </a>
        <a href="#"> Newsletter</a>
        <a href="#">Posts</a>
    </div>
</template>

<script>
export default {
    name: "Nav",
    methods: {
        logout() {
            document.cookie = document.cookie+";max-age=0"
            window.document = ""
        },
    }
}
</script>

<style scoped>
.nav {
    width: 100%;
    border-bottom: 2px solid #5482B6;
    height: 50px;
    align-items: center;
}

.nav a {
    font-family: 'Oswald', sans-serif;
    font-size: 24px;
    color: #5482B6;

    margin-right: 1em;

    text-decoration: none;
}

.icon svg {
    height: 1em;
    width: 1em;
}
</style>