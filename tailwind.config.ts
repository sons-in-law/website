import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm parchment background
        parchment: {
          50: '#FDFCFA',
          100: '#FAF8F5',
          200: '#F5F2ED',
        },
        // Deep ink for text
        ink: {
          900: '#1A1918',
          800: '#2D2B29',
          700: '#3D3B38',
          600: '#5C5955',
          500: '#7A7672',
        },
        // Warm terracotta accent
        terracotta: {
          500: '#C4725A',
          600: '#A85F4A',
          700: '#8B4D3B',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wide-custom': '0.12em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
