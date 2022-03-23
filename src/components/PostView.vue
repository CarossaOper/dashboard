<template>
    <div class="postlist container">
        <EditPost :Post='{
            title: "",
            author: "",
            date: "",
            content: "",
            meta: {
                views: 0
            }}'
            :ptype="0"
        />
        <div v-for="post in posts" :key="post._id">
            <Post :Post="post" @editEvent="edit"/>
        </div>
    </div>
</template>

<script>
import Post from "./Post.vue"
import EditPost from "./EditPost.vue"

const axios = require("axios")


export default {
    name: "PostViews",
    components: {
        Post,
        EditPost
    },
    data() {
        return {
            posts: []
        }
    },
    created() {
        let main = this

        axios.get('http://localhost:8081/api/blog', { crossdomain: true })
        .then(function (response) {
            console.log(response.data);
            main.posts = response.data.blog.reverse()
        })
        .catch(function (error) {
            console.log(error)
        });
    },
}
</script>

<style scoped>

.postlist {
    margin-top: 1rem;
}

</style>