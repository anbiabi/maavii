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
        maaviiGold: '#EAB308',
        maaviiTeal: '#06B6D4',
        maaviiOrange: '#F97316',
        maaviiYellow: '#FACC15',
        maaviiRed: '#E11D48',
        maaviiGreen: '#10B981',
        maaviiPurple: '#8B5CF6',
        cream: '#FFFDF5',
        deepRed: '#B91C1C',
        charcoal: '#1A1A1A',
        maaviiChocolate: '#451a03',
      },
      fontFamily: {
        sans: ['var(--font-geologica)', 'sans-serif'],
        serif: ['var(--font-lora)', 'serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
} satisfies Config;