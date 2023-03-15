/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",


        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                whitePeach: '#F3F3E3',
                lightPeach: '#FCA999',
                lightestPeach: '#FEFCF3',
                darkPeach: '#E97777',
                orangePeach: '#FC6C4C',
                heroPeach: '#e9dad5',
                buttonPeach: '#E95B42',
                darkBlue: '#4D5881',
                yellowText: '#FAB564',
                lightblueText: '#8D99C0',
                facebookBg: '#5271AF'
            },
            fontFamily: {
                playfairDisplay: ['Playfair Display', 'serif'],
                tapestry: ['Tapestry', 'cursive'],
            }

        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        }
    },
    plugins: [],
}