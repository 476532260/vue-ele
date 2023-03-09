/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      spacing: {
        '4': '4px',
        '5': '5px',
        '8': '8px',
        '10': '10px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '36': '36px',
        '40': '40px',
        '44': '44px',
        '48': '48px',
        '53': '53px',
        '64': '64px',
        '88': '88px',
        '95': '95px',
        '104': '104px',
        '188': '188px'
      },
      height: {
        header: '44px'
      },
      lineHeight: {
        '28': '28px',
        '40': '40px'
      },
      padding: {
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '48px'
      },
      margin: {
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '48px'
      },
      borderRadius: {
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '48px'
      },
      fontSize: {
        sm: ['12px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '32': '32px'
      },
      colors: {
        main: '#02b6fd',
        bglight: '#29caff',
        bgdark: '#00abf5',
        masktop: 'rgba(0, 0, 0, 0.3)',
        maskbottom: 'rgba(0, 0, 0, 0.04)',
        price: '#ff4b33',
        score: '#ff6300',
        'f5': '#f5f5f5',
        '333': '#333',
        '999': '#999'
      },
      borderRadius: {
        '8': '8px'
      }
    },
  },
  plugins: [],
}
