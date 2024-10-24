<template>
    <section class="bg-white">
        <div class="container">
            <h1 class="page-title">Impressum</h1>

            <div class="rich imprint-content" v-html="pageContent"></div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { getImprint } from '@/service/apiService';

interface PageContent {
    content: {
        rendered: string;
    };
}

const pageContent = ref<string>('');

// fetch the page content
const fetchPageContent = async () => {
    try {
        const response = await getImprint();
        console.log(response);

        if (response.data && response.data.length) {
            pageContent.value = response.data[0].content.rendered;
        } else {
            pageContent.value = '<p>Page content not found.</p>';
        }
    } catch (error) {
        console.error('Error fetching the page content:', error);
        pageContent.value = '<p>Failed to load content.</p>';
    }
};

onMounted(() => {
    fetchPageContent();
});
</script>

<style scoped>
h2 {
    margin-top: 3rem;
}
</style>
