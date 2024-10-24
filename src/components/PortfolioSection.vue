<template>
    <section id="portfolio" class="bg-light">
        <div class="container">
            <!-- Portfolio Heading -->
            <div class="mb-12 md:text-center">
                <strong v-if="portfolioSubtitle" class="text-xl font-ptsans text-accent">{{
                    portfolioSubtitle
                }}</strong>
                <h2 v-if="portfolioTitle">{{ portfolioTitle }}</h2>
            </div>

            <!-- Project Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getProjects, getPortfolioContent } from '@/service/apiService';
import ProjectCard from './ProjectCard.vue';

const portfolioTitle = ref<string>('');
const portfolioSubtitle = ref<string>('');
const projects = ref<Array<{ title: string; name: string; description: string; image: string; link: string }>>([]);

// Fetch the portfolio content from the API
const fetchPortfolioContent = async () => {
    try {
        const response = await getPortfolioContent();
        console.log(response);
        portfolioTitle.value = response.data[0].acf.type[0].title || 'Portfolio';
        portfolioSubtitle.value = response.data[0].acf.type[0].subtitle || 'Meine Projekte';
    } catch (error) {
        console.error('Error fetching portfolio content:', error);
    }
};

// Fetch the projects from the API
const fetchProjects = async () => {
    try {
        const response = await getProjects();
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
    fetchPortfolioContent();
    fetchProjects();
});
</script>
