<template>
    <header class="py-4 bg-light text-dark-secondary">
        <div class="container mx-auto flex justify-between items-center">
            <div class="logo">
                <a href="/">
                    <img src="@/assets/logo/logo.png" alt="Logo" class="h-16" />
                </a>
            </div>
            <nav>
                <ul class="flex space-x-6 font-bold">
                    <li><a href="#about" class="hover:text-accent">Über Mich</a></li>
                    <li><a href="#projects" class="hover:underline">Projekte</a></li>
                    <li><a href="#contact" class="hover:underline">Kontakt</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TheHeader',
});
</script>

<style scoped></style>
