import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-bg': "url('/assets/images/background-pattern-mobile.svg')",
        'desktop-bg': "url('/assets/images/background-pattern-desktop.svg')",
      },
      backgroundSize: {
        'full-auto' : '100% auto',
      },
      colors: {
        'white' : 'hsl(0, 0%, 100%)',
        'light-pink' : 'hsl(275, 100%, 97%)',
        'grayish-purple' : 'hsl(292, 16%, 49%)',
        'dark-purple' : 'hsl(292, 42%, 14%)',
      },
      fontFamily: {
        'work-sans' : ['Work Sans', 'sans-serif'],
      },
      fontWeight: {
        'normal' : '400',
        'semibold' : '600',
        'bold' : '700',
      }
    },
  },
  plugins: [],
} satisfies Config;
