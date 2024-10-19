<template>
    <section id="banner" class="py-16 bg-dark">
        <div class="container mx-auto flex flex-col justify-center items-center">
            <!-- Loop through logos and render each one -->
            <div class="text-light">
                <h2 class="text-2xl font-bold mb-4">Companies I worked with</h2>
            </div>
            <div class="flex justify-center items-center">
                <div
                    v-for="(logo, index) in logos"
                    :key="index"
                    class="p-4 md:w-1/5 sm:w-1/2 w-full flex justify-center"
                >
                    <img :src="logo.url" :alt="logo.alt" class="h-20 w-auto" />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
    name: 'Banner',
    setup() {
        // Reactive state to store the logos (with URL and alt text)
        const logos = ref<Array<{ url: string; alt: string }>>([]);

        // Fetch media details for each logo by media ID
        const fetchMediaDetails = async (mediaId: number) => {
            try {
                const response = await axios.get(`https://padietzel.de/wp-json/wp/v2/media/${mediaId}`);
                const mediaData = response.data;
                return {
                    url: mediaData.source_url, // URL of the logo image
                    alt: mediaData.alt_text || 'Referenz logo', // Alt text of the logo
                };
            } catch (error) {
                console.error(`Error fetching media for ID ${mediaId}:`, error);
                return null;
            }
        };

        // Fetch logos from WordPress ACF custom post type "referenzen"
        const fetchLogos = async () => {
            try {
                const response = await axios.get('https://padietzel.de/wp-json/wp/v2/referenz');

                const logoPromises = response.data.map(async (post: any) => {
                    // Extract the media ID from the ACF field (assuming the field is `logo`)
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

        // Fetch logos on component mount
        onMounted(() => {
            fetchLogos();
        });

        return {
            logos,
        };
    },
});
</script>

<style scoped>
/* Adjust logo image styling as needed */
img {
    /* Control the logo height */
    height: auto;
    max-height: 2rem;
    width: auto;
}
</style>
