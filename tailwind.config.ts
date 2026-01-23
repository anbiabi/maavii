import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maaviiGold: '#D97706',
        maaviiTeal: '#0D9488',
        maaviiOrange: '#EA580C',
        maaviiYellow: '#FBBF24',
        cream: '#FFFDF5',
        deepRed: '#B91C1C',
        charcoal: '#1A1A1A',
      },
      fontFamily: {
        sans: ['var(--font-geologica)', 'sans-serif'],
        serif: ['var(--font-lora)', 'serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
} satisfies Config;