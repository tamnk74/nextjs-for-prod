import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // './node_modules/flyonui/flyonui.js',
    './node_modules/flyonui/dist/js/*.js', // Require only if you want to use FlyonUI JS component
    // './node_modules/flyonui/dist/js/accordion.js', // Require only if you want to use FlyonUI accordion JS component
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [
    require('flyonui'), // Require only if you want to use FlyonUI CSS component
    require('flyonui/plugin'), // Require only if you want to use FlyonUI JS component
  ],
} satisfies Config;
