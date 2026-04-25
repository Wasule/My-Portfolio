/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Syne', 'sans-serif'],
      },
      colors: {
        bg:      '#020508',
        bg2:     '#060d14',
        bg3:     '#0a1628',
        blue:    '#4fa8f5',
        cyan:    '#00d4ff',
        border:  'rgba(30,80,140,0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 2.5s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
      },
    },
  },
  plugins: [],
}
