<template>
    <div class="bg-primary">
        <TheHeader />
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import TheHeader from './components/TheHeader.vue';

export default {
    name: 'App',
    components: {
        TheHeader,
    },
};
</script>

<style>
.container {
    max-width: 1280px !important;
}

h1 {
    letter-spacing: 2.4px;
}
/*#app {
  font-family: Avenir, Helvetica, Arial, sans- serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
