<template>
    <section id="contact" class="py-16 bg-primary text-white">
        <div class="container flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 md:pr-20">
                <strong class="text-xl font-ptsans text-accent">{{ contactSubtitle }}</strong>
                <h2>{{ contactTitle }}</h2>
                <p class="mb-6">{{ contactDescription }}</p>
            </div>
            <div class="w-full md:w-1/2 md:pr-0 md:pl-8 md:py-6">
                <ContactForm v-if="formTitle" :title="formTitle" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getContactContent } from '@/service/apiService';
import ContactForm from './ContactForm.vue';

const contactSubtitle = ref('');
const contactTitle = ref('');
const contactDescription = ref('');
const formTitle = ref('');

// Fetch contact section content dynamically
const fetchContactSection = async () => {
    try {
        const response = await getContactContent();
        contactSubtitle.value = response.data[0].acf.type[0].subtitle;
        contactTitle.value = response.data[0].acf.type[0].title;
        contactDescription.value = response.data[0].acf.type[0].copytext;
        formTitle.value = response.data[0].acf.type[0].form_title;
    } catch (error) {
        console.error('Error fetching contact section:', error);
    }
};

onMounted(() => {
    fetchContactSection();
});
</script>

<style scoped></style>
