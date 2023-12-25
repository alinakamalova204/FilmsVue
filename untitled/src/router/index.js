// import VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router'

import AllFilmsPage from "../pages/AllFilmsPage.vue";
import MainPage from "../pages/MainPage.vue";
import FilmPage from "../pages/FilmPage.vue";

const router = createRouter({
    mode: history,
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainPage
        },
        {
            path: '/films',
            name: 'films',
            component:  AllFilmsPage
        }
    ]
});
export default router;