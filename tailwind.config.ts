/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                gilmer: ['Gilmer', 'sans-serif'],
            },
            letterSpacing: {
                'super-tight': '-0.07em',
                'touch': '-0.10em',
            },
        },
    },
    plugins: [],
};