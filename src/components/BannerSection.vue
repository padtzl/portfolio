<template>
    <section id="banner" class="small bg-white">
        <div class="container flex flex-col justify-center items-center">
            <div class="text-primary">
                <h2 class="alt mb-4">Unternehmen, die auf mich setzen</h2>
            </div>
            <div class="flex flex-wrap md:flex-nowrap justify-center items-center">
                <div v-for="(logo, index) in logos" :key="index" class="p-4 md:w-1/5 w-1/4 flex justify-center">
                    <img :src="logo.url" :alt="logo.alt" class="h-20 w-auto" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getMediaById, getReferences } from '@/service/apiService';

const logos = ref<Array<{ url: string; alt: string }>>([]);

// Fetch media details for each logo by media ID
const fetchMediaDetails = async (mediaId: number) => {
    try {
        const response = await getMediaById(mediaId);
        const mediaData = response.data;
        return {
            url: mediaData.source_url,
            alt: mediaData.alt_text || 'reference-logo',
        };
    } catch (error) {
        console.error(`Error fetching media for ID ${mediaId}:`, error);
        return null;
    }
};

// Fetch logos from WordPress ACF custom post type "referenzen"
const fetchLogos = async () => {
    try {
        const response = await getReferences();

        const logoPromises = response.data.map(async (post: any) => {
            const logoMediaId = post.acf.logo;
            // Fetch media details for the logo
            return fetchMediaDetails(logoMediaId);
        });

        // Wait for all the logo media details to be fetched
        logos.value = (await Promise.all(logoPromises)).filter(Boolean);
    } catch (error) {
        console.error('Error fetching referenzen:', error);
    }
};

onMounted(() => {
    fetchLogos();
});
</script>

<style scoped>
h2 {
    color: #2b2a3e;
}
img {
    height: auto;
    max-height: 3rem;
    width: auto;
}
</style>
