<template>
    <form
        @submit.prevent="submitForm"
        data-netlify="true"
        name="contact"
        method="POST"
        class="bg-light p-8 rounded-md shadow-card text-primary font-ptsans"
    >
        <h3 class="text-2xl mb-6 text-dark">{{ props.title }}</h3>

        <!-- Hidden Netlify form name input -->
        <input type="hidden" name="form-name" value="contact" />

        <div class="space-y-4">
            <div>
                <input
                    type="text"
                    name="name"
                    v-model="formData.name"
                    class="w-full p-3 border-b border-dark focus:outline-none focus:border-accent bg-light placeholder:text-primary"
                    placeholder="Dein Name"
                    required
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    v-model="formData.email"
                    class="w-full p-3 border-b border-primary focus:outline-none focus:border-accent bg-light placeholder:text-primary"
                    placeholder="Deine Email"
                    required
                />
            </div>
            <div>
                <input
                    type="text"
                    name="subject"
                    v-model="formData.subject"
                    class="w-full p-3 border-b focus:outline-none focus:border-accent bg-light placeholder:text-primary"
                    placeholder="Dein Betreff"
                    required
                />
            </div>
            <div>
                <textarea
                    name="message"
                    v-model="formData.message"
                    class="w-full p-3 border-b focus:outline-none focus:border-accent bg-light placeholder:text-primary"
                    placeholder="Deine Nachricht"
                    required
                ></textarea>
            </div>
        </div>

        <button type="submit" class="btn bg-dark text-white mt-10 px-8 py-2 rounded-full hover:bg-accent">
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

interface FormProps {
    title: string;
}

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const props = defineProps<FormProps>();

const formData = ref<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
});

const submissionStatus = ref<string | null>(null);

const submitForm = async () => {
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('form-name', 'contact');
    formDataToSubmit.append('name', formData.value.name);
    formDataToSubmit.append('email', formData.value.email);
    formDataToSubmit.append('subject', formData.value.subject);
    formDataToSubmit.append('message', formData.value.message);

    try {
        const response = await fetch('/', {
            method: 'POST',
            body: formDataToSubmit,
        });

        if (response.ok) {
            submissionStatus.value = 'success';
            resetForm();
        } else {
            throw new Error('Network response was not ok');
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
input,
textarea {
    border: none;
    border-bottom: 2px solid;
    background-color: inherit;
    transition: border-color 0.4s ease;
}

textarea {
    min-height: 150px;
}
</style>
