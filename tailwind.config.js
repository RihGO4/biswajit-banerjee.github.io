/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            h1: {
              color: '#1f2937',
              fontWeight: '700',
            },
            h2: {
              color: '#1f2937',
              fontWeight: '600',
              marginTop: '2em',
            },
            h3: {
              color: '#1f2937',
              fontWeight: '600',
            },
            'code': {
              color: '#059669',
              backgroundColor: '#f3f4f6',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'a': {
              color: '#059669',
              textDecoration: 'none',
              '&:hover': {
                color: '#047857',
              },
            },
            'ul > li': {
              paddingLeft: '1.5em',
              '&::before': {
                backgroundColor: '#059669',
              },
            },
            'blockquote': {
              borderLeftColor: '#059669',
              color: '#4b5563',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}