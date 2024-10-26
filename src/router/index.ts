import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { PAGE_TITLE, META_DESCRIPTION } from '@/environment';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/impressum',
        name: 'Impressum',
        meta: {
            title: 'Impressum - padietzel.de',
        },
        component: () => import('@/views/Imprint.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to) => {
    const { title, description } = to.meta;
    const defaultTitle = PAGE_TITLE;
    const defaultDescription = META_DESCRIPTION;

    document.title = title || defaultTitle;
    const descriptionElement = document.querySelector('head meta[name="description"]');
    descriptionElement.setAttribute('content', description || defaultDescription);
});

export default router;
