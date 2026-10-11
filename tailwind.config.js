/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#08090D',
        midnight: '#10131D',
        surface: {
          DEFAULT: '#141824',
          subtle: '#181E2E',
          elevated: '#1F263B',
          border: '#28314B',
          highlight: '#323E5E',
        },
        cyan: {
          laser: '#4DEBFF',
          muted: '#2A9CB0',
        },
        blue: {
          ultra: '#526BFF',
          dark: '#1E2958',
        },
        lime: {
          accent: '#C8FF54',
          subtle: '#8CAE38',
        },
        white: {
          soft: '#F4F5FA',
        },
        silver: {
          muted: '#9298AA',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '6px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '10px',
      },
      transitionDuration: {
        DEFAULT: '180ms',
        fast: '120ms',
        normal: '180ms',
      },
    },
  },
  plugins: [],
}
