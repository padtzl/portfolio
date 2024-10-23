<!-- src/components/ProjectCard.vue -->
<template>
    <div class="card bg-white text-primary rounded-lg shadow-card overflow-hidden">
        <div class="image-wrapper h-60">
            <img v-if="imageData.url" :src="imageData.url" :alt="imageData.alt" class="mb-4 w-full object-cover" />
        </div>

        <div class="py-3 px-6 flex flex-col justify-between">
            <div>
                <h3>
                    {{ formatHtmlEntities(project.title) }}
                </h3>
                <p class="subtitle">{{ formatHtmlEntities(project.name) }}</p>
            </div>
            <div class="mb-3">
                <p class="text-sm">Tech: {{ project.tech }}</p>
                <p class="text-sm">Rolle: {{ project.role }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { defineProps } from 'vue';
import { loadMediaById } from '@/utils/mediaLoader';
import { formatHtmlEntities } from '@/utils/textFormatting';

// Define props for the project data
const props = defineProps<{
    project: {
        title: string;
        name: string;
        description: string;
        image: number;
        tech: string;
        role: string;
        link: string;
    }; // `image` is the media ID
}>();

const imageData = ref<{ url: string; alt: string }>({ url: '', alt: '' });

// Fetch the image URL and alt text using the media ID when the component is mounted
const fetchImageData = async () => {
    if (props.project.image) {
        const media = await loadMediaById(props.project.image);
        imageData.value = media; // Assign the result from loadMediaById
    }
};

onMounted(() => {
    fetchImageData();
});
</script>

<style scoped>
@tailwind base;
@layer base {
    h3 {
        @apply text-lg;
        @apply font-semibold;
        @apply text-accent;
    }
    .subtitle {
        @apply text-xl;
        @apply font-semibold;
        @apply text-primary;
        @apply mb-2;
        @apply h-14;
    }
}
.card {
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
}

img {
    height: 100%;
}

a {
    transition: color 0.2s ease;
}

a:hover {
    color: rgb(0, 72, 105); /* Darker shade of the CMYK blue */
}
</style>
