/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: '#fff', 
      blue: '#2563eb',
      green: '#1DB954',
      dark: '#080a0f',
      red: '#b71c1c',
      dark_other: '#0C0F16',
      dark_label: '#10141C',
      dark_label2: '#141821',
      dark_description: '#a1a1aa',
    },
    screens: {
      phone: '375px',
      pc: '900px'
    },
    extend: {},
  },
}
