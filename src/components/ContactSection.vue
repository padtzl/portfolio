<template>
    <section id="contact" class="py-16 bg-primary text-white">
        <div class="container mx-auto flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 text-center md:text-left p-6">
                <div class="max-w-md">
                    <strong class="text-xl text-accent">{{ contactSubtitle }}</strong>
                    <h2 class="mb-6">{{ contactTitle }}</h2>
                    <p class="pr-4 mb-6">{{ contactDescription }}</p>
                </div>
            </div>
            <div class="md:w-1/2 p-6">
                <ContactForm />
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

// Fetch contact section content dynamically
const fetchContactSection = async () => {
    try {
        const response = await getContactContent();
        contactSubtitle.value = response.data[0].acf.type[0].subtitle;
        contactTitle.value = response.data[0].acf.type[0].title;
        contactDescription.value = response.data[0].acf.type[0].copytext;
    } catch (error) {
        console.error('Error fetching contact section:', error);
    }
};

onMounted(() => {
    fetchContactSection();
});
</script>

<style scoped></style>
