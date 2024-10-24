<template>
    <header class="py-4 bg-light text-dark-secondary">
        <div class="container mx-auto flex justify-between items-center">
            <div class="logo">
                <a href="/">
                    <img src="@/assets/logo/logo.png" alt="Logo" class="h-12 md:h-16" />
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button @click="toggleMenu" class="block md:hidden focus:outline-none" aria-label="Toggle navigation">
                <!-- Switch icon based on menu state -->
                <svg
                    v-if="!isMenuOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>

                <!-- Close icon when menu is open -->
                <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <!-- Navigation Menu -->
            <nav :class="isMenuOpen ? 'open' : ''" class="main transition-all duration-300 ease-in-out">
                <ul>
                    <li><a href="#about">Über Mich</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Kontakt</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
@media (min-width: 768px) {
    nav {
        display: flex !important;
    }
}
</style>
