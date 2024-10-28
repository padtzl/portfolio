<template>
    <section id="skills" class="bg-light">
        <div class="container flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 md:pl-0 md:p-8">
                <h2>{{ skillsContent.title }}</h2>
                <p class="mb-8 md:mb-12 lg:pr-20 sm:pr-10">
                    {{ skillsContent.copytext }}
                </p>
            </div>
            <div class="md:w-1/2 md:pr-0 md:pl-4 md:py-8">
                <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                    <span
                        v-for="(skill, index) in skills"
                        :key="index"
                        class="bg-darkSecondary text-light py-2 px-4 rounded-full text-sm font-ptsans font-semibold hover:bg-accent"
                    >
                        {{ skill.name }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getSkills, getSkillContent } from '@/service/apiService';

const skills = ref<Array<{ name: string }>>([]);

const skillsContent = ref<{ title: string; copytext: string }>({
    title: '',
    copytext: '',
});

// Fetch all skills (used in tags on the right)
const fetchSkills = async () => {
    try {
        const response = await getSkills();

        skills.value = response.data.map((skill: any) => ({
            name: skill.title.rendered,
        }));
    } catch (error) {
        console.error('Error fetching skills:', error);
    }
};

// Fetch content for left side
const fetchSkillContent = async () => {
    try {
        const response = await getSkillContent();
        skillsContent.value = {
            title: response.data[0].acf.type[0].title,
            copytext: response.data[0].acf.type[0].copytext,
        };
    } catch (error) {
        console.error('Error fetching skills content:', error);
    }
};

onMounted(() => {
    fetchSkills();
    fetchSkillContent();
});
</script>

<style scoped>
span {
    transition: background-color 0.2s ease;
    cursor: default;
    letter-spacing: 0.48px;
}
</style>
