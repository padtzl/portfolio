/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                cmykBlue: 'rgb(0, 90, 132)', // C=85; M=54; Y=45; K=29
                cmykDarkGray: 'rgb(65, 65, 66)', // Darker variant for accents
                primary: '#34324a',
                light: '#f4f4f9',
                accent: '#ff847c',
                'accent-2': '#78c6a3',
                dark: '#333333',
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
