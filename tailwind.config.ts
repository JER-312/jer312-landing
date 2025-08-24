/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                gilmer: ['Gilmer', 'sans-serif'],
            },
            fontWeight: {
                light: 300,
                regular: 400,
                medium: 500,
                bold: 700,
                heavy: 900,
            },
        },
    },
    plugins: [],
};