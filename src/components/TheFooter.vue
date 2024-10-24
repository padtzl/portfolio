<template>
    <footer class="bg-zinc-900 text-white py-8">
        <div class="container flex flex-col md:flex-row justify-between items-center">
            <!-- Left Section: Company Info -->
            <div class="mb-8 md:mb-0">
                <div class="logo">
                    <a href="/">
                        <img src="@/assets/logo/logo-white.png" alt="Logo" class="h-16" />
                    </a>
                </div>
                <div class="font-ptsans mt-6">
                    <p class="font-light text-base mt-2">Software Engineering | Full-Stack Development</p>
                    <p class="font-light text-base mt-1">Based in Hamburg - Remote worldwide</p>
                </div>
            </div>

            <!-- Right Section: Social Media Icons -->
            <div class="flex space-x-4">
                <a
                    v-for="(link, icon) in socialLinks"
                    :key="icon"
                    :href="link"
                    target="_blank"
                    class="hover:text-gray-400"
                >
                    <FontAwesomeIcon :icon="['fab', icon]" class="h-8 w-8" />
                </a>
            </div>
        </div>

        <!-- Center Section: Links -->
        <div class="md:mb-0 flex flex-col items-center mt-8">
            <nav>
                <ul class="flex space-x-6 text-accent">
                    <li><a href="/impressum" class="hover:underline">Impressum</a></li>
                    <li><a href="#projects" class="hover:underline">AGB</a></li>
                </ul>
            </nav>
        </div>

        <!-- Footer Bottom -->
        <div class="container mx-auto text-center mt-2">
            <p class="text-sm text-light">
                &copy; {{ new Date().getFullYear() }} Philip-Alexander Dietzel. Alle Rechte vorbehalten.
            </p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faXing } from '@fortawesome/free-brands-svg-icons';
import { getSocialLinks } from '@/service/apiService';

library.add(faGithub, faLinkedin, faXing);

const socialLinks = ref<{ github: string; linkedin: string; xing: string }>({
    github: '',
    linkedin: '',
    xing: '',
});

// fetch social links from ACF options page
const fetchSocialLinks = async () => {
    try {
        const response = await getSocialLinks();
        const { data } = response;
        socialLinks.value.github = data.github;
        socialLinks.value.linkedin = data.linkedin;
        socialLinks.value.xing = data.xing;
    } catch (error) {
        console.error('Error fetching social links:', error);
    }
};

onMounted(() => {
    fetchSocialLinks();
});
</script>

<style scoped>
/* You can add custom styling here if necessary */
</style>
