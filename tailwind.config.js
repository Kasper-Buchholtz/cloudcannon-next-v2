/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx,css}",
    "./components-library/**/*.{js,jsx,ts,tsx,css}",
    "./pages/**/*.{js,jsx,ts,tsx,css}",
    "./content/**/*.{js,jsx,ts,tsx,css}",
    "./data/**/*.{js,jsx,ts,tsx,css}",
    "./lib/**/*.{js,jsx,ts,tsx,css}"

  ],
  theme: {// replace tailwind default classes with your own
    screens: {// screen sizes // https://tailwindcss.com/docs/breakpoints
      'xs': '428px',    // mobil      // 4 Column    // 16px margin    // 428px xs:
      'sm': '768px',    // tablet     // 8 Column    // 28px margin    // 768px sm:
      'md': '1280px',   // desktop    // 12 Column   // 52px margin    // 1280px md:
      'lg': '1440px',   // desktop    // 12 Column   // 72px margin    // 1440px lg:
      'xl': '1920px',   // desktop    // 24 Column   // 144px margin   // 1920px xl:
      '2xl': '2500px',  // desktop    // 24 Column   // 206px margin   // 2500px 2xl:
    },
    fontSize: { // font sizes
      'small': ['clamp(16px, calc(16px + 1.6667vw), 18px);', { // Info text // H6 // prev —— small
        lineHeight: '150%',
        letterSpacing: '0',
        fontWeight: '300',
      }],
      'regular': ['1rem', { // Paragraph // prev —— regular
        lineHeight: '150%',
        letterSpacing: '0',
        fontWeight: '300',
      }],
      'increased': ['clamp(1.1em, calc(1.1em + 1.6667vw), 1.2em);', { // H5 // prev —— increased
        lineHeight: '1.5',
        letterSpacing: '0',
        fontWeight: '700',
      }],
      'medium': ['clamp(1.25em, calc(1.25em + 2.7778vw), 1.5em);', { // H4 // prev —— medium 
        lineHeight: '1.5',
        letterSpacing: '0',
        fontWeight: '700',
      }],
      'large': ['clamp(1.563em, calc(1.563em + 3.125vw), 2.25em);', { // H3 // prev —— large
        lineHeight: 'clamp(120%, calc(120% + 0.2vw), 120%)',
        letterSpacing: '0',
        fontWeight: '700',
      }],
      'huge': ['clamp(1.953em, calc(1.953em + 2.6667vw), 3.375em);', { // H2 // prev —— huge
        lineHeight: '1.5',
        letterSpacing: '0',
        fontWeight: '700',
      }],
      'giant': ['clamp(2.441em, calc(2.441em + 2.1111vw), 5.063em);', { // H1 // prev —— giant
        lineHeight: '1.5',
        letterSpacing: '0',
        fontWeight: '700',
      }],
    },
    colors: { // colors
      primary: {
        DEFAULT: '#3BE086', // => -primary
        'hover': '#2DC673', // => -primary-hover
      },
      'black': '#000',
      'white': '#fff',
      'gray': '#8492a6',
      'transparent': 'transparent',
      'dark': {// the dark color
        500: '#666666',
        600: '#4D4D4D',
        700: '#333333',
        800: '#1A1A1A',
        900: '#0A0A0A',
      },
      'light': {// the light color
        0: '#FFFFFF',
        50: '#F0F0F0',
        100: '#E0E0E0',
        200: '#C2C2C2',
        300: '#A3A3A3',
        400: '#858585',
      },
      'superego': '#3BE086', // => -superego
    },
    fontFamily: { // fonts // you can add more fonts here if needed
      sans: ['work-sans', 'sans-serif'],
      serif: ['work-sans', 'serif'],
    },
    boxShadow: { // box shadow
      'xs': '0px 2px 2px rgba(15, 28, 51, 0.06)',
      'sm': '0px 2px 2px rgba(15, 28, 51, 0.07), 0px 2px 4px rgba(15, 28, 51, 0.06)',
      'md': '0px 3px 8px -2px rgba(15, 28, 51, 0.1), 0px 2px 4px -4px rgba(15, 28, 51, 0.04)',
      'lg': '0px 10px 14px -4px rgba(15, 28, 51, 0.08), 0px 2px 8px -4px rgba(15, 28, 51, 0.05)',
      'xl': '0px 16px 20px -4px rgba(15, 28, 51, 0.1), 0px 6px 8px -4px rgba(15, 28, 51, 0.04)',
      '2xl': '0px 24px 40px -10px rgba(15, 28, 51, 0.16)',
      '3xl': '0px 32px 56px -12px rgba(15, 28, 51, 0.16)',
      '4xl': '0px 72px 132px rgba(15, 28, 51, 0.06)',
      '5xl': '0px 80px 200px -12px rgba(15, 28, 51, 0.12)',
      'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      'none': 'none',
    },
    blur: { // blur
      'sm': '2px',
      'md': '4.5px',
      'lg': '7.5',
      'xl': '12px',
    },
    opacity: { // opacity
      'none': '0',
      '0': '0',
      '5': '0.05',
      '15': '0.15',
      '20': '0.2',
      '25': '0.25',
      '30': '0.3',
      '35': '0.35',
      '40': '0.4',
      '45': '0.45',
      '50': '0.5',
      '55': '0.55',
      '60': '0.6',
      '65': '0.65',
      '70': '0.7',
      '75': '0.75',
      '80': '0.8',
      '85': '0.85',
      '90': '0.9',
      '95': '0.95',
      '100': '1',
    },
    gridTemplateColumns: {
      // 24-column grid
      '24': 'repeat(24, minmax(0, 1fr))',   // 24-column grid
      '12': 'repeat(12, minmax(0, 1fr))',   // 12-column grid
      '8': 'repeat(8, minmax(0, 1fr))',     // 8-column grid
      '4': 'repeat(4, minmax(0, 1fr))',     // 4-column grid
      '3': 'repeat(3, minmax(0, 1fr))',     // 3-column grid
      '2': 'repeat(2, minmax(0, 1fr))',     // 2-column grid
      '3-small': 'repeat(3, minmax(0, 0.1fr))',     // 4-column grid
    },
    extend: { // adds another variation of the tailwind classes
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
      gridColumnEnd: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        // NEGETIVE
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
        '-4': '-4',
        '-5': '-5',
        '-6': '-6',
        '-7': '-7',
        '-8': '-8',
        '-9': '-9',
        '-10': '-10',
        '-11': '-11',
        '-12': '-12',
        '-13': '-13',
        '-14': '-14',
        '-14': '-14',
        '-15': '-15',
        '-16': '-16',
        '-17': '-17',
        '-18': '-18',
        '-19': '-19',
        '-20': '-20',
        '-21': '-21',
        '-22': '-22',
        '-23': '-23',
        '-24': '-24',
      },
      gridColumnStart: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        // NEGETIVE
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
        '-4': '-4',
        '-5': '-5',
        '-6': '-6',
        '-7': '-7',
        '-8': '-8',
        '-9': '-9',
        '-10': '-10',
        '-11': '-11',
        '-12': '-12',
        '-13': '-13',
        '-14': '-14',
        '-14': '-14',
        '-15': '-15',
        '-16': '-16',
        '-17': '-17',
        '-18': '-18',
        '-19': '-19',
        '-20': '-20',
        '-21': '-21',
        '-22': '-22',
        '-23': '-23',
        '-24': '-24',
      },
      gridColumn: {
        'span-24': 'span 24 / span 24',
      },
      borderWidth: {
        DEFAULT: '1px',  // Default border width
        '0': '0',        // No border (0 pixel)
        '2': '2px',      // 2 pixels border width
        '4': '4px',      // 4 pixels border width
        '8': '8px',      // 8 pixels border width
      },
      zIndex: { // z-index 
        '100': '100',
        '150': '150',
        '200': '200',
        '250': '250',
        '300': '300',
        '350': '350',
        '400': '400',
        '450': '450',
        '500': '500',
        '550': '550',
        '600': '600',
        '650': '650',
        '700': '700',
        '750': '750',
        '800': '800',
        '850': '850',
        '900': '900',
        '950': '950',
        '1000': '1000',
        '9999': '9999',
        'top': '99999',
      },
      borderRadius: { // border-radius
        '1000': '62.5rem',
        '10': '0.625rem',
        '5': '0.3125rem',
      },
      scale: { // scale
        '115': '1.15'
      },
      spacing: { // spacing
        '4.5': '1.125rem',// 1.125rem = 
        '5.5': '1.125rem',
        '13': '3.125rem',
        '13.5': '3.25rem',
        '19': '4.5rem',
        // Viewport Height
        'vh-75': '75vh',
        'vh-100': '100vh',
        'vh-90': '90vh',
        'vh-80': '80vh',
        'vh-85': '85vh',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '16/9': '16 / 9',
        '1/1': '1 / 1',
      },
      height: theme => ({
        "screen/2": "calc(100vh / 2)",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen/6": "calc(100vh / 6)",
      }),
      minHeight: (theme) => ({
        ...theme('height'),
        ...theme('spacing'),
      }),
      MaxHeight: (theme) => ({
        ...theme('height'),
        ...theme('spacing'),
        ...theme('screens')
      }),
      MinWidth: (theme) => ({
        ...theme('spacing'),
        ...theme('screens'),
      }),
      MaxWidth: (theme) => ({
        ...theme('spacing'),
        ...theme('screens'),
      }),
      Width: (theme) => ({
        ...theme('screens'),
      }),
    }
  },
  plugins: [],
  safelist: [],
}