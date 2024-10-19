import { defineStore } from 'pinia';

export const usePosts = defineStore('posts', {
    state: () => ({
        posts: [],
    }),
    actions: {},
    getters: {},
});
