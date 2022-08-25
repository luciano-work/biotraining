const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    mode: 'jit',
    important: false,
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'system-ui', 'sans-serif']
            },
            colors: {
                primary: colors.orange,
                dark: colors.gray,
            },
        },
    },
    variants: {
        extend: {},
        scrollbar: ['dark', 'rounded']
    },
    plugins: [
        require('tailwind-scrollbar')
    ],
}
