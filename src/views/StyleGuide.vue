<template>
    <div class="container mx-auto py-10">
        <h1 class="text-primary text-5xl font-bold mb-10">Style Guide</h1>

        <!-- Typography Section -->
        <section class="mb-12">
            <h2 class="text-white text-3xl font-semibold mb-4">Typography</h2>
            <div class="space-y-4 text-white">
                <p class="text-5xl font-bold font-roboto">H1 - Heading 1</p>
                <p class="text-4xl font-semibold">H2 - Heading 2</p>
                <p class="text-3xl font-semibold">H3 - Heading 3</p>
                <p class="text-2xl font-medium">H4 - Heading 4</p>
                <p class="text-xl font-medium">H5 - Heading 5</p>
                <p class="text-lg font-medium">H6 - Heading 6</p>
                <p class="text-base font-ptNarrowSans">Body Large - Base Text</p>
                <p class="text-sm font-normal">Body Medium - Smaller Text</p>
                <p class="text-xs font-normal">Body Small - Smallest Text</p>
            </div>
        </section>

        <!-- Colors Section -->
        <section class="mb-12">
            <h2 class="text-primary text-3xl font-semibold mb-4">Colors</h2>
            <div class="grid grid-cols-3 gap-4">
                <div class="p-6 bg-primary text-light">Primary Color - #444267</div>
                <div class="p-6 bg-light text-primary">Light Color - #f4f4f9</div>
                <div class="p-6 bg-accent text-white">Accent Color 1 - #ff847c</div>
                <div class="p-6 bg-accent-2 text-white">Accent Color 2 - #78c6a3</div>
                <div class="p-6 bg-dark text-light">Dark Gray - #333333</div>
                <div class="p-6 bg-light-gray text-dark">Light Gray - #e0e0e0</div>
            </div>
        </section>

        <!-- Buttons Section -->
        <section class="mb-12">
            <h2 class="text-primary text-3xl font-semibold mb-4">Buttons</h2>
            <div class="space-x-4">
                <button
                    class="bg-primary text-light font-medium py-2 px-4 rounded-md shadow-md hover:bg-primary-dark transition duration-200"
                >
                    Primary Button
                </button>
                <button
                    class="bg-light text-primary font-medium py-2 px-4 rounded-md shadow-md border border-primary hover:bg-light-dark transition duration-200"
                >
                    Secondary Button
                </button>
            </div>
        </section>

        <!-- Cards Section -->
        <section class="mb-12">
            <h2 class="text-primary text-3xl font-semibold mb-4">Cards</h2>
            <div class="grid grid-cols-2 gap-6">
                <div class="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition duration-200">
                    <h3 class="text-primary text-2xl font-semibold">Card Title</h3>
                    <p class="text-gray-700 text-sm mt-2">
                        This is a sample card description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div class="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition duration-200">
                    <h3 class="text-primary text-2xl font-semibold">Card Title</h3>
                    <p class="text-gray-700 text-sm mt-2">
                        This is a sample card description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </section>

        <!-- Links Section -->
        <section>
            <h2 class="text-primary text-3xl font-semibold mb-4">Links</h2>
            <a href="#" class="text-accent hover:underline hover:text-accent-dark transition duration-200">
                This is a link
            </a>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'StyleGuide',
});
</script>

<style scoped>
.container {
    max-width: 1200px;
}
</style>
