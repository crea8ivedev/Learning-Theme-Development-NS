/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
      "./templates/*.liquid",
      "./sections/*.liquid",
      "./snippets/*.liquid",
      "./assets/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gothamBody':['Gotham Book'],
        'gothamBold':['Gotham Bold'],
        'Vectora':['Vectora LT Std Roman']
      },
      fontSize: {
        8: '8px',
        9: '9px',
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        36: '36px',
        38: '38px',
        42: '42px',
        40: '40px',
        44: '44px',
        48: '48px',
        50: '50px',
        64: '64px',
      },
    },
  },
  plugins: [],
}

