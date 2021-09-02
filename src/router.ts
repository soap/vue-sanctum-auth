import { createRouter, createWebHistory } from 'vue-router'
import Home from './Pages/Home.vue'
import Login from './Pages/Login.vue'
import Register from './Pages/Register.vue'
import Profile from './Pages/Profile.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/profile",
        name: "profile",
        component: Profile,
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router