<template>
    <section id="about" class="py-0">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div class="md:w-1/3 ps text-white">
                <strong class="text-2xl font-ptsans font-light mb-4">Moin, ich bin..</strong>
                <h1 class="text-8xl font-roboto font-bold text-uppercase mb-4">PHILIP</h1>
                <p class="text-md font-ptsans mb-6">
                    Tech ist meine Leidenschaft. ein erfahrener Full-Stack-Entwickler mit über 7 Jahren Erfahrung in
                    JavaScript und PHP. Meine Leidenschaft liegt in der Erstellung sauberer und effizienter Codes, um
                    benutzerfreundliche Lösungen zu entwickeln.
                </p>
                <a href="#contact" class="bg-light text-primary mt-4 px-6 py-2 rounded hover:bg-cmykDarkGray">
                    Kontaktiere mich
                </a>
            </div>
            <div class="md:w-1/2 mt-20">
                <img :src="require('@/assets/images/profile-new.png')" alt="Profile Picture" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
export default {
    name: 'HeroSection',
};
</script>

<style scoped>
#about {
    background-image: url(../assets/images/bg-hero.png);
    background-position: center;
    /* background-size: revert-layer; */
    background-repeat: no-repeat;
}
h1 {
    letter-spacing: 2.4px;
}
</style>
