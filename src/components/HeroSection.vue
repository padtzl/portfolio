<template>
    <section id="hero" class="pt-8 md:p-0 text-light">
        <div class="container flex flex-col md:flex-row justify-between items-center">
            <div class="md:w-1/3">
                <strong v-if="heroData.subtitle" class="text-2xl font-ptsans font-semibold">
                    {{ heroData.subtitle }}
                </strong>
                <h1 class="hero mb-8">{{ heroData.title }}</h1>
                <div class="rich mb-8 md:mb-12" v-html="heroData.copy"></div>

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

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getHeroContent } from '@/service/apiService';
import { loadMediaById } from '@/utils/mediaLoader';

interface Cta {
    title: string;
    url: string;
}

interface HeroData {
    title: string;
    subtitle: string;
    copy: string;
    cta: Cta;
    image: { url: string } | null;
}

const heroData = ref<HeroData>({
    title: '',
    subtitle: '',
    copy: '',
    cta: { title: '', url: '' },
    image: null,
});

const fetchHeroData = async () => {
    try {
        const response = await getHeroContent();
        const heroPost = response.data[0].acf.type[0];

        const mediaId = heroPost.image; // ACF returns image ID
        const mediaDetails = await loadMediaById(mediaId);

        // Set heroData with the fetched details
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
</script>

<style scoped>
#hero {
    background-image: url('../assets/images/bg-hero.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
