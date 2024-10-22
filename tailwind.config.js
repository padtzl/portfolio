/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            container: {
                center: true, // Optional: Centers the container horizontally
                padding: '1rem', // Optional: Adds padding to the container
            },
            screens: {
                '2xl': '1440px', // Add a custom breakpoint for 1440px
            },
            colors: {
                primary: '#34324a',
                secondary: '#444267',
                light: '#f4f4f9',
                accent: '#ab47bc',
                highlight: '#78c6a3',
                dark: '#292d3e',
                darkSecondary: '#202331',
                lightGray: '#e0e0e0',
            },
            fontFamily: {
                roboto: ['Roboto Slab', 'serif'],
                ptsans: ['PT Narrow Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
