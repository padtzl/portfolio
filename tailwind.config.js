/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '2rem',
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
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-in-out',
                slideIn: 'slideIn 0.5s ease-in-out',
            },
        },
    },
    plugins: [],
};
