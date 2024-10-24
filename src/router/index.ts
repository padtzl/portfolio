import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/impressum',
        name: 'Impressum',
        component: () => import('@/views/Imprint.vue'),
    },
    {
        path: '/style-guide',
        name: 'Style Guide',
        component: () => import('@/views/StyleGuide.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
