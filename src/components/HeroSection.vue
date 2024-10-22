<template>
    <section id="hero" class="py-0">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div class="md:w-1/3 ps text-light">
                <strong v-if="heroData.subtitle" class="text-3xl font-ptsans font-semibold">
                    {{ heroData.subtitle }}
                </strong>
                <h1 class="hero mb-8">{{ heroData.title }}</h1>
                <div class="rich mb-12" v-html="heroData.copy"></div>

                <a
                    :href="heroData.cta.url"
                    class="btn bg-light text-primary px-8 py-3 rounded-full hover:bg-accent hover:text-light"
                >
                    {{ heroData.cta.title }}
                </a>
            </div>
            <div class="md:w-1/2 mt-20">
                <img v-if="heroData.image" :src="heroData.image.url" alt="Profile Picture" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { getHeroContent } from '@/service/apiService';
import { loadMediaById } from '@/utils/mediaLoader';

export default defineComponent({
    name: 'HeroSection',
    setup() {
        const heroData = ref({
            title: '',
            subtitle: '',
            copy: '',
            cta: [],
            image: null,
        });

        const fetchHeroData = async () => {
            try {
                const response = await getHeroContent();
                const heroPost = response.data[0].acf.type[0];

                const mediaId = heroPost.image; // ACF returns image ID
                const mediaDetails = await loadMediaById(mediaId);
                // Extract custom fields (ACF) from the post
                heroData.value = {
                    title: heroPost.title,
                    subtitle: heroPost.subtitle,
                    copy: heroPost.copy,
                    cta: heroPost.cta,
                    image: mediaDetails,
                };
            } catch (error) {
                console.error('Error fetching Hero data:', error);
            }
        };

        onMounted(() => {
            fetchHeroData();
        });

        return {
            heroData,
        };
    },
});
</script>

<style scoped>
#hero {
    background-image: url('../assets/images/bg-hero.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
