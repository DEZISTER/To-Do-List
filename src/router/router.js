import MainPage from '@/pages/MainPage.vue';
import ContactsPage from '@/pages/ContactsPage';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/contacts',
        component: ContactsPage,
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;