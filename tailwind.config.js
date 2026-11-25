/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F8',
          100: '#D9E3EC',
          200: '#B4C7D9',
          300: '#8AAAC4',
          400: '#5F8DB0',
          500: '#3D719C',
          600: '#2A567D',
          700: '#1D3E5D',
          800: '#142B45', // Primary brand deep navy
          900: '#0E1E31',
          950: '#08111D',
        },
        gold: {
          50: '#FBF8F0',
          100: '#F6EEDB',
          200: '#ECDAB7',
          300: '#DFC28D',
          400: '#D3AB66',
          500: '#C69B52', // Accent warm gold
          600: '#B0833C',
          700: '#8D642C',
          800: '#6E4D23',
          900: '#52381A',
        },
        charcoal: {
          DEFAULT: '#252525',
          light: '#3D3D3D',
          muted: '#666666',
        },
        cream: {
          50: '#FAF9F6',
          100: '#F8F7F4', // Background off-white
          200: '#EDEBE4',
          300: '#DFDCD3',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -5px rgba(20, 43, 69, 0.08), 0 4px 6px -2px rgba(20, 43, 69, 0.04)',
        'luxury-hover': '0 20px 35px -5px rgba(20, 43, 69, 0.15), 0 8px 12px -3px rgba(20, 43, 69, 0.08)',
        'gold-glow': '0 0 25px rgba(198, 155, 82, 0.3)',
      }
    },
  },
  plugins: [],
}
