<template>
    <form @submit.prevent="submitForm" class="bg-light p-8 rounded-lg shadow-lg text-primary">
        <div class="mb-4">
            <label for="name" class="block font-semibold mb-2">Name</label>
            <input
                type="text"
                id="name"
                v-model="formData.name"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Dein Name"
            />
        </div>
        <div class="mb-4">
            <label for="email" class="block font-semibold mb-2">Email</label>
            <input
                type="email"
                id="email"
                v-model="formData.email"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Deine Email"
            />
        </div>
        <div class="mb-4">
            <label for="name" class="block font-semibold mb-2">Betreff</label>
            <input
                type="text"
                id="subject"
                v-model="formData.subject"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Dein Betreff"
            />
        </div>
        <div class="mb-4">
            <label for="message" class="block font-semibold mb-2">Nachricht</label>
            <textarea
                id="message"
                v-model="formData.message"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Deine Nachricht"
            ></textarea>
        </div>
        <button type="submit" class="btn bg-dark text-white mt-6 px-8 py-3 rounded-full hover:bg-accent">
            Abschicken
        </button>

        <!-- Success or Error Message -->
        <div v-if="submissionStatus" class="mt-4">
            <p v-if="submissionStatus === 'success'" class="text-green-500">
                Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
            </p>
            <p v-if="submissionStatus === 'error'" class="text-red-500">
                Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.
            </p>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { postFormSubmit } from '@/service/apiService';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const formData = ref<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
});

const submissionStatus = ref<string | null>(null);

const submitForm = async () => {
    try {
        const response = await postFormSubmit(129, formData.value);
        console.log(response);

        // Handle successful submission
        if (response.data.status === 'mail_sent') {
            submissionStatus.value = 'success';
            resetForm();
        } else {
            submissionStatus.value = 'error';
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        submissionStatus.value = 'error';
    }
};

const resetForm = () => {
    formData.value.name = '';
    formData.value.email = '';
    formData.value.subject = '';
    formData.value.message = '';
};
</script>

<style scoped>
textarea {
    min-height: 150px;
}
</style>
