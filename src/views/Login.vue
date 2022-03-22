<template>
    <div class="login">
        <div class="inner">
            <h1>Login</h1>
            <p class="status">{{ statusMsg }}</p>
            <div class="group mb-3">
                <input
                    type="text"
                    id="user"
                    class="form-control"
                    placeholder="Nutzer"
                    aria-label="user"
                    aria-describedby="login-submit"
                    v-model="user"
                />

                <input
                    type="password"
                    id="passwd"
                    class="form-control"
                    placeholder="Passwort"
                    aria-label="passwd"
                    aria-describedby="login-submit"
                    v-model="passwd"
                />
            </div>
            <button class="btn" type="button" id="login-submit" v-on:click="login">
                <span class="btn-text">Login</span>
            </button>
            <router-link to="/" exact>Home</router-link>
        </div>
    </div>
</template>

<script>
const axios = require("axios")

export default {
    name: 'Login',
    data() {
        return {
            user: "",
            passwd: ""
        }
    },
    computed: {
        statusMsg() {
            if (this.user.length == 0 && this.passwd.length == 0) {
                return 'Please enter your Username and Password'
            } else if (this.user.length == 0) {
                return 'Username can not be empty'
            } else if (this.passwd.length == 0) {
                return 'Password can not be empty'
            } else {
                return ''
            }
        }
    },
    methods: {
        login() {
            if (this.user.length != 0 || this.passwd.length != 0) {
                console.log(`${this.user} | ${this.passwd}`)
                axios.post('http://localhost:8081/auth/login', {
                    user: this.user,
                    password: this.passwd
                })
                .then(function (response) {
                    console.log(response.data);
                    document.cookie = "token=" + response.data.token +  "; path=/"
                    window.location = "/"
                })
                .catch(function (error) {
                    console.log(error)
                });
            }
        }
    }
}
</script>

<style scoped>

.hidden {
    visibility: hidden;
}

.login {
    position: absolute;
    top: 30%;
    left: 50%;

    border: 5px solid #5482B6;
    min-width: 300px;

    transform: translate(-50%, -50%);
}

.group {
    display: flex;
    flex-direction: column;
}

.group input  {
    flex-grow: 1;
    border-radius: 0 !important;
    border: 2px solid #5482B6;
    margin-top: 1em;
}

.inner {
    padding: 1rem;
}

button {
    display: block;
    width: 100%;
    border: 2px solid #5482B6;
    border-radius: 0;

    font-family: 'Oswald', sans-serif;
    color: #5482B6;
}

button:hover {
    background-color: #5482B6;
    color: white;
}

h1 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    color: #5482B6;
}

a {
    color: #5482B6 !important;
    font-family: 'Oswald', sans-serif;
}
</style>