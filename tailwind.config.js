/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        obsidian: '#080807',
        charcoal: '#171513',
        ivory: '#F4F0E6',
        limestone: '#D8D0C2',
        laurel: '#1E3329',
        brass: '#B89A5E',
        oxblood: '#4A1F20',
        signal: '#185CFF'
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Arial', 'sans-serif']
      },
      opacity: Object.fromEntries(
        Array.from({ length: 101 }, (_, i) => [i, (i / 100).toString()])
      )
    }
  }
}