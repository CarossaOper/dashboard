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
                    v-model="user"
                />

                <input
                    type="password"
                    id="passwd"
                    class="form-control"
                    placeholder="Passwort"
                    aria-label="passwd"
                    v-model="passwd"
                />
            </div>
            <div class="d-flex flex-row justify-content-between">
                <button class="btn" type="button" id="register-submit" v-on:click="register">
                    <span class="btn-text">Register</span>
                </button>
                <button class="btn" type="button" id="login-submit" v-on:click="login">
                    <span class="btn-text">Login</span>
                </button>
            </div>
            <a href="http://carossa-oper.de/">Home</a>
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
            passwd: "",
            status: "",
        }
    },
    computed: {
        statusMsg() {
            console.log(this.status)
            if (this.status != "") {
                return `Error: ${this.status}`
            } else if (this.user.length == 0 && this.passwd.length == 0) {
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
                let main = this
                axios.post('http://carossa-oper.de:8082/auth/login', {
                    user: this.user,
                    password: this.passwd
                }, { crossdomain: true })
                .then(function (response) {
                    console.log(response);
                    document.cookie = "token=" + response.data.token +  "; path=/"
                    window.location = "/"
                })
                .catch(function (error) {
                    console.log(error.response)
                    main.status = error.response.data
                });
            }
        },

        register() {
            if (this.user.length != 0 || this.passwd.length != 0) {
                let main = this
                console.log(`${this.user} | ${this.passwd}`)
                axios.post('http://carossa-oper.de:8082/auth/register', {
                    user: this.user,
                    password: this.passwd
                }, { crossdomain: true })
                .then(function (response) {
                    console.log(response)
                    window.location = "/"
                })
                .catch(function (error) {
                    console.log(error.response)
                    main.status = error.response.data
                });
            }
        },
    }
}
</script>

<style scoped>

.hidden {
    visibility: hidden;
}

#register-submit {
    margin-right: 1rem;
}

.login {
    position: absolute;
    top: 30%;
    left: 50%;

    border: 5px solid #5482B6;
    min-width: 100px;

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