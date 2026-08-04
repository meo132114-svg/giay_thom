/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF8F1',
          100: '#F5F1E8',
          200: '#EDE6D6',
          300: '#E0D5BE',
          400: '#C9B998',
          500: '#B0A079',
        },
        wood: {
          50: '#F7F0E8',
          100: '#E8D5C2',
          200: '#D4B89E',
          300: '#BD9B79',
          400: '#A57F5A',
          500: '#8B5E3C',
          600: '#7A4F32',
          700: '#654028',
          800: '#523320',
          900: '#3D2618',
        },
        eco: {
          50: '#EAF7EB',
          100: '#D3F0D5',
          200: '#A8E0AC',
          300: '#7AD07F',
          400: '#5CB962',
          500: '#4CAF50',
          600: '#3D9142',
          700: '#2F7333',
          800: '#225525',
          900: '#163918',
        },
        ink: {
          50: '#F6F5F2',
          100: '#E7E5DF',
          200: '#C9C6BC',
          300: '#A8A498',
          400: '#7C7869',
          500: '#5A5648',
          600: '#46433A',
          700: '#35332C',
          800: '#26241F',
          900: '#1A1815',
        },
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        display: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(82, 51, 32, 0.12)',
        card: '0 8px 40px -12px rgba(82, 51, 32, 0.18)',
        glow: '0 0 40px -8px rgba(76, 175, 80, 0.35)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        leafSway: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        fadeIn: 'fadeIn 0.6s ease both',
        scaleIn: 'scaleIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        floatY: 'floatY 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        leafSway: 'leafSway 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
