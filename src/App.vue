<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import TheNav from './components/TheNav.vue';

const TheFooter = defineAsyncComponent(() => import('./components/TheFooter.vue'));
</script>

<template>
    <TheNav />
    <RouterView />
    <TheFooter />
</template>

<style></style>
