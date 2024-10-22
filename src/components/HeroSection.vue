<template>
    <section id="hero" class="py-0">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div class="md:w-1/3 ps text-white">
                <strong v-if="heroData.subtitle" class="text-2xl font-ptsans font-medium mb-4">
                    {{ heroData.subtitle }}
                </strong>
                <h1 class="text-8xl font-roboto font-bold text-uppercase mb-6">{{ heroData.title }}</h1>
                <div class="text-md font-ptsans mb-12" v-html="heroData.copy"></div>

                <a
                    :href="heroData.cta.url"
                    class="bg-light text-accent font-bold mt-4 px-8 py-3 rounded-full hover:bg-cmykDarkGray"
                >
                    {{ heroData.cta.title }}
                </a>
            </div>
            <div class="md:w-1/2 mt-20">
                <img
                    :src="heroData.image ? heroData.image.url : '/assets/images/profile-new.png'"
                    alt="Profile Picture"
                />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { getHeroContent } from '@/service/apiService';
import { loadMediaById } from '@/utils/mediaLoader';
import PrimaryButton from './button/PrimaryButton.vue';

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
                // Replace 'component' with the correct custom post type slug
                const response = await getHeroContent();
                const heroPost = response.data[0].acf.type[0]; // Assuming the first result is the "Hero" post
                console.log(heroPost);

                const mediaId = heroPost.image; // Assume ACF returns image ID
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

        const handleClick = () => {
            console.log('click');
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
}
h1 {
    letter-spacing: 4.4px;
    text-transform: uppercase;
}
</style>
