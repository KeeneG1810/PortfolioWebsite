/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-200': '#1a1a2e',
        'dark-300': '#16213e',
        'neon-blue': '#00f5ff',
        'neon-purple': '#8b5cf6',
        'neon-green': '#00ff88',
        'neon-cyan': '#00ffff',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'tech': ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0,245,255,0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0,245,255,0.8)' },
        },
      },
    },
  },
  plugins: [],
}
