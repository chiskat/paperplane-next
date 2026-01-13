/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '576px',
        'mantine-breakpoint-sm': '768px',
        'mantine-breakpoint-md': '880px',
        'mantine-breakpoint-lg': '1280px',
        'mantine-breakpoint-xl': '1680px',
      },
    },
  },
}

export default config
