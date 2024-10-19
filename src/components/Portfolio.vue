<template>
    <section id="projects" class="py-16 bg-gray-100">
        <div class="container mx-auto">
            <h2 class="text-3xl font-bold text-center mb-10">Projekte & Artikel</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Loop through projects -->
                <ProjectCard
                    v-for="(project, index) in projects"
                    :key="index"
                    :title="project.title"
                    :description="project.description"
                    :link="project.link"
                />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ProjectCard from './ProjectCard.vue';

export default defineComponent({
    name: 'PortfolioSection',
    components: {
        ProjectCard,
    },
    setup() {
        const projects = ref([
            {
                title: 'Projekt 1: Innovative Lösung',
                description:
                    'Eine benutzerdefinierte Webanwendung, die ich entwickelt habe, um komplexe Daten zu verarbeiten.',
                link: 'https://externalsite.com',
            },
            {
                title: 'Artikel: JavaScript Leistung optimieren',
                description: 'Ein technischer Artikel über die Optimierung von JavaScript-Performance.',
                link: 'https://externalsite.com',
            },
        ]);

        return {
            projects,
        };
    },
});
</script>

<style scoped></style>
