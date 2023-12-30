import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        lightBlue: '#75a2ff',
        mediumBlue:'#002bab',
        darkBlue: '#00268d',
        darkerBlue:'#190095',
        heavyBlue: '#010513',
        darkestBlue: '#00008B',
        navyBlue: '#000C66',
        firmBlue: '#001840',
        deepBlue: '#050A30',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
