<template>
    <section id="projects" class="bg-light">
        <div class="container">
            <div class="mb-12 md:text-center">
                <strong class="text-xl font-ptsans text-accent">Meine Projekte</strong>
                <h2>Eine Auswahl spannender Projekte</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getProjects } from '@/service/apiService';
import ProjectCard from './ProjectCard.vue';

const projects = ref<Array<{ title: string; name: string; description: string; image: string; link: string }>>([]);

// Fetch the projects from the API
const fetchProjects = async () => {
    try {
        const response = await getProjects();
        console.log(response);
        projects.value = response.data.map((project: any) => {
            return {
                title: project.title.rendered,
                name: project.acf.name,
                description: project.acf.description,
                tech: project.acf.tech,
                role: project.acf.role,
                image: project.acf.image,
                link: project.link,
            };
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
};

onMounted(() => {
    fetchProjects();
});
</script>
