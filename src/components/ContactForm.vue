<template>
    <form @submit.prevent="submitForm" class="bg-white p-8 rounded-lg shadow-lg text-gray-800">
        <div class="mb-4">
            <label for="name" class="block font-semibold mb-2">Name</label>
            <input
                type="text"
                id="name"
                v-model="form.name"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cmykBlue"
                placeholder="Dein Name"
            />
        </div>
        <div class="mb-4">
            <label for="email" class="block font-semibold mb-2">Email</label>
            <input
                type="email"
                id="email"
                v-model="form.email"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cmykBlue"
                placeholder="Deine Email"
            />
        </div>
        <div class="mb-4">
            <label for="message" class="block font-semibold mb-2">Nachricht</label>
            <textarea
                id="message"
                v-model="form.message"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cmykBlue"
                placeholder="Deine Nachricht"
            ></textarea>
        </div>
        <button type="submit" class="bg-cmykBlue text-white px-6 py-3 rounded hover:bg-cmykDarkGray w-full">
            Senden
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
import { ref, reactive } from 'vue';
import axios from 'axios';

// Reactive state for the form
const form = reactive({
    name: '',
    email: '',
    message: '',
});

// Submission status (to show success or error message)
const submissionStatus = ref<string | null>(null);

// Function to submit the form data to Contact Form 7 via API
const submitForm = async () => {
    try {
        const response = await axios.post(
            'https://your-wordpress-site.com/wp-json/contact-form-7/v1/contact-forms/123/feedback',
            {
                'your-name': form.name,
                'your-email': form.email,
                'your-message': form.message,
            },
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );

        // Handle successful submission
        if (response.data.status === 'mail_sent') {
            submissionStatus.value = 'success';
            // Reset form
            form.name = '';
            form.email = '';
            form.message = '';
        } else {
            submissionStatus.value = 'error';
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        submissionStatus.value = 'error';
    }
};
</script>

<style scoped>
textarea {
    min-height: 150px;
}
</style>
