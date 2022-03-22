<template>
    <div>
        <div class="editor">
            <h2>Editor</h2>
            <div class="inputs">
                <input
                    type="text"
                    id="title"
                    class="form-control"
                    placeholder="Titel"
                    aria-label="title"
                    aria-describedby="submit"
                    v-model="title"
                />
                <div class="info">
                    <input
                    type="text"
                    id="author"
                    class="form-control mr"
                    placeholder="Autor*in"
                    aria-label="author"
                    aria-describedby="submit"
                    v-model="author"
                    />
                    <input
                        type="text"
                        id="date"
                        class="form-control"
                        placeholder="Datum"
                        aria-label="date"
                        aria-describedby="submit"
                        v-model="date"
                    />
                </div>
                <textarea
                    name="content"
                    id="content"
                    placeholder="Inhalt"
                    class="form-control"
                    v-model="content"
                >
                </textarea>
            </div>
            <button class="btn" type="button" id="submit" v-on:click="save">
                <span class="btn-text">Save</span>
            </button>
        </div>
    </div>
</template>

<script>
const axios = require("axios")

export default {
    name: "EditPost",
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
        ptype: Number // 0: Create New 1: Update
    },
    data () {
        return {
            title: this.Post.title,
            author: this.Post.author,
            content: this.Post.content,
            date: this.Post.date
        }
    },
    methods: {
        save() {
            console.log(`${this.Post._id} | ${this.title} | ${this.author} | ${this.content}`)
            if (this.ptype == 0) {
                console.log("New Post")
                axios.post("http://localhost:8080/api/post/new", {
                    post: {
                        title: this.title,
                        author: this.author,
                        date: this.date,
                        content: this.content
                    }
                }, {
                    headers: {
                        Authorization: `Bearer ${this.getCookie("token")}`
                    }
                })
                .then(function (response) {
                    console.log(response.data);
                    window.location = "/"
                })
                .catch(function (error) {
                    console.log(error)
                });
            } else {
                console.log("Post Update")
                axios.post("http://localhost:8080/api/post/update", {
                    post: {
                        _id: this.Post._id,
                        title: this.title,
                        author: this.author,
                        date: this.date,
                        content: this.content
                    }
                }, {
                    headers: {
                        Authorization: `Bearer ${this.getCookie("token")}`
                    }
                })
                .then(function (response) {
                    console.log(response.data);
                    window.location = "/"
                })
                .catch(function (error) {
                    console.log(error)
                });
            }
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

button {
    display: block;
    border: 2px solid #5482B6;
    border-radius: 0;

    font-family: 'Oswald', sans-serif;
    color: #5482B6;

    margin-left: auto;
}

button:hover {
    background-color: #5482B6;
    color: white;
}

h2 {
    color: #5482B6;
}

.editor {
    padding: 1em;
    border: 2px solid #5482B6;
    font-family: 'Oswald', sans-serif;
}

.form-control {
    margin-bottom: 0.5em;
}

input {
    border-radius: 0;
    font-weight: 300;
}

textarea {
    border-radius: 0;
    width: 100%;
    font-weight: 300;
}

.info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /*flex-wrap: wrap;*/
}

.mr {
    margin-right: 1rem;
}

</style>