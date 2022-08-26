import { createRouter, createWebHistory } from "vue-router";

import login from "./views/Login.vue"
import registrasi from "./views/Registrasi.vue"
import dashboard from "./views/Dashboard.vue"
import home from "./views/Home.vue"

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            name: "Login",
            component: login
        },
        {
            path: "/registrasi",
            name: "Registrasi",
            component: registrasi
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: dashboard
        },
        {
            path: "/dashboard/home",
            name: "Home",
            component: home
        }
    ]
})

export default router;