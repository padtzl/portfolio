<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-semibold mb-4">{{ title }}</h3>
        <p class="text-lg mb-4">{{ description }}</p>
        <a :href="link" target="_blank" class="text-cmykBlue hover:underline">Mehr erfahren</a>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
/* eslint-disable */
export default defineComponent({
    name: 'ProjectCard',
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        // Destructure props for easier access
        const { title, description, link } = toRefs(props);

        return {
            title,
            description,
            link,
        };
    },
});
</script>

<style scoped></style>
