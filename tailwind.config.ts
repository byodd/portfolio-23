import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'soft-grey': '#EAEAE6',
        'light-grey': '#B6B6B6',
        'dark-grey': '#1E1E21',
        'darker-grey': '#1E1E1E',
        'mid-grey': '#818181',
        'soft-blue':'#3BB4CB',
      },
      rotate: {
        '14': '14.333deg',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
