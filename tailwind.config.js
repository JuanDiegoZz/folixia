module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#FFFFFF", // white - Clinical laboratory foundation
        secondary: "#D8E0C7", // green-200 - Gentle natural backing
        accent: "#AA7229", // yellow-700 - Premium gold confidence
        
        // Background Colors
        background: "#F8F9F6", // stone-50 - Subtle warmth
        surface: "#F0C48C", // yellow-300 - Champagne highlights
        
        // Text Colors
        'text-primary': "#6E7D4E", // green-700 - Natural sophistication
        'text-secondary': "#8A9B6B", // green-600 - Clear hierarchy
        
        // Status Colors
        success: "#7A8F5A", // green-600 - Growth confirmation
        warning: "#B8860B", // yellow-600 - Gentle urgency
        error: "#A0522D", // orange-700 - Warm concern
        
        // Additional shades for flexibility
        'accent-light': "#F0C48C", // yellow-300 - Champagne highlights
        'accent-dark': "#8B5A2B", // yellow-800 - Deeper gold
        'secondary-light': "#E8F0D9", // green-100 - Lighter natural
        'secondary-dark': "#B8C9A3", // green-300 - Deeper natural
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
      },
      boxShadow: {
        'product': '0 4px 20px rgba(170, 114, 41, 0.08)',
        'card': '0 2px 12px rgba(170, 114, 41, 0.06)',
        'gentle': '0 1px 8px rgba(170, 114, 41, 0.04)',
        'hover': '0 6px 24px rgba(170, 114, 41, 0.12)',
      },
      borderColor: {
        'subtle': '#D8E0C7', // green-200 - Gentle natural backing
      },
      transitionDuration: {
        'gentle': '300ms',
      },
      transitionTimingFunction: {
        'gentle': 'ease-in-out',
      },
      animation: {
        'serum': 'serum-refraction 4s ease-in-out infinite',
        'molecule': 'molecule-float 8s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        'serum-refraction': {
          '0%': { opacity: '0.7', transform: 'translateY(2px)' },
          '50%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0.7', transform: 'translateY(2px)' },
        },
        'molecule-float': {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(120deg)' },
          '66%': { transform: 'translateY(5px) rotate(240deg)' },
          '100%': { transform: 'translateY(0px) rotate(360deg)' },
        },
        'fadeIn': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slideUp': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient-gold': {
          'background': 'linear-gradient(135deg, #AA7229, #F0C48C)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.glass-effect': {
          'backdrop-filter': 'blur(10px)',
          'background': 'rgba(255, 255, 255, 0.8)',
          'border': '1px solid rgba(216, 224, 199, 0.3)',
        },
        '.clinical-border': {
          'border': '1px solid #D8E0C7',
        },
        '.hover-lift': {
          'transition': 'transform 300ms ease-in-out, box-shadow 300ms ease-in-out',
          '&:hover': {
            'transform': 'translateY(-2px)',
            'box-shadow': '0 6px 24px rgba(170, 114, 41, 0.12)',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}