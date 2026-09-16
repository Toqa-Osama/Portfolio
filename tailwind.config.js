/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
          cardBorder: '#E2E8F0',
          header: '#0F172A',
          body: '#334155',
          muted: '#475569',
          badgeBg: '#EDE9FE',
          badgeText: '#5B21B6',
          badgeBorder: '#DDD6FE',
          accent: '#7C3AED',
          accentDark: '#6D28D9',
        },
        dark: {
          bg: '#0B0B10',
          bgSecondary: '#0F0E17',
          card: '#171523',
          cardBorder: '#28243D',
          cardHover: '#1E1B2E',
          header: '#FFFFFF',
          body: '#CBD5E1',
          muted: '#94A3B8',
          accent: '#8B5CF6',
          accentViolet: '#7C3AED',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        arabic: ['Cairo', 'IBM Plex Sans Arabic', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)',
        'glow-sm': '0 0 15px -3px rgba(124, 58, 237, 0.25)',
        'glow-md': '0 0 25px -4px rgba(124, 58, 237, 0.35)',
        'glow-lg': '0 0 35px -5px rgba(124, 58, 237, 0.45)',
        'glow-violet': '0 0 25px -3px rgba(139, 92, 246, 0.3)',
      },
      backgroundImage: {
        'purple-glow-gradient': 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)',
        'accent-gradient': 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)',
      }
    },
  },
  plugins: [],
}
