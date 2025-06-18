import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeInDelay 5s',
                'fade-out': 'fadeOut 1s',
            },
            keyframes: {
                fadeInDelay: {
                    '0%, 95%': { opacity: '0' },
                    '100%': { opacity: '100' },
                },
                fadeOut: {
                    '0%': { opacity: '100' },
                    '100%': { opacity: '0' },
                },
            },
            colors: {
                'dark': '#141414',
                'white': '#f4f1e9',
                'red': '#8b2c30',
                'blue': '#4d4d80'
            },
        },

        fontFamily: {
            'sans': ['var(--font-mundial)', 'Arial', 'Helvetica', 'sans-serif'],
            'mundial': ['var(--font-mundial)', 'sans-serif'],
        },
    },
    plugins: [],
};
export default config;
