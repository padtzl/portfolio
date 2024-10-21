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
                cmykBlue: 'rgb(0, 90, 132)', // C=85; M=54; Y=45; K=29
                cmykDarkGray: 'rgb(65, 65, 66)', // Darker variant for accents
                primary: '#34324a',
                light: '#f4f4f9',
                accent: '#ab47bc',
                'accent-2': '#78c6a3',
                dark: '#292d3e',
                'dark-secondary': '202331',
                'light-gray': '#e0e0e0',
            },
            fontFamily: {
                roboto: ['Roboto Slab', 'serif'],
                ptsans: ['PT Narrow Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
