<template>
    <section id="about" class="py-16 bg-light">
        <div class="container mx-auto max-w-screen-lg">
            <h2 class="mb-6">{{ aboutContent.title }}</h2>
            <div class="mb-12" v-html="aboutContent.copy"></div>
            <a :href="aboutContent.cta.url" class="btn bg-primary text-light px-8 py-3 rounded-full hover:bg-accent">
                {{ aboutContent.cta.title }}
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getAboutContent } from '@/service/apiService';

const aboutContent = ref({
    title: '',
    copy: '',
    cta: [],
});

// Fetch content dynamically
const fetchAboutContent = async () => {
    try {
        const response = await getAboutContent();
        const aboutResponse = response.data[0].acf.type[0];
        aboutContent.value = {
            title: aboutResponse.title,
            copy: aboutResponse.copy,
            cta: aboutResponse.cta,
        };
    } catch (error) {
        console.error('Error fetching about content:', error);
    }
};

onMounted(() => {
    fetchAboutContent();
});
</script>

<style scoped></style>
