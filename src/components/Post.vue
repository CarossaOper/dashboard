<template>
    <div>
    <div class="post d-flex flex-row">
        <p>{{ Post.title }}</p>
        <div class="actions icon d-flex flex-row">
            <a href="#" @click="editVisible">
                <svg v-if="!visible" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" @click="deletePost">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </a>
        </div>
    </div>
    <EditPost :id="Post._id" class="hidden mt" :Post="Post" :ptype="1"/>
    </div>
</template>

<script>
import EditPost from "./EditPost.vue"
const axios = require("axios")

export default {
    name: "Post",
    components: {
        EditPost
    },
    props: {
        Post: {
            _id: String,
            title: String,
            author: String,
            date: String,
            content: String,
            meta: {
                views: Number
            }
        },
    },
    data() {
        return {
            visible: false
        }
    },
    methods: {
        editVisible() {
            console.log(this.visible)
            if (!this.visible) {
                console.log(document.getElementById(this.Post._id).classList.remove("hidden"))
                this.visible = true
            } else {
                console.log(document.getElementById(this.Post._id).classList.add("hidden"))
                this.visible = false
            }
        },
        deletePost() {
            console.log("Deleting post")
            let cook = this.getCookie("token")
            console.log(cook)

            axios.post("http://carossa-oper.de:8081/api/post/delete", {
                _id: this.Post._id
            }, {
                headers: {
                    Authorization: `Bearer ${cook}`
                }
            }, { crossdomain: true })
                .then(function (response) {
                    console.log(response.data);
                    window.location = "/"
                })
                .catch(function (error) {
                    console.log(error)
            });
        },
        getCookie(cookieName) {
            let cookie = {};
            document.cookie.split(';').forEach(function(el) {
            let [key,value] = el.split('=');
                cookie[key.trim()] = value;
            })
            return cookie[cookieName];
        }
    }
}
</script>

<style scoped>
.hidden {
    visibility: hidden;
    display: none;
}

.mt {
    margin-top: 1rem;
}

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