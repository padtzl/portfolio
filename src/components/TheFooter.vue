<template>
    <footer class="bg-cmykDarkGray text-white py-8">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <!-- Left Section: Company Info -->
            <div class="mb-6 md:mb-0 text-center md:text-left">
                <div class="logo">
                    <a href="/">
                        <img :src="require('@/assets/logo/logo-white.png')" alt="Logo" class="h-16" />
                    </a>
                </div>
                <div class="mt-6">
                    <strong class="mb-4">Philip-Alexander Dietzel</strong>
                    <p class="mt-4">Software Engineer | Full-Stack Development</p>
                    <p>Based in Hamburg</p>
                </div>
            </div>

            <!-- Right Section: Social Media Icons -->
            <div class="flex space-x-4">
                <a href="https://twitter.com" target="_blank" class="hover:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M24 4.56c-.88.39-1.83.65-2.82.77a4.92 4.92 0 002.17-2.71 9.84 9.84 0 01-3.12 1.19 4.92 4.92 0 00-8.39 4.48A13.94 13.94 0 011.67 3.15a4.92 4.92 0 001.52 6.57 4.93 4.93 0 01-2.23-.61v.06a4.92 4.92 0 003.95 4.83 4.93 4.93 0 01-2.22.08 4.92 4.92 0 004.6 3.42 9.86 9.86 0 01-6.11 2.1c-.4 0-.79-.02-1.17-.07a13.94 13.94 0 007.55 2.21c9.05 0 14-7.49 14-13.98 0-.21 0-.42-.02-.63A10 10 0 0024 4.56z"
                        />
                    </svg>
                </a>
                <a href="https://github.com" target="_blank" class="hover:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.491.5.09.683-.217.683-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.37-1.341-3.37-1.341-.454-1.153-1.109-1.46-1.109-1.46-.908-.62.069-.607.069-.607 1.003.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.088 2.912.832.092-.647.35-1.088.637-1.338-2.22-.253-4.555-1.11-4.555-4.944 0-1.092.39-1.986 1.029-2.684-.103-.253-.446-1.271.098-2.65 0 0 .84-.27 2.75 1.026a9.56 9.56 0 015.001 0C17.16 6.097 18 6.367 18 6.367c.545 1.38.202 2.398.099 2.65.64.698 1.029 1.592 1.029 2.684 0 3.842-2.339 4.687-4.565 4.936.36.31.68.923.68 1.86 0 1.343-.012 2.426-.012 2.755 0 .267.18.576.688.479A9.994 9.994 0 0022 12c0-5.523-4.477-10-10-10z"
                        />
                    </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" class="hover:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M19.5 3H4.5C3.675 3 3 3.675 3 4.5v15c0 .825.675 1.5 1.5 1.5h15c.825 0 1.5-.675 1.5-1.5v-15c0-.825-.675-1.5-1.5-1.5zM9 17H6V10h3v7zm-1.5-8.25a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm11.25 8.25h-3v-3.25c0-.89-.72-1.5-1.5-1.5s-1.5.61-1.5 1.5V17h-3V10h3v1.13C12.217 10.172 13 9.5 14 9.5c2.07 0 3 1.58 3 3.5V17z"
                        />
                    </svg>
                </a>
            </div>
        </div>

        <!-- Center Section: Links -->
        <div class="md:mb-0 flex flex-col items-center mt-8">
            <nav>
                <ul class="flex space-x-6 text-accent">
                    <li><a href="#about" class="hover:underline">Impressum</a></li>
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

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Footer',
    setup() {
        return {};
    },
});
</script>

<style scoped>
/* You can add custom styling here if necessary */
</style>
