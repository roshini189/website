/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: { DEFAULT: '#0a0910', 2: '#12101a', 3: '#1a1724' },
        iris: '#a78bfa',
        peach: '#fbbf9a',
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(4%, -6%) scale(1.08)' },
        },
        spin: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        drift: 'drift 18s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
};
