import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createRouter, createWebHashHistory } from "vue-router";
const jwt = require("jsonwebtoken")

import Dashboard from "@/views/Dashboard.vue"
import Login from "@/views/Login.vue"
import Post from "@/views/Post.vue"

let isAuthenticated = false;

const routes = [
    { path: '/',                component: Dashboard,   name: "Dashboard",  meta: { requiresAuth: true } },
    { path: '/post',            component: Post,        name: "Post",       meta: { requiresAuth: true} },
    { path: '/login',           component: Login,       name: "Login",      meta: {requiresAuth: false }},
]

const router = createRouter ({
    history: createWebHashHistory(),
    base: "/",
    routes,
})

const app = createApp({});

function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        let token = getCookie("token")
        if (token) {
            jwt.verify(token, "b539526ecec5d6863e4bcddddfb3c7caffc59f245e506832600233cdea1694578e7d5ece682bdb8917dff8d4e27f523dccb359900b56a1aceb4e234b78d0fee2", (error, user) => {
                if (error) { next({ name: "Login" }) } else {
                    console.log(user)
                    isAuthenticated = true
                    next()
                }
            })
        } else {
            isAuthenticated = false
            next({ name: "Login" })
        }
    } else {
        isAuthenticated = false
        next();
    }
});

app.use(router);
app.mount("#app");