<template>
    <div>
        <div class="post d-flex flex-row">
            <p>Post Title</p>
            <div class="actions icon d-flex flex-row">
                <a href="" @click="editPost">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </a>
                <a href="" @click="deletePost">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "News",
    methods: {
        editPost() {

        },
        deletePost() {

        }
    }
}
</script>

<style scoped>
.post {
    margin-top: 0.5em;

    font-family: 'Oswald', sans-serif;

    align-items: center;
    justify-content: space-between;

    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 0.5em;
    padding-top: 0.5em;

    font-size: 24px;
    border: 2px solid #5482B6;
}

.post p {
    margin: 0;
}

.icon svg {
    height: 1em;
    width: 1em;
}

a {
    color: black;
    text-decoration: none;
}

a:hover {
    color: #5482B6;
}
</style>