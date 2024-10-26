<template>
    <HeroSection />
    <AboutMeSection />
    <BannerSection />
    <SkillsSection />
    <PortfolioSection />
    <ContactSection />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import HeroSection from '@/components/HeroSection.vue';
import AboutMeSection from '@/components/AboutMeSection.vue';

const BannerSection = defineAsyncComponent(() => import('@/components/BannerSection.vue'));
const SkillsSection = defineAsyncComponent(() => import('@/components/SkillsSection.vue'));
const PortfolioSection = defineAsyncComponent(() => import('@/components/PortfolioSection.vue'));
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'));
</script>
