/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FAF6EE',
        'ink': '#1A1A2E',
        'ink-secondary': '#4A4A5A',
        'ink-muted': '#94A3B8',
        'ink-faint': '#CBD5E1',
        'pop-blue': '#3B82F6',
        'pop-orange': '#F97316',
        'pop-mint': '#34D399',
        'card-bg': '#FFFFFF',
        'section-alt': '#1A1A2E',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'brutal': '6px 6px 0 0 #1A1A2E',
        'brutal-hover': '3px 3px 0 0 #1A1A2E',
        'brutal-blue': '6px 6px 0 0 #3B82F6',
        'brutal-blue-hover': '3px 3px 0 0 #3B82F6',
        'brutal-orange': '6px 6px 0 0 #F97316',
        'modal': '0 24px 64px rgba(0,0,0,0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
